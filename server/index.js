import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import passport from './config/passport.js';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import chatRoutes from './routes/chat.js';
import philosophersRoutes, { seedPhilosophers } from './routes/philosophers.js';
import conceptsRoutes, { seedConcepts } from './routes/concepts.js';
import quizRoutes from './routes/quiz.js';
import quoteRoutes from './routes/quote.js';
import statsRoutes from './routes/stats.js';
import schoolsRoutes from './routes/schools.js';
import timelineRoutes from './routes/timeline.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.set('trust proxy', 1);

/**
 * Normalize origin:
 * - remove trailing slash
 * - ignore empty values
 */
function normalizeOrigin(origin = '') {
  return origin.trim().replace(/\/$/, '');
}

/**
 * Parse comma-separated env values:
 * FRONTEND_URL=https://vnr-web-bay.vercel.app
 * ALLOWED_ORIGINS=https://vnr-web-bay.vercel.app,https://mln-web-bay.vercel.app,http://localhost:5173
 */
function parseOrigins(value = '') {
  return value
    .split(',')
    .map(normalizeOrigin)
    .filter(Boolean);
}

const allowedOrigins = new Set([
  ...parseOrigins(process.env.FRONTEND_URL || ''),
  ...parseOrigins(process.env.ALLOWED_ORIGINS || ''),

  // Production frontends
  'https://vnr-web-bay.vercel.app',
  'https://mln-web-bay.vercel.app',

  // Local development
  'http://localhost:5173',
  'http://localhost:4173',
]);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow server-to-server, curl, Render health checks, mobile apps, etc.
    if (!origin) {
      return callback(null, true);
    }

    const normalizedOrigin = normalizeOrigin(origin);

    if (allowedOrigins.has(normalizedOrigin)) {
      return callback(null, true);
    }

    return callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204,
};

// CORS must be before helmet and before routes.
// This also handles browser preflight OPTIONS requests.
app.use(cors(corsOptions));

// Security headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' },
  })
);

// Global rate limit
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Quá nhiều yêu cầu, vui lòng thử lại sau.' },
  })
);

app.use(express.json());

// Passport JWT / Google OAuth
app.use(passport.initialize());

// Connect DB then seed data once at startup
connectDB()
  .then(async () => {
    try {
      await Promise.all([seedPhilosophers(), seedConcepts()]);
      console.log('Data seeded at startup');
    } catch (err) {
      console.error('Seed error (non-fatal):', err.message);
    }
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
  });

// Health check
app.get('/api/health', (_, res) => {
  res.json({
    ok: true,
    service: 'MLN Web API',
    allowedOrigins: Array.from(allowedOrigins),
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Stricter rate limit for chat
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Bạn đã gửi quá nhiều tin nhắn, vui lòng thử lại sau.' },
});

app.use('/api/chat', chatLimiter, chatRoutes);
app.use('/api/philosophers', philosophersRoutes);
app.use('/api/concepts', conceptsRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/quote', quoteRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/schools', schoolsRoutes);
app.use('/api/timeline', timelineRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Không tìm thấy endpoint này.',
    path: req.originalUrl,
  });
});

// Global error handler
app.use((err, req, res, _next) => {
  console.error(err.stack || err.message);

  if (err.message?.startsWith('Not allowed by CORS')) {
    return res.status(403).json({
      error: 'Origin không được phép truy cập API.',
      origin: req.headers.origin || null,
      allowedOrigins: Array.from(allowedOrigins),
    });
  }

  res.status(500).json({
    error: 'Lỗi máy chủ nội bộ.',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Allowed origins:', Array.from(allowedOrigins));
});
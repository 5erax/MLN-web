import { Router } from 'express';
import Concept from '../models/Concept.js';
import { CONCEPT_DETAILS } from '../data/partyHistoryKnowledge.js';

const router = Router();
let seeded = false;

async function seedConcepts() {
  if (seeded) return;
  try {
    for (const [slug, detail] of Object.entries(CONCEPT_DETAILS)) {
      await Concept.updateOne(
        { slug },
        {
          $set: {
            title: detail.title,
            description: detail.description,
            school: detail.school,
          },
        },
        { upsert: true }
      );
    }
    await Concept.deleteMany({ slug: { $nin: Object.keys(CONCEPT_DETAILS) } });
    seeded = true;
    console.log('Party history topics seeded');
  } catch (err) {
    console.error('Seed party history topics error:', err);
  }
}

export { seedConcepts };

let listCache = null;
let listCacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000;

router.get('/', async (_req, res) => {
  try {
    const now = Date.now();
    if (!listCache || now - listCacheTime > CACHE_TTL) {
      listCache = await Concept.find().sort({ school: 1, title: 1 }).lean();
      listCacheTime = now;
    }
    res.json({ concepts: listCache });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const concept = await Concept.findOne({ slug: req.params.slug }).lean();
    if (!concept) return res.status(404).json({ error: 'Không tìm thấy chủ đề.' });
    res.json({ concept });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

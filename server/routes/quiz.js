import { Router } from 'express';
import QuizResult from '../models/QuizResult.js';
import { optionalAuth } from '../middleware/auth.js';

const router = Router();

const QUIZ_QUESTIONS = [
  {
    id: '1',
    question: 'Đảng Cộng sản Việt Nam ra đời vào ngày nào?',
    correctAnswer: 'b',
    options: [
      { id: 'a', text: '3/2/1929' },
      { id: 'b', text: '3/2/1930' },
      { id: 'c', text: '2/9/1945' },
      { id: 'd', text: '19/12/1946' },
    ],
  },
  {
    id: '2',
    question: 'Ai chủ trì Hội nghị thành lập Đảng đầu năm 1930?',
    correctAnswer: 'a',
    options: [
      { id: 'a', text: 'Nguyễn Ái Quốc' },
      { id: 'b', text: 'Trần Phú' },
      { id: 'c', text: 'Lê Hồng Phong' },
      { id: 'd', text: 'Nguyễn Văn Cừ' },
    ],
  },
  {
    id: '3',
    question: 'Hội nghị Trung ương 8 tháng 5/1941 đặt nhiệm vụ nào lên hàng đầu?',
    correctAnswer: 'c',
    options: [
      { id: 'a', text: 'Công nghiệp hóa đất nước' },
      { id: 'b', text: 'Cải cách ruộng đất' },
      { id: 'c', text: 'Giải phóng dân tộc' },
      { id: 'd', text: 'Hội nhập quốc tế' },
    ],
  },
  {
    id: '4',
    question: 'Thắng lợi nào đưa đến sự ra đời của nước Việt Nam Dân chủ Cộng hòa?',
    correctAnswer: 'd',
    options: [
      { id: 'a', text: 'Cao trào 1930-1931' },
      { id: 'b', text: 'Phong trào dân chủ 1936-1939' },
      { id: 'c', text: 'Chiến thắng Điện Biên Phủ' },
      { id: 'd', text: 'Cách mạng Tháng Tám năm 1945' },
    ],
  },
  {
    id: '5',
    question: 'Đường lối kháng chiến chống thực dân Pháp có đặc điểm cơ bản nào?',
    correctAnswer: 'a',
    options: [
      { id: 'a', text: 'Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh và tranh thủ quốc tế' },
      { id: 'b', text: 'Chỉ dựa vào lực lượng quân sự chính quy' },
      { id: 'c', text: 'Đánh nhanh để kết thúc chiến tranh ngay' },
      { id: 'd', text: 'Phụ thuộc hoàn toàn vào viện trợ bên ngoài' },
    ],
  },
  {
    id: '6',
    question: 'Chiến thắng Điện Biên Phủ diễn ra vào ngày nào?',
    correctAnswer: 'c',
    options: [
      { id: 'a', text: '19/8/1945' },
      { id: 'b', text: '2/9/1945' },
      { id: 'c', text: '7/5/1954' },
      { id: 'd', text: '30/4/1975' },
    ],
  },
  {
    id: '7',
    question: 'Đại hội III năm 1960 xác định cách mạng miền Bắc giữ vai trò nào?',
    correctAnswer: 'b',
    options: [
      { id: 'a', text: 'Quyết định trực tiếp đối với giải phóng miền Nam' },
      { id: 'b', text: 'Quyết định nhất đối với sự phát triển của toàn bộ cách mạng Việt Nam' },
      { id: 'c', text: 'Chỉ hỗ trợ về ngoại giao' },
      { id: 'd', text: 'Không liên quan đến cách mạng miền Nam' },
    ],
  },
  {
    id: '8',
    question: 'Sự kiện nào hoàn thành giải phóng miền Nam, thống nhất đất nước?',
    correctAnswer: 'd',
    options: [
      { id: 'a', text: 'Hiệp định Genève năm 1954' },
      { id: 'b', text: 'Phong trào Đồng khởi' },
      { id: 'c', text: 'Hiệp định Paris năm 1973' },
      { id: 'd', text: 'Đại thắng mùa Xuân năm 1975' },
    ],
  },
  {
    id: '9',
    question: 'Đại hội nào khởi xướng công cuộc đổi mới toàn diện đất nước?',
    correctAnswer: 'c',
    options: [
      { id: 'a', text: 'Đại hội IV năm 1976' },
      { id: 'b', text: 'Đại hội V năm 1982' },
      { id: 'c', text: 'Đại hội VI năm 1986' },
      { id: 'd', text: 'Đại hội VII năm 1991' },
    ],
  },
  {
    id: '10',
    question: 'Bài học xuyên suốt nào thể hiện rõ trong lịch sử lãnh đạo của Đảng?',
    correctAnswer: 'a',
    options: [
      { id: 'a', text: 'Xuất phát từ thực tiễn, phát huy sức mạnh nhân dân và giữ vững độc lập tự chủ' },
      { id: 'b', text: 'Sao chép nguyên mẫu kinh nghiệm nước ngoài' },
      { id: 'c', text: 'Tách đấu tranh quân sự khỏi chính trị và ngoại giao' },
      { id: 'd', text: 'Chỉ ưu tiên một lực lượng xã hội duy nhất' },
    ],
  },
];

router.get('/questions', (_req, res) => {
  const questions = QUIZ_QUESTIONS.map(({ correctAnswer, ...question }) => question);
  res.json({ questions });
});

router.post('/submit', optionalAuth, async (req, res) => {
  const { answers } = req.body;
  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({ error: 'Vui lòng gửi đầy đủ câu trả lời.' });
  }

  const correct = QUIZ_QUESTIONS.reduce(
    (total, question) => total + (answers[question.id] === question.correctAnswer ? 1 : 0),
    0
  );
  const total = QUIZ_QUESTIONS.length;
  const primarySchool = correct >= 9
    ? 'Nắm vững kiến thức'
    : correct >= 7
      ? 'Đạt yêu cầu'
      : correct >= 5
        ? 'Cần ôn thêm'
        : 'Nên học lại bài';

  const result = {
    primarySchool,
    score: { correct, total },
    description: `Bạn trả lời đúng ${correct}/${total} câu. ${correct >= 7
      ? 'Bạn đã nắm được các mốc và nội dung cơ bản của môn học.'
      : 'Hãy xem lại bài học và dòng thời gian trước khi làm lại.'}`,
  };

  try {
    await QuizResult.create({
      user: req.user?._id || null,
      primarySchool,
      score: result.score,
    });
  } catch {
    // Việc lưu thống kê không làm gián đoạn kết quả quiz.
  }

  res.json(result);
});

export default router;

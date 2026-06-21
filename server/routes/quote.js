import { Router } from 'express';

const router = Router();

const SOURCE_URL = 'https://tulieuvankien.dangcongsan.vn/';

const QUOTES = [
  {
    text: 'Không có gì quý hơn độc lập, tự do.',
    author: 'Hồ Chí Minh',
    source: 'Lời kêu gọi chống Mỹ, cứu nước, ngày 17/7/1966',
    sourceUrl: SOURCE_URL,
  },
  {
    text: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.',
    author: 'Hồ Chí Minh',
    source: 'Bài nói tại Đại hội Mặt trận Tổ quốc Việt Nam lần thứ II, năm 1961',
    sourceUrl: SOURCE_URL,
  },
  {
    text: 'Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.',
    author: 'Hồ Chí Minh',
    source: 'Tuyên ngôn Độc lập, ngày 2/9/1945',
    sourceUrl: SOURCE_URL,
  },
  {
    text: 'Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.',
    author: 'Hồ Chí Minh',
    source: 'Lời kêu gọi Toàn quốc kháng chiến, ngày 19/12/1946',
    sourceUrl: SOURCE_URL,
  },
  {
    text: 'Nước Việt Nam là một, dân tộc Việt Nam là một.',
    author: 'Hồ Chí Minh',
    source: 'Thư gửi đồng bào cả nước, năm 1958',
    sourceUrl: SOURCE_URL,
  },
  {
    text: 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật.',
    author: 'Đảng Cộng sản Việt Nam',
    source: 'Tinh thần Đại hội đại biểu toàn quốc lần thứ VI, năm 1986',
    sourceUrl: SOURCE_URL,
  },
];

function getDailyQuote() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  return QUOTES[dayOfYear % QUOTES.length];
}

router.get('/daily', (_req, res) => {
  res.json({ quote: getDailyQuote() });
});

export default router;

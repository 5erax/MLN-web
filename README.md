# Website Lịch sử Đảng Cộng sản Việt Nam

Nền tảng học tập tương tác giúp sinh viên hệ thống hóa tiến trình, đường lối và bài học kinh nghiệm trong lịch sử Đảng Cộng sản Việt Nam.

## Tính năng

- Bài giảng theo tiến trình lịch sử, có mục lục và quiz theo bài.
- Kho nhân vật lịch sử, chủ đề, văn kiện và dòng thời gian.
- Bài kiểm tra kiến thức 10 câu về ba giai đoạn chính.
- Trợ lý chỉ trả lời trong phạm vi Lịch sử Đảng.
- Đăng nhập Google và thống kê hoạt động học tập.

## Nội dung

Nội dung được tổ chức theo cấu trúc chính của *Giáo trình Lịch sử Đảng Cộng sản Việt Nam*:

1. Đảng ra đời và lãnh đạo đấu tranh giành chính quyền (1930-1945).
2. Lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945-1975).
3. Lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (từ 1975).

## Chạy dự án

### Backend

```bash
cd server
npm install
npm run dev
```

Các biến môi trường cần thiết: `MONGODB_URI`, `JWT_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `FRONTEND_URL` và `BACKEND_URL`.

### Frontend

```bash
cd client
npm install
npm run dev
```

Frontend mặc định chạy tại `http://localhost:5173`; backend mặc định chạy tại `http://localhost:4000`.

## Công nghệ

- Frontend: React, Vite, React Router, React Markdown.
- Backend: Node.js, Express, MongoDB, Mongoose, Passport Google OAuth 2.0.
- Dữ liệu môn học: `server/data/partyHistoryKnowledge.js` và `client/src/data/resistanceLessonData.js`.

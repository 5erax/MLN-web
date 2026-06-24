export const examChapters = [
  { id: 'all', label: 'Tất cả chương' },
  { id: '1930-1945', label: '1930-1945: Đảng ra đời và giành chính quyền' },
  { id: '1945-1975', label: '1945-1975: Kháng chiến và thống nhất đất nước' },
  { id: '1975-now', label: 'Từ 1975: Xây dựng đất nước và đổi mới' },
];

export const examDifficulties = [
  { id: 'all', label: 'Tất cả độ khó' },
  { id: 'easy', label: 'Dễ' },
  { id: 'medium', label: 'Trung bình' },
  { id: 'hard', label: 'Khó' },
];

const CHAPTER_LABELS = {
  '1930-1945': '1930-1945',
  '1945-1975': '1945-1975',
  '1975-now': 'Từ 1975',
};

const LESSONS = {
  founding: 'dang-ra-doi-va-cuong-linh-1930',
  august: 'chuyen-huong-va-cach-mang-thang-tam-1939-1945',
  resistance: 'dang-lanh-dao-khang-chien-1951-1954',
  renovation: 'duong-loi-doi-moi-1986-den-nay',
};

const optionIds = ['a', 'b', 'c', 'd'];

function makeQuestion(item) {
  return {
    id: item.id,
    chapterId: item.chapterId,
    chapterLabel: CHAPTER_LABELS[item.chapterId],
    difficulty: item.difficulty,
    relatedLessonSlug: item.relatedLessonSlug,
    question: item.question,
    options: [item.correct, ...item.wrong].map((text, index) => ({
      id: optionIds[index],
      text,
    })),
    correctAnswer: 'a',
    explanation: item.explanation,
  };
}

const rawExamQuestions = [
  // =========================
  // 1930-1945: Dễ
  // =========================
  {
    id: 'q001',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.founding,
    question: 'Đảng Cộng sản Việt Nam ra đời vào thời gian nào?',
    correct: 'Đầu năm 1930',
    wrong: ['Tháng 8 năm 1945', 'Tháng 5 năm 1954', 'Tháng 12 năm 1986'],
    explanation:
      'Đảng Cộng sản Việt Nam ra đời đầu năm 1930, thường lấy ngày 3/2/1930 làm ngày kỷ niệm thành lập Đảng.',
  },
  {
    id: 'q002',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.founding,
    question: 'Ai chủ trì Hội nghị thành lập Đảng đầu năm 1930?',
    correct: 'Nguyễn Ái Quốc',
    wrong: ['Trần Phú', 'Lê Hồng Phong', 'Nguyễn Văn Cừ'],
    explanation:
      'Nguyễn Ái Quốc là người chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam.',
  },
  {
    id: 'q003',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.founding,
    question: 'Văn kiện nào thuộc Cương lĩnh chính trị đầu tiên của Đảng?',
    correct: 'Chánh cương vắn tắt và Sách lược vắn tắt',
    wrong: ['Luận cương tháng 10 năm 1930', 'Đề cương văn hóa Việt Nam', 'Lời kêu gọi toàn quốc kháng chiến'],
    explanation:
      'Chánh cương vắn tắt và Sách lược vắn tắt là những văn kiện quan trọng cấu thành Cương lĩnh chính trị đầu tiên.',
  },
  {
    id: 'q004',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.founding,
    question: 'Tác phẩm nào tập hợp các bài giảng của Nguyễn Ái Quốc tại Quảng Châu?',
    correct: 'Đường Kách mệnh',
    wrong: ['Tự chỉ trích', 'Kháng chiến nhất định thắng lợi', 'Nhật - Pháp bắn nhau và hành động của chúng ta'],
    explanation:
      'Đường Kách mệnh là tác phẩm quan trọng góp phần chuẩn bị tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng.',
  },
  {
    id: 'q005',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.founding,
    question: 'Hội Việt Nam Cách mạng Thanh niên được thành lập ở đâu?',
    correct: 'Quảng Châu, Trung Quốc',
    wrong: ['Hà Nội', 'Sài Gòn', 'Paris, Pháp'],
    explanation:
      'Hội Việt Nam Cách mạng Thanh niên được Nguyễn Ái Quốc thành lập tại Quảng Châu, Trung Quốc năm 1925.',
  },
  {
    id: 'q006',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.founding,
    question: 'Luận cương chính trị tháng 10 năm 1930 gắn với nhân vật nào?',
    correct: 'Trần Phú',
    wrong: ['Nguyễn Ái Quốc', 'Hồ Tùng Mậu', 'Võ Nguyên Giáp'],
    explanation:
      'Trần Phú là Tổng Bí thư đầu tiên của Đảng và gắn với Luận cương chính trị tháng 10 năm 1930.',
  },
  {
    id: 'q007',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.founding,
    question: 'Phong trào cách mạng tiêu biểu năm 1930-1931 là gì?',
    correct: 'Xô viết Nghệ - Tĩnh',
    wrong: ['Phong trào Đông Du', 'Phong trào Đồng khởi', 'Phong trào Ba đảm đang'],
    explanation:
      'Xô viết Nghệ - Tĩnh là đỉnh cao của phong trào cách mạng 1930-1931.',
  },
  {
    id: 'q008',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.august,
    question: 'Chiến tranh thế giới thứ hai bùng nổ vào năm nào?',
    correct: '1939',
    wrong: ['1919', '1945', '1954'],
    explanation:
      'Chiến tranh thế giới thứ hai bùng nổ năm 1939, làm tình hình thế giới và Đông Dương thay đổi sâu sắc.',
  },
  {
    id: 'q009',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.august,
    question: 'Hội nghị Trung ương 8 tháng 5 năm 1941 đặt nhiệm vụ nào lên hàng đầu?',
    correct: 'Giải phóng dân tộc',
    wrong: ['Cải cách ruộng đất', 'Công nghiệp hóa', 'Hội nhập kinh tế quốc tế'],
    explanation:
      'Hội nghị Trung ương 8 nhấn mạnh nhiệm vụ giải phóng dân tộc là nhiệm vụ cấp bách hàng đầu.',
  },
  {
    id: 'q010',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.august,
    question: 'Mặt trận Việt Minh được thành lập nhằm mục tiêu chủ yếu nào?',
    correct: 'Đoàn kết lực lượng yêu nước để đấu tranh giành độc lập',
    wrong: ['Tổ chức chính quyền thuộc địa', 'Thực hiện cải cách công nghiệp', 'Thay thế hoàn toàn Đảng'],
    explanation:
      'Việt Minh là hình thức mặt trận dân tộc thống nhất, tập hợp rộng rãi các lực lượng yêu nước.',
  },
  {
    id: 'q011',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.august,
    question: 'Nhật đảo chính Pháp ở Đông Dương vào thời gian nào?',
    correct: '9/3/1945',
    wrong: ['3/2/1930', '19/8/1945', '2/9/1945'],
    explanation:
      'Ngày 9/3/1945, Nhật đảo chính Pháp, tạo ra tình thế chính trị mới ở Đông Dương.',
  },
  {
    id: 'q012',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.august,
    question: 'Chỉ thị ngày 12/3/1945 của Ban Thường vụ Trung ương có tên là gì?',
    correct: 'Nhật - Pháp bắn nhau và hành động của chúng ta',
    wrong: ['Toàn dân kháng chiến', 'Đường Kách mệnh', 'Tuyên ngôn Độc lập'],
    explanation:
      'Chỉ thị “Nhật - Pháp bắn nhau và hành động của chúng ta” đề ra chủ trương hành động trong cao trào kháng Nhật cứu nước.',
  },
  {
    id: 'q013',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.august,
    question: 'Cách mạng Tháng Tám năm 1945 đưa đến sự ra đời của nhà nước nào?',
    correct: 'Nước Việt Nam Dân chủ Cộng hòa',
    wrong: ['Nước Việt Nam Cộng hòa', 'Liên bang Đông Dương', 'Đông Dương tự trị'],
    explanation:
      'Thắng lợi của Cách mạng Tháng Tám đưa đến sự ra đời của nước Việt Nam Dân chủ Cộng hòa.',
  },
  {
    id: 'q014',
    chapterId: '1930-1945',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.august,
    question: 'Ngày Quốc khánh nước Việt Nam Dân chủ Cộng hòa là ngày nào?',
    correct: '2/9/1945',
    wrong: ['19/8/1945', '7/5/1954', '30/4/1975'],
    explanation:
      'Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình.',
  },

  // =========================
  // 1930-1945: Trung bình
  // =========================
  {
    id: 'q015',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.founding,
    question: 'Đảng Cộng sản Việt Nam ra đời là kết quả của sự kết hợp giữa những yếu tố nào?',
    correct: 'Chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước Việt Nam',
    wrong: ['Phong trào Cần Vương, Đông Du và Duy Tân', 'Chỉ riêng phong trào công nhân quốc tế', 'Sự cải cách của triều đình phong kiến'],
    explanation:
      'Sự ra đời của Đảng là kết quả kết hợp giữa chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước Việt Nam.',
  },
  {
    id: 'q016',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.founding,
    question: 'Điểm nổi bật của Cương lĩnh chính trị đầu tiên là gì?',
    correct: 'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu',
    wrong: ['Chỉ nhấn mạnh đấu tranh nghị trường', 'Từ bỏ mục tiêu độc lập dân tộc', 'Không đề cập lực lượng cách mạng'],
    explanation:
      'Cương lĩnh đầu tiên thể hiện tư tưởng độc lập dân tộc rõ rệt, phù hợp với yêu cầu của xã hội thuộc địa.',
  },
  {
    id: 'q017',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.founding,
    question: 'Hội nghị thành lập Đảng đầu năm 1930 có ý nghĩa gì?',
    correct: 'Hợp nhất các tổ chức cộng sản thành một đảng thống nhất',
    wrong: ['Thành lập Mặt trận Việt Minh', 'Khởi xướng công cuộc đổi mới', 'Ký kết Hiệp định Genève'],
    explanation:
      'Hội nghị thành lập Đảng đã khắc phục tình trạng phân tán của các tổ chức cộng sản, tạo ra tổ chức lãnh đạo thống nhất.',
  },
  {
    id: 'q018',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.founding,
    question: 'Một hạn chế thường được nêu khi so sánh Luận cương tháng 10 năm 1930 với Cương lĩnh đầu tiên là gì?',
    correct: 'Chưa đặt đúng mức vấn đề dân tộc trong xã hội thuộc địa',
    wrong: ['Không đề cập đấu tranh giai cấp', 'Từ bỏ vai trò lãnh đạo của Đảng', 'Phủ nhận chủ nghĩa Mác - Lênin'],
    explanation:
      'Luận cương tháng 10 năm 1930 có đóng góp quan trọng nhưng còn hạn chế ở việc chưa thấy đầy đủ yêu cầu giải phóng dân tộc.',
  },
  {
    id: 'q019',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.founding,
    question: 'Phong trào dân chủ 1936-1939 chủ yếu đấu tranh cho mục tiêu trực tiếp nào?',
    correct: 'Dân sinh, dân chủ, cơm áo, hòa bình',
    wrong: ['Đổi mới kinh tế toàn diện', 'Giải phóng miền Nam', 'Ký Hiệp định Paris'],
    explanation:
      'Trong bối cảnh mới, Đảng chủ trương đấu tranh đòi các quyền dân sinh, dân chủ, chống phản động thuộc địa và nguy cơ chiến tranh.',
  },
  {
    id: 'q020',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.august,
    question: 'Vì sao từ năm 1939, Đảng chuyển hướng chỉ đạo chiến lược?',
    correct: 'Tình hình chiến tranh thế giới và mâu thuẫn dân tộc ở Đông Dương trở nên gay gắt',
    wrong: ['Vì cách mạng đã hoàn thành', 'Vì Pháp tự nguyện trao độc lập', 'Vì không còn nhiệm vụ dân tộc'],
    explanation:
      'Chiến tranh thế giới thứ hai làm tình hình chính trị thay đổi, nhiệm vụ giải phóng dân tộc trở nên cấp bách.',
  },
  {
    id: 'q021',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.august,
    question: 'Nội dung quan trọng của Hội nghị Trung ương 8 năm 1941 là gì?',
    correct: 'Hoàn chỉnh chủ trương đặt nhiệm vụ giải phóng dân tộc lên hàng đầu',
    wrong: ['Khởi xướng đổi mới kinh tế', 'Quyết định mở Chiến dịch Điện Biên Phủ', 'Ký Hiệp định Paris'],
    explanation:
      'Hội nghị Trung ương 8 hoàn chỉnh quá trình chuyển hướng chiến lược của Đảng trong giai đoạn 1939-1941.',
  },
  {
    id: 'q022',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.august,
    question: 'Cao trào kháng Nhật cứu nước có vai trò gì đối với Tổng khởi nghĩa tháng Tám?',
    correct: 'Chuẩn bị trực tiếp về lực lượng và khí thế cách mạng',
    wrong: ['Làm cách mạng thất bại', 'Thay thế hoàn toàn Tổng khởi nghĩa', 'Chỉ có ý nghĩa ngoại giao'],
    explanation:
      'Cao trào kháng Nhật cứu nước là bước chuẩn bị trực tiếp cho Tổng khởi nghĩa giành chính quyền.',
  },
  {
    id: 'q023',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.august,
    question: 'Thời cơ của Cách mạng Tháng Tám xuất hiện rõ khi nào?',
    correct: 'Khi Nhật đầu hàng Đồng minh và chính quyền tay sai khủng hoảng',
    wrong: ['Khi Pháp mới đặt ách thống trị', 'Khi Đại hội VI diễn ra', 'Khi Hiệp định Genève được ký'],
    explanation:
      'Nhật đầu hàng Đồng minh làm bộ máy thống trị ở Đông Dương rệu rã, tạo thời cơ cho nhân dân nổi dậy giành chính quyền.',
  },
  {
    id: 'q024',
    chapterId: '1930-1945',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.august,
    question: 'Ý nghĩa cơ bản của Tuyên ngôn Độc lập ngày 2/9/1945 là gì?',
    correct: 'Tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa và khẳng định quyền độc lập của dân tộc',
    wrong: ['Mở đầu công cuộc đổi mới', 'Kết thúc Chiến dịch Điện Biên Phủ', 'Thành lập Đảng Lao động Việt Nam'],
    explanation:
      'Tuyên ngôn Độc lập khẳng định quyền độc lập, tự do của dân tộc Việt Nam và sự ra đời của nhà nước mới.',
  },

  // =========================
  // 1930-1945: Khó
  // =========================
  {
    id: 'q025',
    chapterId: '1930-1945',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.founding,
    question: 'Ý nghĩa lớn nhất của sự ra đời Đảng Cộng sản Việt Nam là gì?',
    correct: 'Chấm dứt khủng hoảng về đường lối cứu nước và tổ chức lãnh đạo cách mạng',
    wrong: ['Lập tức hoàn thành cách mạng xã hội chủ nghĩa', 'Chấm dứt ngay ách thống trị thực dân', 'Làm Việt Nam trở thành nước công nghiệp'],
    explanation:
      'Trước năm 1930, phong trào yêu nước phát triển mạnh nhưng thiếu đường lối đúng và tổ chức lãnh đạo thống nhất.',
  },
  {
    id: 'q026',
    chapterId: '1930-1945',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.founding,
    question: 'Vì sao Cương lĩnh chính trị đầu tiên được đánh giá là đúng đắn và sáng tạo?',
    correct: 'Vì kết hợp đúng vấn đề dân tộc và giai cấp, phù hợp thực tiễn Việt Nam thuộc địa',
    wrong: ['Vì sao chép nguyên mẫu mô hình nước ngoài', 'Vì chỉ nhấn mạnh đấu tranh kinh tế', 'Vì phủ nhận vai trò của quần chúng'],
    explanation:
      'Cương lĩnh đầu tiên phản ánh yêu cầu giải phóng dân tộc, đồng thời đặt cách mạng Việt Nam trong quỹ đạo cách mạng vô sản.',
  },
  {
    id: 'q027',
    chapterId: '1930-1945',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.founding,
    question: 'Bài học rút ra từ quá trình thành lập Đảng là gì?',
    correct: 'Muốn cách mạng thắng lợi cần có đường lối đúng và tổ chức lãnh đạo thống nhất',
    wrong: ['Chỉ cần phong trào tự phát', 'Không cần lý luận cách mạng', 'Không cần đoàn kết lực lượng yêu nước'],
    explanation:
      'Sự ra đời của Đảng cho thấy vai trò quyết định của đường lối chính trị đúng và tổ chức lãnh đạo thống nhất.',
  },
  {
    id: 'q028',
    chapterId: '1930-1945',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.august,
    question: 'Bài học quan trọng về thời cơ trong Cách mạng Tháng Tám là gì?',
    correct: 'Phải chuẩn bị lực lượng lâu dài và hành động quyết đoán khi thời cơ đến',
    wrong: ['Chỉ cần chờ tình hình quốc tế thay đổi', 'Không cần tổ chức quần chúng', 'Chỉ dựa vào đấu tranh nghị trường'],
    explanation:
      'Thời cơ chỉ biến thành thắng lợi khi lực lượng cách mạng đã được chuẩn bị và có sự lãnh đạo kịp thời.',
  },
  {
    id: 'q029',
    chapterId: '1930-1945',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.august,
    question: 'Vì sao Cách mạng Tháng Tám thắng lợi nhanh chóng trên phạm vi cả nước?',
    correct: 'Vì có sự chuẩn bị lực lượng, đường lối đúng, thời cơ thuận lợi và sức mạnh quần chúng',
    wrong: ['Vì thực dân tự nguyện trao chính quyền', 'Vì không có sự lãnh đạo chính trị', 'Vì chỉ diễn ra ở một địa phương'],
    explanation:
      'Thắng lợi là kết quả tổng hợp của quá trình chuẩn bị lâu dài, nghệ thuật chớp thời cơ và sức mạnh toàn dân.',
  },
  {
    id: 'q030',
    chapterId: '1930-1945',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.august,
    question: 'Điểm thể hiện tính linh hoạt trong chỉ đạo chiến lược giai đoạn 1939-1945 là gì?',
    correct: 'Đảng điều chỉnh nhiệm vụ, hình thức tổ chức và phương pháp đấu tranh phù hợp tình hình mới',
    wrong: ['Đảng giữ nguyên mọi khẩu hiệu như trước', 'Đảng ngừng hoạt động cách mạng', 'Đảng chỉ tập trung cải cách kinh tế'],
    explanation:
      'Sự chuyển hướng chiến lược cho thấy Đảng biết bám sát thực tiễn, đặt nhiệm vụ dân tộc lên hàng đầu khi tình thế thay đổi.',
  },
  {
    id: 'q031',
    chapterId: '1930-1945',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.august,
    question: 'Ý nghĩa lịch sử của Cách mạng Tháng Tám đối với dân tộc Việt Nam là gì?',
    correct: 'Mở ra kỷ nguyên độc lập dân tộc gắn với quyền làm chủ của nhân dân',
    wrong: ['Mở đầu thời kỳ thuộc địa', 'Kết thúc công cuộc đổi mới', 'Hoàn thành công nghiệp hóa hiện đại hóa'],
    explanation:
      'Cách mạng Tháng Tám lật đổ ách thống trị thực dân, phong kiến và lập nên nhà nước dân chủ nhân dân đầu tiên ở Việt Nam.',
  },
  {
    id: 'q032',
    chapterId: '1930-1945',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.august,
    question: 'Bài học về xây dựng lực lượng trong Cách mạng Tháng Tám là gì?',
    correct: 'Phải xây dựng lực lượng chính trị rộng rãi kết hợp với lực lượng vũ trang và căn cứ cách mạng',
    wrong: ['Chỉ cần lực lượng quân sự chuyên nghiệp', 'Không cần mặt trận dân tộc thống nhất', 'Chỉ cần hoạt động bí mật trong đô thị'],
    explanation:
      'Đảng đã xây dựng lực lượng chính trị quần chúng, lực lượng vũ trang và căn cứ địa, tạo thế cho tổng khởi nghĩa.',
  },

  // =========================
  // 1945-1975: Dễ
  // =========================
  {
    id: 'q033',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Toàn quốc kháng chiến chống thực dân Pháp bùng nổ vào thời gian nào?',
    correct: '19/12/1946',
    wrong: ['2/9/1945', '7/5/1954', '30/4/1975'],
    explanation:
      'Ngày 19/12/1946, cuộc kháng chiến toàn quốc chống thực dân Pháp bùng nổ.',
  },
  {
    id: 'q034',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Đường lối kháng chiến chống thực dân Pháp có đặc điểm cơ bản nào?',
    correct: 'Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh và tranh thủ quốc tế',
    wrong: ['Chỉ dựa vào quân đội chính quy', 'Đánh nhanh thắng nhanh trong mọi hoàn cảnh', 'Phụ thuộc hoàn toàn vào viện trợ bên ngoài'],
    explanation:
      'Đường lối kháng chiến chống Pháp nhấn mạnh sức mạnh toàn dân, toàn diện, lâu dài và dựa vào sức mình là chính.',
  },
  {
    id: 'q035',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Chiến dịch Biên giới Thu - Đông diễn ra vào năm nào?',
    correct: '1950',
    wrong: ['1945', '1954', '1975'],
    explanation:
      'Chiến dịch Biên giới Thu - Đông năm 1950 giúp ta khai thông biên giới và giành thế chủ động chiến lược.',
  },
  {
    id: 'q036',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Đại hội II của Đảng diễn ra vào năm nào?',
    correct: '1951',
    wrong: ['1930', '1945', '1986'],
    explanation:
      'Đại hội II diễn ra năm 1951, trong bối cảnh cuộc kháng chiến chống thực dân Pháp đang phát triển.',
  },
  {
    id: 'q037',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Đại hội II năm 1951 đưa Đảng ra hoạt động công khai với tên gọi nào?',
    correct: 'Đảng Lao động Việt Nam',
    wrong: ['Đảng Cộng sản Đông Dương', 'Việt Nam Quốc dân Đảng', 'Mặt trận Việt Minh'],
    explanation:
      'Đại hội II quyết định đưa Đảng ra hoạt động công khai, lấy tên là Đảng Lao động Việt Nam.',
  },
  {
    id: 'q038',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Chiến thắng Điện Biên Phủ diễn ra vào ngày nào?',
    correct: '7/5/1954',
    wrong: ['19/8/1945', '2/9/1945', '30/4/1975'],
    explanation:
      'Ngày 7/5/1954, tập đoàn cứ điểm Điện Biên Phủ bị tiêu diệt, tạo thế mạnh cho ta trên bàn đàm phán Genève.',
  },
  {
    id: 'q039',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Hiệp định Genève về Đông Dương được ký năm nào?',
    correct: '1954',
    wrong: ['1946', '1968', '1973'],
    explanation:
      'Hiệp định Genève năm 1954 công nhận các quyền dân tộc cơ bản của nhân dân Việt Nam, Lào và Campuchia.',
  },
  {
    id: 'q040',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Theo Hiệp định Genève năm 1954, vĩ tuyến 17 được hiểu là gì?',
    correct: 'Giới tuyến quân sự tạm thời',
    wrong: ['Biên giới quốc gia vĩnh viễn', 'Ranh giới giữa hai quốc gia độc lập', 'Biên giới mới giữa Việt Nam và Lào'],
    explanation:
      'Vĩ tuyến 17 chỉ là giới tuyến quân sự tạm thời, không phải biên giới quốc gia vĩnh viễn.',
  },
  {
    id: 'q041',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Đại hội III của Đảng diễn ra vào năm nào?',
    correct: '1960',
    wrong: ['1951', '1976', '1986'],
    explanation:
      'Đại hội III diễn ra năm 1960, xác định đường lối cách mạng trong thời kỳ cả nước thực hiện hai nhiệm vụ chiến lược.',
  },
  {
    id: 'q042',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Phong trào Đồng khởi tiêu biểu diễn ra ở địa phương nào?',
    correct: 'Bến Tre',
    wrong: ['Hà Nội', 'Điện Biên', 'Hải Phòng'],
    explanation:
      'Phong trào Đồng khởi năm 1959-1960 bùng nổ mạnh mẽ, tiêu biểu là ở Bến Tre.',
  },
  {
    id: 'q043',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Hiệp định Paris về Việt Nam được ký năm nào?',
    correct: '1973',
    wrong: ['1954', '1960', '1986'],
    explanation:
      'Hiệp định Paris năm 1973 là thắng lợi quan trọng trên mặt trận ngoại giao trong cuộc kháng chiến chống Mỹ.',
  },
  {
    id: 'q044',
    chapterId: '1945-1975',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Đại thắng mùa Xuân năm 1975 kết thúc bằng sự kiện nào?',
    correct: 'Chiến dịch Hồ Chí Minh toàn thắng ngày 30/4/1975',
    wrong: ['Chiến dịch Biên giới năm 1950', 'Chiến dịch Điện Biên Phủ năm 1954', 'Phong trào dân chủ 1936-1939'],
    explanation:
      'Chiến dịch Hồ Chí Minh toàn thắng ngày 30/4/1975, giải phóng miền Nam, thống nhất đất nước.',
  },

  // =========================
  // 1945-1975: Trung bình
  // =========================
  {
    id: 'q045',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Sau Cách mạng Tháng Tám, nước Việt Nam Dân chủ Cộng hòa phải đối mặt với những khó khăn nào?',
    correct: 'Giặc đói, giặc dốt, ngoại xâm và tình thế chính quyền non trẻ',
    wrong: ['Chỉ có khó khăn về công nghiệp hóa', 'Không có nguy cơ ngoại xâm', 'Chỉ có vấn đề hội nhập quốc tế'],
    explanation:
      'Chính quyền cách mạng non trẻ phải đối phó với nhiều khó khăn nghiêm trọng về kinh tế, xã hội, chính trị và quân sự.',
  },
  {
    id: 'q046',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Tác dụng quan trọng của Chiến dịch Biên giới 1950 là gì?',
    correct: 'Mở thông đường liên lạc quốc tế và giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ',
    wrong: ['Kết thúc hoàn toàn chiến tranh', 'Mở đầu công cuộc đổi mới', 'Thành lập nước Việt Nam Dân chủ Cộng hòa'],
    explanation:
      'Chiến dịch Biên giới 1950 có ý nghĩa quân sự và chính trị quan trọng, làm thay đổi cục diện kháng chiến.',
  },
  {
    id: 'q047',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Cốt lõi của Kế hoạch Nava là gì?',
    correct: 'Tập trung lực lượng cơ động để giành thắng lợi quân sự quyết định',
    wrong: ['Rút quân khỏi Đông Dương ngay lập tức', 'Từ bỏ chiến tranh xâm lược', 'Chỉ phòng thủ ở miền Nam'],
    explanation:
      'Kế hoạch Nava nhằm tập trung lực lượng cơ động mạnh, tìm thắng lợi quân sự để xoay chuyển tình thế.',
  },
  {
    id: 'q048',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Ba thứ quân trong kháng chiến chống Pháp gồm những lực lượng nào?',
    correct: 'Bộ đội chủ lực, bộ đội địa phương và dân quân du kích',
    wrong: ['Lục quân, hải quân và không quân', 'Công an, thanh niên xung phong và dân quân', 'Quân chính quy, quân đồng minh và quân quốc tế'],
    explanation:
      'Ba thứ quân là hình thức tổ chức lực lượng vũ trang phù hợp với chiến tranh nhân dân.',
  },
  {
    id: 'q049',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Mối quan hệ đúng giữa đấu tranh quân sự và ngoại giao trong kháng chiến là gì?',
    correct: 'Thắng lợi quân sự tạo thế đàm phán, ngoại giao chuyển thắng lợi thành cam kết chính trị - pháp lý',
    wrong: ['Ngoại giao hoàn toàn tách rời chiến trường', 'Chỉ cần ngoại giao, không cần quân sự', 'Chỉ cần quân sự, không cần đàm phán'],
    explanation:
      'Đấu tranh quân sự và ngoại giao hỗ trợ lẫn nhau; thắng lợi trên chiến trường tạo thế mạnh trên bàn đàm phán.',
  },
  {
    id: 'q050',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Đại hội III năm 1960 xác định miền Bắc có vai trò gì?',
    correct: 'Quyết định nhất đối với sự phát triển của toàn bộ cách mạng Việt Nam',
    wrong: ['Không liên quan đến cách mạng miền Nam', 'Chỉ hỗ trợ ngoại giao', 'Quyết định trực tiếp việc giải phóng miền Nam'],
    explanation:
      'Đại hội III xác định miền Bắc là hậu phương lớn, giữ vai trò quyết định nhất đối với toàn bộ cách mạng Việt Nam.',
  },
  {
    id: 'q051',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Đại hội III năm 1960 xác định cách mạng miền Nam có vai trò gì?',
    correct: 'Quyết định trực tiếp đối với sự nghiệp giải phóng miền Nam',
    wrong: ['Quyết định nhất đối với toàn bộ cách mạng Việt Nam', 'Không có vai trò chiến lược', 'Chỉ làm nhiệm vụ kinh tế'],
    explanation:
      'Miền Nam giữ vai trò quyết định trực tiếp đối với nhiệm vụ giải phóng miền Nam, thống nhất đất nước.',
  },
  {
    id: 'q052',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Ý nghĩa của phong trào Đồng khởi là gì?',
    correct: 'Chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công',
    wrong: ['Kết thúc hoàn toàn chiến tranh', 'Mở đầu cuộc kháng chiến chống Pháp', 'Khởi xướng công cuộc đổi mới'],
    explanation:
      'Đồng khởi tạo bước chuyển quan trọng cho cách mạng miền Nam, làm lung lay chính quyền Sài Gòn ở nhiều địa phương.',
  },
  {
    id: 'q053',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra vào năm nào?',
    correct: '1968',
    wrong: ['1954', '1960', '1975'],
    explanation:
      'Tết Mậu Thân 1968 là cuộc tổng tiến công và nổi dậy có tác động lớn đến cục diện chiến tranh.',
  },
  {
    id: 'q054',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Hiệp định Paris năm 1973 có ý nghĩa quan trọng nào?',
    correct: 'Buộc Mỹ cam kết chấm dứt chiến tranh, rút quân khỏi Việt Nam',
    wrong: ['Chia Việt Nam thành hai quốc gia vĩnh viễn', 'Khởi xướng đổi mới', 'Thành lập Đảng Cộng sản Việt Nam'],
    explanation:
      'Hiệp định Paris là thắng lợi ngoại giao quan trọng, tạo điều kiện thuận lợi cho cuộc đấu tranh giải phóng miền Nam.',
  },
  {
    id: 'q055',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Đại thắng mùa Xuân 1975 có ý nghĩa gì?',
    correct: 'Giải phóng miền Nam, thống nhất đất nước',
    wrong: ['Mở đầu thời kỳ thuộc địa', 'Thành lập Đảng', 'Ký Hiệp định Genève'],
    explanation:
      'Đại thắng mùa Xuân 1975 kết thúc cuộc kháng chiến chống Mỹ, giải phóng miền Nam và thống nhất đất nước.',
  },
  {
    id: 'q056',
    chapterId: '1945-1975',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Một đặc điểm lớn của cách mạng Việt Nam giai đoạn 1954-1975 là gì?',
    correct: 'Cả nước thực hiện hai nhiệm vụ chiến lược ở hai miền',
    wrong: ['Chỉ tập trung xây dựng kinh tế thị trường', 'Không còn nhiệm vụ giải phóng dân tộc', 'Chỉ tiến hành đấu tranh ngoại giao'],
    explanation:
      'Miền Bắc xây dựng chủ nghĩa xã hội, miền Nam đấu tranh giải phóng, hai nhiệm vụ gắn bó chặt chẽ với nhau.',
  },

  // =========================
  // 1945-1975: Khó
  // =========================
  {
    id: 'q057',
    chapterId: '1945-1975',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Vì sao đường lối kháng chiến chống Pháp phải là toàn dân?',
    correct: 'Vì cuộc kháng chiến là sự nghiệp của toàn thể nhân dân, cần huy động sức mạnh toàn dân tộc',
    wrong: ['Vì chỉ quân đội mới được tham gia', 'Vì không cần hậu phương', 'Vì kháng chiến chỉ diễn ra ở đô thị'],
    explanation:
      'Toàn dân là nguyên tắc quan trọng của chiến tranh nhân dân, phát huy sức mạnh của mọi tầng lớp yêu nước.',
  },
  {
    id: 'q058',
    chapterId: '1945-1975',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Vì sao các cuộc tiến công Đông - Xuân 1953-1954 làm Kế hoạch Nava bước đầu phá sản?',
    correct: 'Ta buộc Pháp phân tán lực lượng cơ động ra nhiều hướng chiến lược',
    wrong: ['Pháp tự nguyện rút khỏi Đông Dương', 'Mỹ ngừng toàn bộ viện trợ', 'Ta chỉ phòng thủ ở đồng bằng'],
    explanation:
      'Ta chủ động tiến công vào các hướng chiến lược, buộc Pháp phải phân tán lực lượng, phá ý đồ tập trung quân.',
  },
  {
    id: 'q059',
    chapterId: '1945-1975',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Ý nghĩa của việc chuyển phương châm ở Điện Biên Phủ từ “đánh nhanh, giải quyết nhanh” sang “đánh chắc, tiến chắc” là gì?',
    correct: 'Tôn trọng thực tiễn, đặt yêu cầu chắc thắng lên hàng đầu',
    wrong: ['Từ bỏ mục tiêu chiến dịch', 'Chuyển toàn bộ sang phòng ngự', 'Phụ thuộc hoàn toàn vào lực lượng bên ngoài'],
    explanation:
      'Sự thay đổi phương châm thể hiện tư duy chỉ đạo thận trọng, linh hoạt và tránh chủ quan nóng vội.',
  },
  {
    id: 'q060',
    chapterId: '1945-1975',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Thắng lợi Điện Biên Phủ chứng minh điều gì về đường lối kháng chiến của Đảng?',
    correct: 'Đường lối chiến tranh nhân dân đúng đắn, biết kết hợp chính trị, quân sự và ngoại giao',
    wrong: ['Chỉ cần đấu tranh ngoại giao', 'Không cần xây dựng hậu phương', 'Không cần sự lãnh đạo thống nhất'],
    explanation:
      'Điện Biên Phủ là thắng lợi của đường lối kháng chiến toàn dân, toàn diện, trường kỳ và tự lực cánh sinh.',
  },
  {
    id: 'q061',
    chapterId: '1945-1975',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Bài học lớn từ kháng chiến chống Pháp là gì?',
    correct: 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại, tự lực cánh sinh và tranh thủ quốc tế',
    wrong: ['Phụ thuộc hoàn toàn vào viện trợ', 'Không cần đoàn kết nhân dân', 'Chỉ dựa vào đấu tranh nghị trường'],
    explanation:
      'Kháng chiến chống Pháp cho thấy cần phát huy nội lực dân tộc đồng thời tranh thủ sự ủng hộ quốc tế.',
  },
  {
    id: 'q062',
    chapterId: '1945-1975',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Mối quan hệ giữa cách mạng hai miền sau năm 1954 được hiểu đúng như thế nào?',
    correct: 'Hai miền thực hiện nhiệm vụ khác nhau nhưng cùng hướng tới mục tiêu chung là độc lập, thống nhất đất nước',
    wrong: ['Hai miền không liên quan đến nhau', 'Miền Bắc không có vai trò hậu phương', 'Miền Nam chỉ làm nhiệm vụ kinh tế'],
    explanation:
      'Đường lối cách mạng hai miền thể hiện sự sáng tạo trong điều kiện đất nước tạm thời bị chia cắt.',
  },
  {
    id: 'q063',
    chapterId: '1945-1975',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Vì sao Hiệp định Paris năm 1973 tạo điều kiện thuận lợi cho thắng lợi năm 1975?',
    correct: 'Vì Mỹ phải rút quân, làm thay đổi tương quan lực lượng có lợi cho cách mạng miền Nam',
    wrong: ['Vì chiến tranh kết thúc hoàn toàn ngay lập tức', 'Vì miền Nam đã được giải phóng toàn bộ', 'Vì Đảng ngừng lãnh đạo đấu tranh'],
    explanation:
      'Mỹ rút quân làm suy yếu chỗ dựa chủ yếu của chính quyền Sài Gòn, tạo điều kiện cho ta tiến tới thắng lợi cuối cùng.',
  },
  {
    id: 'q064',
    chapterId: '1945-1975',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Một nguyên nhân cơ bản dẫn đến thắng lợi của cuộc kháng chiến chống Mỹ là gì?',
    correct: 'Sự lãnh đạo đúng đắn của Đảng và sức mạnh đại đoàn kết toàn dân tộc',
    wrong: ['Không có sự tham gia của nhân dân', 'Chỉ do yếu tố ngẫu nhiên', 'Không cần hậu phương miền Bắc'],
    explanation:
      'Thắng lợi chống Mỹ là kết quả của đường lối đúng, sự hy sinh của toàn dân và sự kết hợp sức mạnh dân tộc với thời đại.',
  },
  {
    id: 'q065',
    chapterId: '1945-1975',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.resistance,
    question: 'Ý nghĩa lớn nhất của Đại thắng mùa Xuân 1975 là gì?',
    correct: 'Kết thúc cách mạng dân tộc dân chủ nhân dân trên phạm vi cả nước, mở ra thời kỳ cả nước đi lên chủ nghĩa xã hội',
    wrong: ['Mở đầu cuộc kháng chiến chống Pháp', 'Thành lập nước Việt Nam Dân chủ Cộng hòa', 'Khởi xướng công cuộc đổi mới'],
    explanation:
      'Năm 1975, miền Nam được giải phóng, đất nước thống nhất, mở ra thời kỳ mới trong lịch sử Việt Nam.',
  },

  // =========================
  // Từ 1975: Dễ
  // =========================
  {
    id: 'q066',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Sau năm 1975, nhiệm vụ lớn của cả nước là gì?',
    correct: 'Khắc phục hậu quả chiến tranh, thống nhất đất nước về mặt nhà nước và xây dựng chủ nghĩa xã hội',
    wrong: ['Tiếp tục chia cắt đất nước', 'Thành lập Đảng', 'Mở Chiến dịch Điện Biên Phủ'],
    explanation:
      'Sau năm 1975, đất nước thống nhất bước vào thời kỳ khôi phục, xây dựng và bảo vệ Tổ quốc.',
  },
  {
    id: 'q067',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Đại hội IV của Đảng diễn ra vào năm nào?',
    correct: '1976',
    wrong: ['1951', '1960', '1986'],
    explanation:
      'Đại hội IV năm 1976 là Đại hội đầu tiên sau khi đất nước thống nhất.',
  },
  {
    id: 'q068',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Đại hội nào khởi xướng công cuộc đổi mới toàn diện đất nước?',
    correct: 'Đại hội VI năm 1986',
    wrong: ['Đại hội II năm 1951', 'Đại hội III năm 1960', 'Đại hội IV năm 1976'],
    explanation:
      'Đại hội VI năm 1986 đánh dấu bước ngoặt đổi mới toàn diện đất nước.',
  },
  {
    id: 'q069',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Đổi mới được khởi xướng trước hết từ lĩnh vực nào?',
    correct: 'Tư duy kinh tế và cơ chế quản lý kinh tế',
    wrong: ['Thay đổi mục tiêu độc lập dân tộc', 'Từ bỏ vai trò của nhân dân', 'Chỉ thay đổi hình thức tuyên truyền'],
    explanation:
      'Đổi mới bắt đầu từ đổi mới tư duy, đặc biệt là tư duy kinh tế và cơ chế quản lý kinh tế.',
  },
  {
    id: 'q070',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Tinh thần nổi bật của Đại hội VI là gì?',
    correct: 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật',
    wrong: ['Phủ nhận toàn bộ thành tựu trước đó', 'Không cần đổi mới tư duy', 'Chỉ đổi mới khẩu hiệu'],
    explanation:
      'Đại hội VI thể hiện tinh thần đổi mới tư duy, nhìn nhận đúng thực tiễn để tìm phương hướng phát triển phù hợp.',
  },
  {
    id: 'q071',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Nền kinh tế trong thời kỳ đổi mới được phát triển theo hướng nào?',
    correct: 'Kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước',
    wrong: ['Xóa bỏ mọi hình thức kinh tế hàng hóa', 'Chỉ duy trì một thành phần kinh tế', 'Không cần quản lý nhà nước'],
    explanation:
      'Đổi mới kinh tế thừa nhận nhiều thành phần kinh tế và cơ chế thị trường có sự quản lý của Nhà nước.',
  },
  {
    id: 'q072',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội được thông qua năm nào?',
    correct: '1991',
    wrong: ['1930', '1954', '1975'],
    explanation:
      'Cương lĩnh năm 1991 là văn kiện quan trọng trong quá trình xác định mô hình và con đường phát triển thời kỳ đổi mới.',
  },
  {
    id: 'q073',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Việt Nam gia nhập ASEAN vào năm nào?',
    correct: '1995',
    wrong: ['1976', '1986', '2007'],
    explanation:
      'Việt Nam gia nhập ASEAN năm 1995, đánh dấu bước phát triển trong quá trình hội nhập khu vực.',
  },
  {
    id: 'q074',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Việt Nam gia nhập WTO vào năm nào?',
    correct: '2007',
    wrong: ['1986', '1991', '1995'],
    explanation:
      'Việt Nam gia nhập WTO năm 2007, thể hiện bước tiến quan trọng trong hội nhập kinh tế quốc tế.',
  },
  {
    id: 'q075',
    chapterId: '1975-now',
    difficulty: 'easy',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Một mục tiêu quan trọng của đổi mới là gì?',
    correct: 'Phát triển đất nước, nâng cao đời sống nhân dân, giữ vững độc lập dân tộc và định hướng xã hội chủ nghĩa',
    wrong: ['Từ bỏ độc lập dân tộc', 'Tách rời phát triển với đời sống nhân dân', 'Không cần hội nhập quốc tế'],
    explanation:
      'Đổi mới nhằm phát triển đất nước nhưng vẫn giữ vững mục tiêu độc lập dân tộc và chủ nghĩa xã hội.',
  },

  // =========================
  // Từ 1975: Trung bình
  // =========================
  {
    id: 'q076',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Vì sao Đại hội VI năm 1986 được xem là bước ngoặt?',
    correct: 'Vì đề ra đường lối đổi mới toàn diện, trước hết là đổi mới tư duy kinh tế',
    wrong: ['Vì thành lập Đảng', 'Vì kết thúc kháng chiến chống Pháp', 'Vì ký Hiệp định Paris'],
    explanation:
      'Đại hội VI mở ra thời kỳ đổi mới, tạo chuyển biến quan trọng trong nhận thức và đường lối phát triển.',
  },
  {
    id: 'q077',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Hiểu đúng về đổi mới là gì?',
    correct: 'Đổi mới tư duy, cơ chế và phương thức phát triển nhưng giữ vững mục tiêu cách mạng',
    wrong: ['Từ bỏ hoàn toàn chủ nghĩa xã hội', 'Chỉ thay đổi tên gọi văn kiện', 'Không cần xây dựng Đảng'],
    explanation:
      'Đổi mới không phải thay đổi mục tiêu, mà là tìm phương thức phát triển phù hợp hơn với thực tiễn.',
  },
  {
    id: 'q078',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Một nội dung quan trọng của đổi mới chính trị là gì?',
    correct: 'Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa và phát huy dân chủ',
    wrong: ['Xóa bỏ vai trò lãnh đạo của Đảng', 'Từ bỏ quyền làm chủ của nhân dân', 'Không cần hệ thống pháp luật'],
    explanation:
      'Đổi mới chính trị gắn với xây dựng Nhà nước pháp quyền, phát huy dân chủ và nâng cao hiệu lực quản lý.',
  },
  {
    id: 'q079',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Kinh tế thị trường định hướng xã hội chủ nghĩa được hiểu đúng như thế nào?',
    correct: 'Vận dụng cơ chế thị trường để phát triển lực lượng sản xuất dưới sự quản lý của Nhà nước và định hướng xã hội chủ nghĩa',
    wrong: ['Từ bỏ hoàn toàn vai trò của Nhà nước', 'Xóa bỏ mọi thành phần kinh tế', 'Chỉ phát triển kinh tế tự cấp tự túc'],
    explanation:
      'Đây là mô hình phát triển phù hợp với thực tiễn Việt Nam trong thời kỳ đổi mới.',
  },
  {
    id: 'q080',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Một nguyên tắc quan trọng trong đổi mới là gì?',
    correct: 'Đổi mới nhưng không đổi màu, không xa rời mục tiêu độc lập dân tộc và chủ nghĩa xã hội',
    wrong: ['Đổi mới bằng cách phủ nhận toàn bộ quá khứ', 'Đổi mới nhưng không cần thực tiễn', 'Đổi mới chỉ là thay khẩu hiệu'],
    explanation:
      'Đổi mới phải kiên định mục tiêu chiến lược nhưng linh hoạt về phương thức, cơ chế và bước đi.',
  },
  {
    id: 'q081',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Một bài học quan trọng của công cuộc đổi mới là gì?',
    correct: 'Luôn xuất phát từ thực tiễn Việt Nam và tôn trọng quy luật khách quan',
    wrong: ['Sao chép nguyên mẫu mô hình bên ngoài', 'Không cần tổng kết thực tiễn', 'Tách rời phát triển với đời sống nhân dân'],
    explanation:
      'Đổi mới thành công khi xuất phát từ thực tiễn, tôn trọng quy luật và phát huy vai trò của nhân dân.',
  },
  {
    id: 'q082',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Vì sao hội nhập quốc tế là yêu cầu quan trọng trong thời kỳ đổi mới?',
    correct: 'Vì giúp mở rộng thị trường, tranh thủ nguồn lực và nâng cao vị thế đất nước',
    wrong: ['Vì phải từ bỏ độc lập tự chủ', 'Vì không cần nội lực dân tộc', 'Vì không cần phát triển kinh tế trong nước'],
    explanation:
      'Hội nhập quốc tế phải gắn với giữ vững độc lập tự chủ và phát huy nội lực.',
  },
  {
    id: 'q083',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Công nghiệp hóa, hiện đại hóa trong thời kỳ đổi mới nhằm mục tiêu gì?',
    correct: 'Tạo nền tảng vật chất - kỹ thuật cho phát triển đất nước',
    wrong: ['Chỉ phát triển nông nghiệp tự cấp', 'Không cần khoa học công nghệ', 'Tách rời phát triển kinh tế với xã hội'],
    explanation:
      'Công nghiệp hóa, hiện đại hóa là nhiệm vụ quan trọng để nâng cao năng suất, chất lượng và sức cạnh tranh của nền kinh tế.',
  },
  {
    id: 'q084',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Vai trò của nhân dân trong công cuộc đổi mới được hiểu như thế nào?',
    correct: 'Nhân dân là chủ thể, động lực và mục tiêu của đổi mới',
    wrong: ['Nhân dân đứng ngoài quá trình đổi mới', 'Chỉ Nhà nước mới là mục tiêu của đổi mới', 'Đổi mới không liên quan đến đời sống nhân dân'],
    explanation:
      'Đổi mới nhằm nâng cao đời sống nhân dân và phải dựa vào sức sáng tạo của nhân dân.',
  },
  {
    id: 'q085',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Một yêu cầu trong xây dựng Đảng thời kỳ đổi mới là gì?',
    correct: 'Nâng cao năng lực lãnh đạo, sức chiến đấu và phòng chống suy thoái',
    wrong: ['Không cần đổi mới phương thức lãnh đạo', 'Tách Đảng khỏi nhân dân', 'Không cần kiểm tra, giám sát'],
    explanation:
      'Xây dựng Đảng trong sạch, vững mạnh là điều kiện quan trọng để lãnh đạo công cuộc đổi mới.',
  },
  {
    id: 'q086',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Đổi mới văn hóa - xã hội cần gắn với mục tiêu nào?',
    correct: 'Phát triển con người, bảo đảm tiến bộ và công bằng xã hội',
    wrong: ['Chỉ chạy theo tăng trưởng kinh tế', 'Không cần giáo dục', 'Tách văn hóa khỏi phát triển'],
    explanation:
      'Đổi mới không chỉ là kinh tế mà còn hướng tới phát triển con người và bảo đảm công bằng xã hội.',
  },
  {
    id: 'q087',
    chapterId: '1975-now',
    difficulty: 'medium',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Quan điểm đúng về tăng trưởng kinh tế trong đổi mới là gì?',
    correct: 'Tăng trưởng kinh tế phải gắn với tiến bộ, công bằng xã hội và bảo vệ môi trường',
    wrong: ['Chỉ cần tăng trưởng bằng mọi giá', 'Không cần quan tâm xã hội', 'Không cần bảo vệ môi trường'],
    explanation:
      'Phát triển bền vững đòi hỏi kết hợp giữa tăng trưởng, công bằng xã hội và bảo vệ môi trường.',
  },

  // =========================
  // Từ 1975: Khó
  // =========================
  {
    id: 'q088',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Vì sao đổi mới phải bắt đầu từ đổi mới tư duy?',
    correct: 'Vì tư duy cũ không còn phù hợp sẽ cản trở việc nhận thức thực tiễn và hoạch định đường lối đúng',
    wrong: ['Vì chỉ cần thay đổi khẩu hiệu', 'Vì thực tiễn không quan trọng', 'Vì không cần tổng kết kinh nghiệm'],
    explanation:
      'Đổi mới tư duy giúp nhận thức đúng thực tiễn, khắc phục chủ quan duy ý chí và tìm cơ chế phát triển phù hợp.',
  },
  {
    id: 'q089',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Điểm sáng tạo của đường lối đổi mới là gì?',
    correct: 'Kết hợp kiên định mục tiêu xã hội chủ nghĩa với đổi mới cơ chế, chính sách và phương thức phát triển',
    wrong: ['Từ bỏ hoàn toàn mục tiêu cách mạng', 'Phủ nhận vai trò của nhân dân', 'Chỉ sao chép mô hình bên ngoài'],
    explanation:
      'Đổi mới thể hiện sự sáng tạo trong việc tìm con đường phát triển phù hợp điều kiện Việt Nam.',
  },
  {
    id: 'q090',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Vì sao phải kết hợp đổi mới kinh tế với đổi mới chính trị?',
    correct: 'Vì phát triển kinh tế cần môi trường chính trị, pháp lý và quản trị phù hợp',
    wrong: ['Vì kinh tế và chính trị hoàn toàn tách rời', 'Vì chỉ cần đổi mới kinh tế', 'Vì không cần hệ thống pháp luật'],
    explanation:
      'Đổi mới kinh tế tạo yêu cầu đổi mới chính trị phù hợp, nhưng phải giữ ổn định chính trị để phát triển.',
  },
  {
    id: 'q091',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Bài học về độc lập tự chủ trong hội nhập quốc tế là gì?',
    correct: 'Hội nhập sâu rộng nhưng phải giữ vững lợi ích quốc gia - dân tộc và năng lực tự chủ',
    wrong: ['Hội nhập là phụ thuộc hoàn toàn', 'Không cần nội lực', 'Đóng cửa hoàn toàn với thế giới'],
    explanation:
      'Hội nhập hiệu quả đòi hỏi mở cửa, hợp tác nhưng vẫn giữ vững độc lập, tự chủ và lợi ích dân tộc.',
  },
  {
    id: 'q092',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Vì sao xây dựng Nhà nước pháp quyền là yêu cầu quan trọng trong thời kỳ đổi mới?',
    correct: 'Vì cần quản lý xã hội bằng pháp luật, bảo đảm quyền làm chủ của nhân dân và hiệu lực quản trị',
    wrong: ['Vì không cần pháp luật', 'Vì Nhà nước không cần phục vụ nhân dân', 'Vì phát triển kinh tế không cần thể chế'],
    explanation:
      'Nhà nước pháp quyền giúp tạo môi trường ổn định, minh bạch và bảo đảm quyền, lợi ích hợp pháp của người dân.',
  },
  {
    id: 'q093',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Một thách thức lớn của đổi mới là gì?',
    correct: 'Kết hợp tăng trưởng nhanh với phát triển bền vững, công bằng xã hội và bảo vệ môi trường',
    wrong: ['Không cần tăng trưởng', 'Không cần hội nhập', 'Không cần quản lý nhà nước'],
    explanation:
      'Đổi mới không chỉ nhằm tăng trưởng mà còn phải bảo đảm chất lượng phát triển và ổn định xã hội.',
  },
  {
    id: 'q094',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Ý nghĩa của việc tổng kết thực tiễn trong quá trình đổi mới là gì?',
    correct: 'Giúp bổ sung, phát triển đường lối phù hợp với tình hình mới',
    wrong: ['Để giữ nguyên mọi chính sách dù không phù hợp', 'Để phủ nhận toàn bộ lý luận', 'Để tách lý luận khỏi thực tiễn'],
    explanation:
      'Đổi mới là quá trình vừa làm vừa tổng kết, bổ sung lý luận và điều chỉnh chính sách phù hợp thực tiễn.',
  },
  {
    id: 'q095',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Quan hệ giữa đổi mới và ổn định chính trị được hiểu đúng như thế nào?',
    correct: 'Đổi mới cần ổn định chính trị, đồng thời ổn định phải dựa trên phát triển và cải cách phù hợp',
    wrong: ['Đổi mới luôn đối lập với ổn định', 'Ổn định nghĩa là không thay đổi gì', 'Không cần quản trị xã hội'],
    explanation:
      'Đổi mới và ổn định có quan hệ biện chứng; ổn định tạo môi trường phát triển, đổi mới tạo nền tảng cho ổn định lâu dài.',
  },
  {
    id: 'q096',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Vì sao phải xây dựng Đảng trong sạch, vững mạnh trong thời kỳ đổi mới?',
    correct: 'Vì năng lực lãnh đạo của Đảng quyết định chất lượng đường lối và hiệu quả tổ chức thực hiện',
    wrong: ['Vì Đảng không liên quan đến đổi mới', 'Vì không cần kiểm soát quyền lực', 'Vì không cần gắn bó với nhân dân'],
    explanation:
      'Đổi mới càng sâu rộng càng đòi hỏi Đảng phải nâng cao năng lực lãnh đạo, sức chiến đấu và đạo đức cầm quyền.',
  },
  {
    id: 'q097',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Một bài học phương pháp luận của đổi mới là gì?',
    correct: 'Kiên định mục tiêu, linh hoạt về bước đi, chính sách và phương thức tổ chức thực hiện',
    wrong: ['Không cần mục tiêu chiến lược', 'Không cần linh hoạt', 'Chỉ làm theo kinh nghiệm cũ'],
    explanation:
      'Đổi mới đòi hỏi vừa giữ vững định hướng chiến lược vừa sáng tạo trong chính sách và cách làm.',
  },
  {
    id: 'q098',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Vì sao phát triển kinh tế nhiều thành phần không đồng nghĩa với từ bỏ định hướng xã hội chủ nghĩa?',
    correct: 'Vì nhiều thành phần kinh tế là phương thức phát triển lực lượng sản xuất trong khuôn khổ định hướng và quản lý của Nhà nước',
    wrong: ['Vì Nhà nước không còn vai trò gì', 'Vì mục tiêu xã hội bị loại bỏ', 'Vì kinh tế chỉ còn tự phát'],
    explanation:
      'Đường lối đổi mới sử dụng nhiều hình thức sở hữu và thành phần kinh tế để phát triển, nhưng vẫn hướng tới mục tiêu xã hội chủ nghĩa.',
  },
  {
    id: 'q099',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Thành tựu đổi mới có ý nghĩa gì đối với nhận thức lý luận của Đảng?',
    correct: 'Góp phần bổ sung, phát triển nhận thức về chủ nghĩa xã hội và con đường đi lên chủ nghĩa xã hội ở Việt Nam',
    wrong: ['Làm mất vai trò của lý luận', 'Chứng minh không cần tổng kết thực tiễn', 'Phủ nhận hoàn toàn mục tiêu cách mạng'],
    explanation:
      'Thực tiễn đổi mới là cơ sở để Đảng tiếp tục bổ sung, phát triển lý luận về con đường phát triển của Việt Nam.',
  },
  {
    id: 'q100',
    chapterId: '1975-now',
    difficulty: 'hard',
    relatedLessonSlug: LESSONS.renovation,
    question: 'Bài học tổng quát xuyên suốt lịch sử lãnh đạo của Đảng là gì?',
    correct: 'Xuất phát từ thực tiễn, phát huy sức mạnh nhân dân, giữ vững độc lập tự chủ và có đường lối đúng',
    wrong: ['Sao chép nguyên mẫu kinh nghiệm nước ngoài', 'Tách rời nhân dân khỏi cách mạng', 'Chỉ dựa vào một phương thức đấu tranh duy nhất'],
    explanation:
      'Lịch sử lãnh đạo của Đảng cho thấy đường lối đúng, gắn bó với nhân dân và bám sát thực tiễn là nhân tố quyết định thắng lợi.',
  },
];

export const examQuestionBank = rawExamQuestions.map(makeQuestion);

export const examBankStats = {
  total: examQuestionBank.length,
  byChapter: examQuestionBank.reduce((acc, question) => {
    acc[question.chapterId] = (acc[question.chapterId] || 0) + 1;
    return acc;
  }, {}),
  byDifficulty: examQuestionBank.reduce((acc, question) => {
    acc[question.difficulty] = (acc[question.difficulty] || 0) + 1;
    return acc;
  }, {}),
};
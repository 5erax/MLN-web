export const sourceCategories = [
  {
    id: 'giao-trinh',
    title: 'Giáo trình chính',
    description:
      'Nhóm tài liệu nền tảng dùng để học theo chương trình môn Lịch sử Đảng Cộng sản Việt Nam.',
    icon: '📘',
    sources: [
      {
        id: 'gt-1',
        title: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam',
        publisher: 'NXB Chính trị quốc gia Sự thật',
        type: 'Giáo trình',
        usage:
          'Dùng làm khung chính để xây dựng bài học, chia giai đoạn lịch sử và xác định các nội dung trọng tâm.',
        reliability:
          'Nguồn học liệu chính thống, phù hợp để đối chiếu kiến thức môn học.',
        relatedLessons: [
          'Đảng Cộng sản Việt Nam ra đời và Cương lĩnh chính trị đầu tiên',
          'Chuyển hướng chỉ đạo chiến lược và Cách mạng Tháng Tám',
          'Đảng lãnh đạo kháng chiến chống Pháp',
          'Đường lối đổi mới và phát triển đất nước',
        ],
      },
      {
        id: 'gt-2',
        title: 'Giáo trình Đường lối cách mạng của Đảng Cộng sản Việt Nam',
        publisher: 'NXB Chính trị quốc gia Sự thật',
        type: 'Giáo trình tham khảo',
        usage:
          'Dùng để bổ sung cách hiểu về đường lối cách mạng, kháng chiến, xây dựng đất nước và đổi mới.',
        reliability:
          'Phù hợp để tham khảo thêm khi cần giải thích đường lối qua từng thời kỳ.',
        relatedLessons: [
          'Đường lối kháng chiến chống thực dân Pháp',
          'Đường lối đổi mới từ năm 1986',
        ],
      },
    ],
  },
  {
    id: 'van-kien',
    title: 'Văn kiện Đảng',
    description:
      'Các văn kiện giúp kiểm chứng mốc thời gian, nội dung nghị quyết, đại hội, hội nghị và đường lối.',
    icon: '📄',
    sources: [
      {
        id: 'vk-1',
        title: 'Chánh cương vắn tắt, Sách lược vắn tắt',
        publisher: 'Văn kiện Đảng năm 1930',
        type: 'Văn kiện nền tảng',
        usage:
          'Dùng khi học về Hội nghị thành lập Đảng và Cương lĩnh chính trị đầu tiên.',
        reliability:
          'Là nhóm văn kiện gốc, cần ưu tiên khi kiểm chứng nội dung về đường lối cách mạng ban đầu.',
        relatedLessons: [
          'Đảng Cộng sản Việt Nam ra đời và Cương lĩnh chính trị đầu tiên',
        ],
      },
      {
        id: 'vk-2',
        title: 'Luận cương chính trị tháng 10 năm 1930',
        publisher: 'Văn kiện Đảng năm 1930',
        type: 'Văn kiện lịch sử',
        usage:
          'Dùng để so sánh với Cương lĩnh chính trị đầu tiên, nhất là về nhận thức dân tộc và giai cấp.',
        reliability:
          'Nguồn quan trọng khi học giai đoạn đầu của Đảng Cộng sản Đông Dương.',
        relatedLessons: [
          'Đảng ra đời và quá trình xác lập đường lối cách mạng',
        ],
      },
      {
        id: 'vk-3',
        title: 'Văn kiện Đại hội đại biểu toàn quốc lần thứ II',
        publisher: 'Văn kiện Đảng năm 1951',
        type: 'Văn kiện đại hội',
        usage:
          'Dùng khi học giai đoạn Đảng lãnh đạo đẩy mạnh kháng chiến chống thực dân Pháp.',
        reliability:
          'Nguồn quan trọng để kiểm chứng các nội dung về Đảng Lao động Việt Nam và Chính cương năm 1951.',
        relatedLessons: [
          'Đảng lãnh đạo đẩy mạnh kháng chiến chống Pháp đến thắng lợi',
        ],
      },
      {
        id: 'vk-4',
        title: 'Văn kiện Đại hội đại biểu toàn quốc lần thứ VI',
        publisher: 'Văn kiện Đảng năm 1986',
        type: 'Văn kiện đại hội',
        usage:
          'Dùng khi học công cuộc đổi mới, đổi mới tư duy kinh tế và đổi mới toàn diện đất nước.',
        reliability:
          'Nguồn chính để kiểm chứng tinh thần, mục tiêu và nội dung đổi mới.',
        relatedLessons: [
          'Đường lối đổi mới và phát triển đất nước',
        ],
      },
    ],
  },
  {
    id: 'ho-chi-minh',
    title: 'Tác phẩm Hồ Chí Minh',
    description:
      'Nhóm tác phẩm, bài viết và văn kiện của Nguyễn Ái Quốc - Hồ Chí Minh có giá trị nền tảng.',
    icon: '🖋️',
    sources: [
      {
        id: 'hcm-1',
        title: 'Đường Kách mệnh',
        publisher: 'Nguyễn Ái Quốc, 1927',
        type: 'Tác phẩm lý luận',
        usage:
          'Dùng khi học quá trình chuẩn bị tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng.',
        reliability:
          'Tác phẩm nền tảng giúp hiểu việc truyền bá chủ nghĩa Mác - Lênin vào Việt Nam.',
        relatedLessons: [
          'Đảng Cộng sản Việt Nam ra đời và Cương lĩnh chính trị đầu tiên',
        ],
      },
      {
        id: 'hcm-2',
        title: 'Tuyên ngôn Độc lập',
        publisher: 'Hồ Chí Minh, 1945',
        type: 'Văn kiện lịch sử',
        usage:
          'Dùng khi học Cách mạng Tháng Tám và sự ra đời của nước Việt Nam Dân chủ Cộng hòa.',
        reliability:
          'Văn kiện đặc biệt quan trọng trong lịch sử lập quốc hiện đại của Việt Nam.',
        relatedLessons: [
          'Chuyển hướng chỉ đạo chiến lược và Cách mạng Tháng Tám',
        ],
      },
      {
        id: 'hcm-3',
        title: 'Lời kêu gọi toàn quốc kháng chiến',
        publisher: 'Hồ Chí Minh, 1946',
        type: 'Văn kiện kháng chiến',
        usage:
          'Dùng khi học đường lối kháng chiến toàn dân, toàn diện, trường kỳ và tự lực cánh sinh.',
        reliability:
          'Nguồn quan trọng để hiểu tinh thần kháng chiến chống thực dân Pháp.',
        relatedLessons: [
          'Đảng lãnh đạo kháng chiến chống Pháp',
        ],
      },
    ],
  },
  {
    id: 'tai-lieu-on-thi',
    title: 'Tài liệu ôn thi',
    description:
      'Nhóm tài liệu dùng để hệ thống hóa kiến thức, luyện câu hỏi và tự kiểm tra trước kỳ thi.',
    icon: '✅',
    sources: [
      {
        id: 'ot-1',
        title: 'Đề cương ôn tập môn Lịch sử Đảng Cộng sản Việt Nam',
        publisher: 'Tài liệu nội bộ theo lớp hoặc giảng viên',
        type: 'Đề cương',
        usage:
          'Dùng để xác định phần trọng tâm, dạng câu hỏi thường gặp và phạm vi kiểm tra.',
        reliability:
          'Cần đối chiếu lại với giáo trình và văn kiện khi có mốc thời gian hoặc nhận định quan trọng.',
        relatedLessons: [
          'Tất cả bài học',
        ],
      },
      {
        id: 'ot-2',
        title: 'Bộ câu hỏi trắc nghiệm theo chương',
        publisher: 'Tự biên soạn từ giáo trình',
        type: 'Tài liệu luyện tập',
        usage:
          'Dùng để xây dựng quiz, flashcard, ghép cặp và trò chơi dòng thời gian.',
        reliability:
          'Cần có giải thích đáp án và kiểm tra lại dữ kiện trước khi đưa vào web.',
        relatedLessons: [
          'Tất cả bài học',
        ],
      },
    ],
  },
];

export const sourceUsageRules = [
  {
    title: 'Ưu tiên nguồn chính thống',
    description:
      'Khi có mâu thuẫn thông tin, ưu tiên giáo trình, văn kiện Đảng, tác phẩm gốc và tài liệu từ nhà xuất bản chính thống.',
  },
  {
    title: 'Không dùng nội dung không rõ nguồn',
    description:
      'Không đưa mốc thời gian, tên văn kiện, nhận định lịch sử hoặc trích dẫn vào bài học nếu chưa xác định được nguồn đáng tin cậy.',
  },
  {
    title: 'Tách sự kiện và nhận định',
    description:
      'Sự kiện cần trình bày rõ ngày tháng, bối cảnh, kết quả. Nhận định cần giải thích dựa trên tài liệu học tập.',
  },
  {
    title: 'Mỗi quiz cần có giải thích',
    description:
      'Câu hỏi không chỉ kiểm tra đúng/sai mà cần giúp người học hiểu vì sao đáp án đúng.',
  },
  {
    title: 'Cập nhật theo giảng viên hoặc giáo trình lớp học',
    description:
      'Nếu môn học có đề cương riêng, cần ưu tiên cấu trúc và phạm vi kiến thức do giảng viên yêu cầu.',
  },
];
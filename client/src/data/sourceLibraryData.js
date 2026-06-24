export const sourceCategories = [
  {
    id: 'giao-trinh',
    title: 'Giáo trình và sách chính trị',
    description:
      'Nhóm tài liệu nền tảng để xây dựng khung bài học, hệ thống hóa chương và đối chiếu kiến thức môn học.',
    icon: '📘',
    sources: [
      {
        id: 'gt-1',
        title: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam',
        publisher: 'NXB Chính trị quốc gia Sự thật',
        type: 'Giáo trình',
        sourceType: 'Sách / giáo trình',
        reliabilityLevel: 'Nguồn nền tảng',
        url: 'https://www.nxbctqg.org.vn/',
        usage:
          'Dùng làm khung chính để chia bài theo tiến trình lịch sử, xác định nội dung trọng tâm và chuẩn hóa cách trình bày kiến thức.',
        reliability:
          'Nguồn giáo trình chính thống. Khi xây dựng bài học hoặc câu hỏi ôn thi, nên ưu tiên đối chiếu với giáo trình đang được lớp hoặc giảng viên sử dụng.',
        relatedLessons: [
          'Đảng Cộng sản Việt Nam ra đời và Cương lĩnh chính trị đầu tiên',
          'Chuyển hướng chỉ đạo chiến lược và Cách mạng Tháng Tám',
          'Đảng lãnh đạo kháng chiến chống Pháp',
          'Đường lối đổi mới và phát triển đất nước',
        ],
      },
      {
        id: 'gt-2',
        title: 'Sách chính trị trong hệ thống Tư liệu - Văn kiện Đảng',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Sách tham khảo',
        sourceType: 'Kho tư liệu chính thống',
        reliabilityLevel: 'Nguồn tham khảo chính thống',
        url: 'https://tulieuvankien.dangcongsan.vn/tu-lieu-van-kien-dang/sach-chinh-tri',
        usage:
          'Dùng để tìm thêm tài liệu chính trị, sách tham khảo và nội dung mở rộng cho các giai đoạn lịch sử.',
        reliability:
          'Là nhóm tài liệu thuộc hệ thống Tư liệu - Văn kiện Đảng, phù hợp để tham khảo khi cần mở rộng nội dung ngoài giáo trình.',
        relatedLessons: [
          'Tất cả bài học',
        ],
      },
      {
        id: 'gt-3',
        title: 'Lịch sử Đảng trong hệ thống Tư liệu - Văn kiện Đảng',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Chuyên mục học liệu',
        sourceType: 'Kho tư liệu chính thống',
        reliabilityLevel: 'Nguồn đối chiếu',
        url: 'https://tulieuvankien.dangcongsan.vn/tu-lieu-van-kien-dang/lich-su-dang',
        usage:
          'Dùng để đối chiếu sự kiện, mốc thời gian và các bài viết liên quan đến lịch sử Đảng.',
        reliability:
          'Chuyên mục thuộc hệ thống Tư liệu - Văn kiện Đảng, phù hợp để kiểm tra thông tin trước khi đưa vào bài học.',
        relatedLessons: [
          'Tất cả bài học',
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
        title: 'Văn kiện Đảng toàn tập',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Văn kiện toàn tập',
        sourceType: 'Văn kiện gốc',
        reliabilityLevel: 'Ưu tiên cao',
        url: 'https://tulieuvankien.dangcongsan.vn/tu-lieu-van-kien-dang/van-kien-dang-toan-tap',
        usage:
          'Dùng để tra cứu văn kiện theo từng tập, đặc biệt khi cần kiểm chứng mốc thời gian, tên văn kiện hoặc nội dung nghị quyết.',
        reliability:
          'Nguồn văn kiện có giá trị đối chiếu cao. Khi có khác biệt giữa tài liệu tóm tắt và văn kiện, ưu tiên văn kiện gốc.',
        relatedLessons: [
          'Đảng ra đời và quá trình xác lập đường lối cách mạng',
          'Chuyển hướng chỉ đạo chiến lược',
          'Kháng chiến chống Pháp',
          'Kháng chiến chống Mỹ',
          'Đổi mới',
        ],
      },
      {
        id: 'vk-2',
        title: 'Văn kiện Đại hội Đảng',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Văn kiện đại hội',
        sourceType: 'Văn kiện gốc',
        reliabilityLevel: 'Ưu tiên cao',
        url: 'https://tulieuvankien.dangcongsan.vn/bo-chinh-tri-ban-bi-thu-ban-chap-hanh-trung-uong/dai-hoi-dang',
        usage:
          'Dùng để tra cứu văn kiện các kỳ Đại hội Đảng, đặc biệt khi học đường lối cách mạng, kháng chiến, xây dựng đất nước và đổi mới.',
        reliability:
          'Nguồn chính thống để kiểm tra nội dung văn kiện đại hội, nghị quyết, báo cáo chính trị và phương hướng phát triển.',
        relatedLessons: [
          'Đảng lãnh đạo đẩy mạnh kháng chiến chống Pháp đến thắng lợi',
          'Đường lối cách mạng hai miền',
          'Đường lối đổi mới và phát triển đất nước',
        ],
      },
      {
        id: 'vk-3',
        title: 'Văn kiện Đại hội đại biểu toàn quốc lần thứ VI',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Văn kiện đại hội',
        sourceType: 'Văn kiện gốc',
        reliabilityLevel: 'Ưu tiên cao',
        url: 'https://tulieuvankien.dangcongsan.vn/bo-chinh-tri-ban-bi-thu-ban-chap-hanh-trung-uong/dai-hoi-dang/lan-thu-vi',
        usage:
          'Dùng khi học công cuộc đổi mới từ năm 1986, đổi mới tư duy kinh tế, đổi mới cơ chế quản lý và phương hướng phát triển kinh tế - xã hội.',
        reliability:
          'Nguồn quan trọng để đối chiếu nội dung Đại hội VI, gồm nghị quyết, báo cáo chính trị và các văn kiện liên quan.',
        relatedLessons: [
          'Đường lối đổi mới và phát triển đất nước',
          'Đại hội VI và công cuộc đổi mới',
        ],
      },
      {
        id: 'vk-4',
        title: 'Hội nghị Ban Chấp hành Trung ương',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Văn kiện hội nghị Trung ương',
        sourceType: 'Văn kiện gốc',
        reliabilityLevel: 'Ưu tiên cao',
        url: 'https://tulieuvankien.dangcongsan.vn/tu-lieu-van-kien-dang/hoi-nghi-ban-chap-hanh-trung-uong',
        usage:
          'Dùng khi cần kiểm chứng nội dung các hội nghị Trung ương, chủ trương chuyển hướng chiến lược hoặc quyết sách lớn qua từng thời kỳ.',
        reliability:
          'Nguồn phù hợp để kiểm tra các nội dung liên quan đến hội nghị Trung ương và quá trình hình thành đường lối.',
        relatedLessons: [
          'Chuyển hướng chỉ đạo chiến lược và Cách mạng Tháng Tám',
          'Đường lối cách mạng hai miền',
          'Đổi mới',
        ],
      },
      {
        id: 'vk-5',
        title: 'Điều lệ Đảng',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Văn kiện tổ chức',
        sourceType: 'Văn kiện gốc',
        reliabilityLevel: 'Nguồn đối chiếu',
        url: 'https://tulieuvankien.dangcongsan.vn/tu-lieu-van-kien-dang/dieu-le-dang',
        usage:
          'Dùng khi xây dựng nội dung liên quan đến tổ chức Đảng, nguyên tắc xây dựng Đảng, nhiệm vụ đảng viên và hệ thống tổ chức.',
        reliability:
          'Nguồn chính thống về quy định tổ chức và hoạt động của Đảng.',
        relatedLessons: [
          'Xây dựng Đảng',
          'Đường lối đổi mới và phát triển đất nước',
        ],
      },
    ],
  },
  {
    id: 'ho-chi-minh',
    title: 'Hồ Chí Minh và tác phẩm',
    description:
      'Nhóm tác phẩm, bài viết và văn kiện của Nguyễn Ái Quốc - Hồ Chí Minh có giá trị nền tảng.',
    icon: '🖋️',
    sources: [
      {
        id: 'hcm-1',
        title: 'Tác phẩm Hồ Chí Minh',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Tác phẩm',
        sourceType: 'Tác phẩm gốc',
        reliabilityLevel: 'Ưu tiên cao',
        url: 'https://tulieuvankien.dangcongsan.vn/c.-mac-ph.-angghen-v.-i.-lenin-ho-chi-minh/ho-chi-minh/tac-pham',
        usage:
          'Dùng để tra cứu các tác phẩm, bài viết, lời kêu gọi và văn kiện của Hồ Chí Minh trong các giai đoạn cách mạng.',
        reliability:
          'Nguồn phù hợp để đối chiếu tác phẩm Hồ Chí Minh, đặc biệt khi trích dẫn hoặc giải thích tư tưởng, đường lối.',
        relatedLessons: [
          'Đảng Cộng sản Việt Nam ra đời và Cương lĩnh chính trị đầu tiên',
          'Chuyển hướng chỉ đạo chiến lược và Cách mạng Tháng Tám',
          'Kháng chiến chống Pháp',
        ],
      },
      {
        id: 'hcm-2',
        title: 'Biên niên tiểu sử Hồ Chí Minh',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Biên niên tiểu sử',
        sourceType: 'Tư liệu nhân vật',
        reliabilityLevel: 'Nguồn đối chiếu',
        url: 'https://tulieuvankien.dangcongsan.vn/c.-mac-ph.-angghen-v.-i.-lenin-ho-chi-minh/ho-chi-minh/tieu-su-cuoc-doi-va-su-nghiep/bien-nien-tieu-su',
        usage:
          'Dùng để đối chiếu mốc thời gian hoạt động của Nguyễn Ái Quốc - Hồ Chí Minh trong quá trình chuẩn bị thành lập Đảng và lãnh đạo cách mạng.',
        reliability:
          'Nguồn có ích khi cần kiểm tra mốc thời gian liên quan đến hoạt động của Hồ Chí Minh.',
        relatedLessons: [
          'Đảng Cộng sản Việt Nam ra đời và Cương lĩnh chính trị đầu tiên',
          'Cách mạng Tháng Tám',
        ],
      },
      {
        id: 'hcm-3',
        title: 'Hồ Chí Minh: tiểu sử, cuộc đời và sự nghiệp',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Tư liệu nhân vật',
        sourceType: 'Tư liệu nhân vật',
        reliabilityLevel: 'Nguồn đối chiếu',
        url: 'https://tulieuvankien.dangcongsan.vn/c.-mac-ph.-angghen-v.-i.-lenin-ho-chi-minh/ho-chi-minh/tieu-su-cuoc-doi-va-su-nghiep',
        usage:
          'Dùng để xây dựng hồ sơ nhân vật Hồ Chí Minh và liên kết với bài học về sự ra đời của Đảng, Cách mạng Tháng Tám, kháng chiến và kiến quốc.',
        reliability:
          'Nguồn chính thống trong hệ thống Tư liệu - Văn kiện Đảng, phù hợp để đối chiếu phần nhân vật.',
        relatedLessons: [
          'Nhân vật lịch sử',
          'Đảng ra đời',
          'Cách mạng Tháng Tám',
        ],
      },
    ],
  },
  {
    id: 'nhan-vat-su-kien',
    title: 'Nhân vật, sự kiện và dòng thời gian',
    description:
      'Nguồn dùng để bổ sung hồ sơ nhân vật, sự kiện, nhân chứng và bối cảnh lịch sử.',
    icon: '🧭',
    sources: [
      {
        id: 'nvs-1',
        title: 'Lãnh đạo Đảng, Nhà nước',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Hồ sơ lãnh đạo',
        sourceType: 'Tư liệu nhân vật',
        reliabilityLevel: 'Nguồn đối chiếu',
        url: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
        usage:
          'Dùng để bổ sung thông tin về các lãnh đạo tiêu biểu, chức vụ, thời kỳ hoạt động và liên hệ với bài học.',
        reliability:
          'Nguồn phù hợp để kiểm chứng thông tin cơ bản về nhân vật trước khi đưa vào trang nhân vật hoặc đối chiếu nhân vật.',
        relatedLessons: [
          'Nhân vật lịch sử',
          'Đối chiếu nhân vật',
        ],
      },
      {
        id: 'nvs-2',
        title: 'Hồ sơ - Sự kiện - Nhân chứng',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Hồ sơ sự kiện',
        sourceType: 'Tư liệu tham khảo',
        reliabilityLevel: 'Nguồn tham khảo',
        url: 'https://tulieuvankien.dangcongsan.vn/ho-so-su-kien-nhan-chung',
        usage:
          'Dùng để mở rộng bối cảnh sự kiện, nhân chứng và tư liệu liên quan khi xây dựng dòng thời gian hoặc trò chơi ôn tập.',
        reliability:
          'Nguồn tham khảo có ích, nhưng khi dùng cho câu hỏi thi vẫn nên đối chiếu thêm với giáo trình và văn kiện gốc.',
        relatedLessons: [
          'Dòng thời gian',
          'Ôn tập tương tác',
          'Câu hỏi tổng hợp',
        ],
      },
      {
        id: 'nvs-3',
        title: 'Đảng kỳ',
        publisher: 'Tư liệu - Văn kiện Đảng',
        type: 'Tư liệu biểu tượng',
        sourceType: 'Tư liệu chính thống',
        reliabilityLevel: 'Nguồn đối chiếu',
        url: 'https://tulieuvankien.dangcongsan.vn/tu-lieu-van-kien-dang/dang-ky',
        usage:
          'Dùng khi cần giải thích hoặc minh họa biểu tượng, nhận diện và yếu tố trực quan liên quan đến Đảng.',
        reliability:
          'Nguồn chính thống cho nội dung biểu tượng và tư liệu nhận diện.',
        relatedLessons: [
          'Trang chủ',
          'Nguồn học liệu',
        ],
      },
    ],
  },
  {
    id: 'on-thi',
    title: 'Ôn thi và kiểm chứng nội dung',
    description:
      'Nhóm nguồn dùng để kiểm tra lại đề cương, câu hỏi, flashcard và nội dung luyện tập.',
    icon: '✅',
    sources: [
      {
        id: 'ot-1',
        title: 'Đề cương ôn tập theo lớp hoặc giảng viên',
        publisher: 'Tài liệu học phần',
        type: 'Đề cương ôn tập',
        sourceType: 'Tài liệu lớp học',
        reliabilityLevel: 'Phụ thuộc giảng viên',
        url: '',
        usage:
          'Dùng để xác định phạm vi kiểm tra, dạng câu hỏi thường gặp và các trọng tâm mà giảng viên yêu cầu.',
        reliability:
          'Nên dùng cùng giáo trình và văn kiện. Nếu đề cương có cách chia chương khác website, ưu tiên yêu cầu của lớp học.',
        relatedLessons: [
          'Ôn thi',
          'Quiz theo bài',
          'Câu hỏi tổng hợp',
        ],
      },
      {
        id: 'ot-2',
        title: 'Ngân hàng câu hỏi tự biên soạn từ giáo trình và văn kiện',
        publisher: 'Nội bộ website',
        type: 'Dữ liệu luyện tập',
        sourceType: 'Dữ liệu tự biên soạn',
        reliabilityLevel: 'Cần rà soát định kỳ',
        url: '',
        usage:
          'Dùng để xây dựng câu hỏi ôn thi, flashcard, ghép cặp và trò chơi dòng thời gian.',
        reliability:
          'Cần kiểm tra lại định kỳ. Câu hỏi có mốc thời gian, văn kiện hoặc nhận định quan trọng phải đối chiếu với giáo trình và văn kiện gốc.',
        relatedLessons: [
          'Ôn thi',
          'Ôn tập tương tác',
          'Luyện lại câu sai',
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
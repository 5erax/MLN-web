/**
 * Kho kiến thức Lịch sử Đảng Cộng sản Việt Nam.
 * Cấu trúc giữ tương thích với các API hiện có để không làm gián đoạn ứng dụng.
 */

export const PHILOSOPHERS = {
  'ho-chi-minh': {
    name: 'Hồ Chí Minh',
    nameVi: 'Nguyễn Ái Quốc - Hồ Chí Minh',
    imageUrl: '/people/ho-chi-minh.jpg',
    imageAlt: 'Chân dung Hồ Chí Minh',
    imageCaption: 'Hồ Chí Minh - lãnh tụ cách mạng Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/',
    birthDeath: '1890-1969',
    era: 'Thành lập Đảng và kháng chiến',
    school: 'Giai đoạn 1930-1945',
    summary: 'Nguyễn Ái Quốc - Hồ Chí Minh chuẩn bị về tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam. Người chủ trì Hội nghị thành lập Đảng đầu năm 1930, lãnh đạo Cách mạng Tháng Tám và cùng Trung ương Đảng hoạch định đường lối kháng chiến, kiến quốc.',
    concepts: [
      'Gắn độc lập dân tộc với chủ nghĩa xã hội và quyền làm chủ của nhân dân.',
      'Chuẩn bị các điều kiện tư tưởng, chính trị và tổ chức để thành lập một chính đảng cách mạng.',
      'Xây dựng khối đại đoàn kết toàn dân, lấy liên minh công nhân - nông dân làm nền tảng.',
      'Kết hợp sức mạnh dân tộc với sức mạnh của thời đại.'
    ],
    quotes: [
      { text: 'Không có gì quý hơn độc lập, tự do.', source: 'Lời kêu gọi chống Mỹ, cứu nước, ngày 17/7/1966' },
      { text: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.', source: 'Bài nói tại Đại hội Mặt trận Tổ quốc Việt Nam lần thứ II, năm 1961' }
    ],
    works: [
      { title: 'Đường Kách mệnh', year: '1927', description: 'Tập hợp các bài giảng về lý luận và phương pháp cách mạng, góp phần chuẩn bị tư tưởng cho việc thành lập Đảng.' },
      { title: 'Chánh cương vắn tắt, Sách lược vắn tắt', year: '1930', description: 'Những văn kiện nền tảng được thông qua tại Hội nghị thành lập Đảng.' },
      { title: 'Tuyên ngôn Độc lập', year: '1945', description: 'Tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa.' }
    ],
    influences: ['Chủ nghĩa Mác - Lênin', 'Phong trào yêu nước Việt Nam', 'Phong trào công nhân quốc tế'],
    influencedBy: ['Đảng Cộng sản Việt Nam', 'Cách mạng Việt Nam', 'Phong trào giải phóng dân tộc']
  },
  'tran-phu': {
    name: 'Trần Phú',
    imageUrl: '/people/tran-phu.jpg',
    imageAlt: 'Chân dung Trần Phú',
    imageCaption: 'Trần Phú - Tổng Bí thư đầu tiên của Đảng',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/',
    nameVi: 'Trần Phú',
    birthDeath: '1904-1931',
    era: 'Thành lập Đảng',
    school: 'Giai đoạn 1930-1945',
    summary: 'Trần Phú là Tổng Bí thư đầu tiên của Đảng. Đồng chí chủ trì xây dựng Luận cương chính trị tháng 10/1930 và góp phần củng cố tổ chức Đảng trong những năm đầu đầy thử thách.',
    concepts: [
      'Khẳng định vai trò lãnh đạo của Đảng của giai cấp công nhân.',
      'Nhấn mạnh liên minh công nhân - nông dân trong cách mạng Đông Dương.',
      'Gắn cách mạng Việt Nam với phong trào cách mạng thế giới.'
    ],
    quotes: [],
    works: [
      { title: 'Luận cương chính trị', year: '10/1930', description: 'Văn kiện trình bày những vấn đề chiến lược của cách mạng tư sản dân quyền ở Đông Dương.' }
    ],
    influences: ['Chủ nghĩa Mác - Lênin', 'Quốc tế Cộng sản'],
    influencedBy: ['Công tác xây dựng Đảng thời kỳ đầu']
  },
  'le-hong-phong': {
    imageUrl: '/people/le-hong-phong.jpg',
    imageAlt: 'Chân dung Lê Hồng Phong',
    imageCaption: 'Lê Hồng Phong - Tổng Bí thư của Đảng thời kỳ khôi phục tổ chức',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/',
    name: 'Lê Hồng Phong',
    nameVi: 'Lê Hồng Phong',
    birthDeath: '1902-1942',
    era: 'Khôi phục tổ chức Đảng',
    school: 'Giai đoạn 1930-1945',
    summary: 'Lê Hồng Phong có vai trò quan trọng trong khôi phục hệ thống tổ chức Đảng sau cao trào 1930-1931, chuẩn bị Đại hội I của Đảng và duy trì mối liên hệ với phong trào cộng sản quốc tế.',
    concepts: [
      'Khôi phục tổ chức và hệ thống lãnh đạo của Đảng.',
      'Kết nối phong trào cách mạng trong nước với phong trào quốc tế.',
      'Củng cố đội ngũ cán bộ trong điều kiện bị đàn áp.'
    ],
    quotes: [],
    works: [
      { title: 'Chương trình hành động của Đảng Cộng sản Đông Dương', year: '1932', description: 'Góp phần định hướng khôi phục phong trào cách mạng sau thời kỳ khủng bố trắng.' }
    ],
    influences: ['Phong trào cộng sản quốc tế'],
    influencedBy: ['Công tác tổ chức và cán bộ của Đảng']
  },
  'nguyen-van-cu': {
    imageUrl: '/people/nguyen-van-cu.jpg',
    imageAlt: 'Chân dung Nguyễn Văn Cừ',
    imageCaption: 'Nguyễn Văn Cừ - Tổng Bí thư của Đảng giai đoạn 1938-1940',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/',
    name: 'Nguyễn Văn Cừ',
    nameVi: 'Nguyễn Văn Cừ',
    birthDeath: '1912-1941',
    era: 'Chuyển hướng chiến lược',
    school: 'Giai đoạn 1930-1945',
    summary: 'Nguyễn Văn Cừ giữ cương vị Tổng Bí thư trong giai đoạn 1938-1940. Đồng chí góp phần phát triển năng lực tự phê bình, xây dựng Đảng và chỉ đạo bước đầu chuyển hướng chiến lược khi Chiến tranh thế giới thứ hai bùng nổ.',
    concepts: [
      'Đề cao tự phê bình và phê bình trong xây dựng Đảng.',
      'Chú trọng đoàn kết nội bộ trên cơ sở nguyên tắc.',
      'Góp phần chuyển trọng tâm sang nhiệm vụ giải phóng dân tộc.'
    ],
    quotes: [],
    works: [
      { title: 'Tự chỉ trích', year: '1939', description: 'Tác phẩm nhấn mạnh tinh thần tự phê bình, đoàn kết và kỷ luật trong Đảng.' }
    ],
    influences: ['Thực tiễn phong trào dân chủ 1936-1939'],
    influencedBy: ['Công tác xây dựng, chỉnh đốn Đảng']
  },
  'truong-chinh': {
    imageUrl: '/people/truong-chinh.jpg',
    imageAlt: 'Chân dung Trường Chinh',
    imageCaption: 'Trường Chinh - nhà lãnh đạo của Đảng trong kháng chiến và đổi mới',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/',
    name: 'Trường Chinh',
    nameVi: 'Trường Chinh',
    birthDeath: '1907-1988',
    era: 'Kháng chiến và đổi mới',
    school: 'Giai đoạn 1945-1975',
    summary: 'Trường Chinh tham gia lãnh đạo Tổng khởi nghĩa Tháng Tám, kháng chiến chống thực dân Pháp và công cuộc xây dựng đất nước. Đồng chí có đóng góp lớn trong hình thành đường lối kháng chiến toàn dân, toàn diện, trường kỳ và tự lực cánh sinh.',
    concepts: [
      'Kháng chiến toàn dân, toàn diện, trường kỳ và dựa vào sức mình là chính.',
      'Kết hợp nhiệm vụ kháng chiến với kiến quốc.',
      'Tôn trọng quy luật khách quan và đổi mới tư duy.'
    ],
    quotes: [],
    works: [
      { title: 'Kháng chiến nhất định thắng lợi', year: '1947', description: 'Tác phẩm trình bày có hệ thống đường lối kháng chiến chống thực dân Pháp.' }
    ],
    influences: ['Đường lối cách mạng của Đảng', 'Tư tưởng Hồ Chí Minh'],
    influencedBy: ['Đường lối kháng chiến', 'Tư duy đổi mới']
  },
  'vo-nguyen-giap': {
    imageUrl: '/people/vo-nguyen-giap.jpg',
    imageAlt: 'Chân dung Võ Nguyên Giáp',
    imageCaption: 'Võ Nguyên Giáp - Đại tướng, Tổng Tư lệnh Quân đội nhân dân Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/',
    name: 'Võ Nguyên Giáp',
    nameVi: 'Võ Nguyên Giáp',
    birthDeath: '1911-2013',
    era: 'Hai cuộc kháng chiến',
    school: 'Giai đoạn 1945-1975',
    summary: 'Đại tướng Võ Nguyên Giáp là Tổng Tư lệnh Quân đội nhân dân Việt Nam. Dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh, Đại tướng trực tiếp chỉ huy nhiều chiến dịch lớn, tiêu biểu là Chiến dịch Điện Biên Phủ năm 1954.',
    concepts: [
      'Xây dựng lực lượng vũ trang nhân dân và thế trận chiến tranh nhân dân.',
      'Kết hợp chiến tranh du kích với tác chiến tập trung.',
      'Lấy chắc thắng làm nguyên tắc cao nhất trong chỉ đạo chiến dịch.'
    ],
    quotes: [],
    works: [
      { title: 'Chiến dịch Điện Biên Phủ', year: '1954', description: 'Chuyển phương châm từ “đánh nhanh, giải quyết nhanh” sang “đánh chắc, tiến chắc”.' }
    ],
    influences: ['Đường lối chiến tranh nhân dân', 'Tư tưởng quân sự Hồ Chí Minh'],
    influencedBy: ['Nghệ thuật quân sự Việt Nam hiện đại']
  },
  'le-duan': {
    imageUrl: '/people/le-duan.jpg',
    imageAlt: 'Chân dung Lê Duẩn',
    imageCaption: 'Lê Duẩn - Tổng Bí thư của Đảng thời kỳ kháng chiến chống Mỹ và sau thống nhất',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/',
    name: 'Lê Duẩn',
    nameVi: 'Lê Duẩn',
    birthDeath: '1907-1986',
    era: 'Kháng chiến chống Mỹ',
    school: 'Giai đoạn 1945-1975',
    summary: 'Lê Duẩn có nhiều đóng góp trong hoạch định đường lối cách mạng miền Nam, xây dựng quyết tâm chiến lược giải phóng miền Nam và thống nhất đất nước. Đồng chí giữ cương vị lãnh đạo cao nhất của Đảng trong phần lớn cuộc kháng chiến chống Mỹ.',
    concepts: [
      'Tiến hành đồng thời cách mạng xã hội chủ nghĩa ở miền Bắc và cách mạng dân tộc dân chủ nhân dân ở miền Nam.',
      'Kết hợp đấu tranh chính trị, quân sự và ngoại giao.',
      'Giữ vững mục tiêu độc lập dân tộc và thống nhất đất nước.'
    ],
    quotes: [],
    works: [
      { title: 'Đề cương cách mạng miền Nam', year: '1956', description: 'Góp phần định hướng con đường đấu tranh cách mạng ở miền Nam.' }
    ],
    influences: ['Thực tiễn cách mạng miền Nam'],
    influencedBy: ['Đường lối kháng chiến chống Mỹ, cứu nước']
  },
  'nguyen-van-linh': {
    imageUrl: '/people/nguyen-van-linh.jpg',
    imageAlt: 'Chân dung Nguyễn Văn Linh',
    imageCaption: 'Nguyễn Văn Linh - Tổng Bí thư đầu thời kỳ đổi mới',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/',
    name: 'Nguyễn Văn Linh',
    nameVi: 'Nguyễn Văn Linh',
    birthDeath: '1915-1998',
    era: 'Đổi mới',
    school: 'Giai đoạn từ 1975',
    summary: 'Nguyễn Văn Linh là Tổng Bí thư đầu thời kỳ đổi mới. Đồng chí cùng Ban Chấp hành Trung ương khóa VI lãnh đạo chuyển đổi tư duy kinh tế, khắc phục cơ chế tập trung quan liêu, bao cấp và mở đường cho công cuộc đổi mới toàn diện.',
    concepts: [
      'Nhìn thẳng vào sự thật, đánh giá đúng sự thật và nói rõ sự thật.',
      'Đổi mới tư duy trước hết là đổi mới tư duy kinh tế.',
      'Phát huy dân chủ, chống tiêu cực và tăng hiệu quả quản lý.'
    ],
    quotes: [],
    works: [
      { title: 'Đại hội đại biểu toàn quốc lần thứ VI', year: '1986', description: 'Đại hội khởi xướng đường lối đổi mới toàn diện đất nước.' }
    ],
    influences: ['Thực tiễn khủng hoảng kinh tế - xã hội trước đổi mới'],
    influencedBy: ['Công cuộc đổi mới và hội nhập quốc tế']
  },
  'pham-van-dong': {
    name: 'Phạm Văn Đồng',
    nameVi: 'Phạm Văn Đồng',
    birthDeath: '1906-2000',
    era: 'Kháng chiến, kiến quốc và xây dựng đất nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/pham-van-dong.jpg',
    imageAlt: 'Chân dung Phạm Văn Đồng',
    imageCaption: 'Phạm Văn Đồng - nhà lãnh đạo cấp cao của Đảng và Nhà nước Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Phạm Văn Đồng là nhà lãnh đạo cấp cao của Đảng và Nhà nước Việt Nam, người học trò gần gũi của Chủ tịch Hồ Chí Minh. Đồng chí có nhiều đóng góp trong công tác Chính phủ, ngoại giao, xây dựng chính quyền cách mạng, kháng chiến kiến quốc và quản lý đất nước sau thống nhất.',
    concepts: [
      'Xây dựng chính quyền cách mạng và tổ chức bộ máy nhà nước sau Cách mạng Tháng Tám.',
      'Kết hợp nhiệm vụ kháng chiến với kiến quốc trong điều kiện đất nước còn nhiều khó khăn.',
      'Đóng góp quan trọng trong hoạt động ngoại giao và quản lý nhà nước.',
      'Gắn bó với tư tưởng Hồ Chí Minh về độc lập dân tộc, đoàn kết và phụng sự nhân dân.',
    ],
    quotes: [],
    works: [
      {
        title: 'Hoạt động trong Chính phủ Việt Nam Dân chủ Cộng hòa',
        year: '1945-1976',
        description:
          'Tham gia xây dựng và điều hành bộ máy nhà nước trong thời kỳ kháng chiến, kiến quốc và xây dựng miền Bắc.',
      },
      {
        title: 'Hoạt động đối ngoại trong kháng chiến',
        year: '1945-1975',
        description:
          'Có nhiều đóng góp trong công tác ngoại giao, tranh thủ sự ủng hộ quốc tế đối với cách mạng Việt Nam.',
      },
      {
        title: 'Quản lý đất nước sau thống nhất',
        year: '1976-1987',
        description:
          'Tiếp tục giữ vai trò quan trọng trong Chính phủ sau khi đất nước thống nhất.',
      },
    ],
    influences: ['Tư tưởng Hồ Chí Minh', 'Đường lối kháng chiến kiến quốc của Đảng'],
    influencedBy: ['Công tác quản lý nhà nước', 'Ngoại giao cách mạng Việt Nam'],
  },

  'ton-duc-thang': {
    name: 'Tôn Đức Thắng',
    nameVi: 'Tôn Đức Thắng',
    birthDeath: '1888-1980',
    era: 'Phong trào công nhân, kháng chiến và xây dựng nhà nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/ton-duc-thang.jpg',
    imageAlt: 'Chân dung Tôn Đức Thắng',
    imageCaption: 'Tôn Đức Thắng - nhà hoạt động cách mạng, Chủ tịch nước Việt Nam Dân chủ Cộng hòa và Cộng hòa xã hội chủ nghĩa Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Tôn Đức Thắng là nhà hoạt động cách mạng tiêu biểu, gắn với phong trào công nhân và sự nghiệp đại đoàn kết dân tộc. Đồng chí có nhiều đóng góp trong kháng chiến, xây dựng Mặt trận dân tộc thống nhất và củng cố Nhà nước Việt Nam sau Cách mạng Tháng Tám.',
    concepts: [
      'Gắn phong trào công nhân Việt Nam với phong trào cách mạng giải phóng dân tộc.',
      'Thể hiện tinh thần đoàn kết quốc tế và đoàn kết dân tộc.',
      'Có vai trò quan trọng trong Mặt trận dân tộc thống nhất.',
      'Góp phần củng cố Nhà nước cách mạng và khối đại đoàn kết toàn dân.',
    ],
    quotes: [],
    works: [
      {
        title: 'Hoạt động trong phong trào công nhân',
        year: 'Trước 1945',
        description:
          'Gắn bó với phong trào công nhân và hoạt động yêu nước trong thời kỳ đấu tranh chống thực dân.',
      },
      {
        title: 'Hoạt động trong Mặt trận dân tộc thống nhất',
        year: '1945-1975',
        description:
          'Góp phần xây dựng khối đoàn kết toàn dân trong kháng chiến và kiến quốc.',
      },
      {
        title: 'Củng cố Nhà nước Việt Nam sau thống nhất',
        year: '1976-1980',
        description:
          'Tiếp tục giữ vai trò biểu tượng đoàn kết trong giai đoạn đầu sau khi đất nước thống nhất.',
      },
    ],
    influences: ['Phong trào công nhân', 'Tư tưởng đại đoàn kết dân tộc'],
    influencedBy: ['Mặt trận dân tộc thống nhất', 'Truyền thống đoàn kết của cách mạng Việt Nam'],
  },

  'pham-hung': {
    name: 'Phạm Hùng',
    nameVi: 'Phạm Hùng',
    birthDeath: '1912-1988',
    era: 'Kháng chiến chống Mỹ và xây dựng đất nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/pham-hung.jpg',
    imageAlt: 'Chân dung Phạm Hùng',
    imageCaption: 'Phạm Hùng - nhà lãnh đạo của Đảng và Nhà nước Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Phạm Hùng là nhà lãnh đạo cách mạng có nhiều đóng góp trong phong trào cách mạng miền Nam, kháng chiến chống Mỹ và công tác lãnh đạo, quản lý đất nước sau thống nhất. Đồng chí gắn với thực tiễn đấu tranh ở Nam Bộ và quá trình xây dựng chính quyền cách mạng.',
    concepts: [
      'Gắn bó với phong trào cách mạng miền Nam và Nam Bộ.',
      'Đóng góp trong tổ chức lực lượng chính trị, quân sự và phong trào quần chúng.',
      'Tham gia lãnh đạo trong giai đoạn kháng chiến chống Mỹ và xây dựng đất nước sau thống nhất.',
      'Thể hiện vai trò của cán bộ lãnh đạo trưởng thành từ thực tiễn đấu tranh cách mạng.',
    ],
    quotes: [],
    works: [
      {
        title: 'Hoạt động cách mạng ở Nam Bộ',
        year: '1945-1975',
        description:
          'Gắn với quá trình lãnh đạo phong trào cách mạng miền Nam trong kháng chiến.',
      },
      {
        title: 'Công tác lãnh đạo sau thống nhất',
        year: 'Sau 1975',
        description:
          'Tiếp tục tham gia lãnh đạo, quản lý nhà nước trong giai đoạn xây dựng đất nước.',
      },
    ],
    influences: ['Thực tiễn cách mạng miền Nam', 'Đường lối kháng chiến chống Mỹ'],
    influencedBy: ['Phong trào cách mạng Nam Bộ', 'Công tác tổ chức và lãnh đạo sau thống nhất'],
  },

  'le-duc-tho': {
    name: 'Lê Đức Thọ',
    nameVi: 'Lê Đức Thọ',
    birthDeath: '1911-1990',
    era: 'Xây dựng Đảng, kháng chiến và ngoại giao',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/le-duc-tho.jpg',
    imageAlt: 'Chân dung Lê Đức Thọ',
    imageCaption: 'Lê Đức Thọ - nhà lãnh đạo của Đảng, nhà hoạt động ngoại giao trong kháng chiến chống Mỹ',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Lê Đức Thọ là nhà lãnh đạo của Đảng, có nhiều đóng góp trong công tác tổ chức, xây dựng Đảng và hoạt động ngoại giao thời kỳ kháng chiến chống Mỹ. Đồng chí gắn với quá trình đàm phán Hiệp định Paris, góp phần tạo điều kiện cho thắng lợi cuối cùng của sự nghiệp giải phóng miền Nam.',
    concepts: [
      'Đóng góp trong công tác tổ chức và xây dựng Đảng.',
      'Tham gia chỉ đạo, xử lý các vấn đề chiến lược trong kháng chiến chống Mỹ.',
      'Gắn với mặt trận ngoại giao, đặc biệt là quá trình đàm phán Paris.',
      'Thể hiện sự kết hợp giữa đấu tranh quân sự, chính trị và ngoại giao.',
    ],
    quotes: [],
    works: [
      {
        title: 'Công tác tổ chức của Đảng',
        year: '1945-1975',
        description:
          'Có nhiều đóng góp trong xây dựng tổ chức, cán bộ và hệ thống lãnh đạo của Đảng.',
      },
      {
        title: 'Đàm phán Paris',
        year: '1968-1973',
        description:
          'Tham gia quá trình đàm phán ngoại giao dẫn tới Hiệp định Paris về Việt Nam.',
      },
    ],
    influences: ['Đường lối kháng chiến chống Mỹ', 'Nghệ thuật ngoại giao cách mạng'],
    influencedBy: ['Công tác xây dựng Đảng', 'Đấu tranh ngoại giao trong kháng chiến chống Mỹ'],
  },

  'nguyen-chi-thanh': {
    name: 'Nguyễn Chí Thanh',
    nameVi: 'Nguyễn Chí Thanh',
    birthDeath: '1914-1967',
    era: 'Kháng chiến và xây dựng lực lượng',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/nguyen-chi-thanh.jpg',
    imageAlt: 'Chân dung Nguyễn Chí Thanh',
    imageCaption: 'Nguyễn Chí Thanh - lãnh đạo quân sự, chính trị của cách mạng Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Nguyễn Chí Thanh là nhà lãnh đạo chính trị, quân sự tiêu biểu, có nhiều đóng góp trong xây dựng lực lượng vũ trang, công tác chính trị trong quân đội và phong trào cách mạng miền Nam. Đồng chí gắn với tinh thần tiến công và quan điểm phát huy sức mạnh chính trị của quần chúng trong chiến tranh cách mạng.',
    concepts: [
      'Chú trọng công tác chính trị, tư tưởng trong lực lượng vũ trang.',
      'Gắn xây dựng quân đội với xây dựng Đảng và phát huy vai trò quần chúng.',
      'Góp phần chỉ đạo phong trào cách mạng miền Nam trong kháng chiến chống Mỹ.',
      'Thể hiện tinh thần chủ động tiến công trong chiến tranh cách mạng.',
    ],
    quotes: [],
    works: [
      {
        title: 'Công tác chính trị trong quân đội',
        year: '1945-1967',
        description:
          'Có nhiều đóng góp trong xây dựng quân đội về chính trị, tư tưởng và tổ chức.',
      },
      {
        title: 'Chỉ đạo chiến trường miền Nam',
        year: '1960s',
        description:
          'Góp phần phát triển đường lối đấu tranh cách mạng ở miền Nam trong kháng chiến chống Mỹ.',
      },
    ],
    influences: ['Đường lối chiến tranh nhân dân', 'Công tác chính trị trong quân đội'],
    influencedBy: ['Xây dựng lực lượng vũ trang nhân dân', 'Phong trào cách mạng miền Nam'],
  },

  'hoang-quoc-viet': {
    name: 'Hoàng Quốc Việt',
    nameVi: 'Hoàng Quốc Việt',
    birthDeath: '1905-1992',
    era: 'Phong trào công nhân, Mặt trận và xây dựng Đảng',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/hoang-quoc-viet.jpg',
    imageAlt: 'Chân dung Hoàng Quốc Việt',
    imageCaption: 'Hoàng Quốc Việt - nhà hoạt động cách mạng, lãnh đạo trong công tác Mặt trận và công đoàn',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Hoàng Quốc Việt là nhà hoạt động cách mạng có nhiều đóng góp trong phong trào công nhân, công tác Mặt trận, công đoàn và xây dựng Đảng. Đồng chí gắn với việc tập hợp lực lượng quần chúng và phát huy vai trò của các tổ chức chính trị - xã hội trong cách mạng Việt Nam.',
    concepts: [
      'Gắn phong trào công nhân với sự lãnh đạo của Đảng.',
      'Chú trọng công tác vận động quần chúng và xây dựng tổ chức chính trị - xã hội.',
      'Đóng góp trong công tác Mặt trận và công đoàn.',
      'Thể hiện vai trò của đoàn kết xã hội trong kháng chiến và xây dựng đất nước.',
    ],
    quotes: [],
    works: [
      {
        title: 'Hoạt động trong phong trào công nhân',
        year: 'Trước và sau 1945',
        description:
          'Gắn với công tác vận động công nhân và tổ chức quần chúng.',
      },
      {
        title: 'Công tác Mặt trận và công đoàn',
        year: '1945-1975',
        description:
          'Góp phần xây dựng khối đoàn kết và phát huy sức mạnh các tổ chức quần chúng.',
      },
    ],
    influences: ['Phong trào công nhân', 'Đường lối đại đoàn kết dân tộc'],
    influencedBy: ['Công tác dân vận', 'Mặt trận và công đoàn Việt Nam'],
  },

  'nguyen-luong-bang': {
    name: 'Nguyễn Lương Bằng',
    nameVi: 'Nguyễn Lương Bằng',
    birthDeath: '1904-1979',
    era: 'Tài chính cách mạng, kháng chiến và xây dựng nhà nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/nguyen-luong-bang.jpg',
    imageAlt: 'Chân dung Nguyễn Lương Bằng',
    imageCaption: 'Nguyễn Lương Bằng - nhà hoạt động cách mạng, cán bộ lãnh đạo của Đảng và Nhà nước',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Nguyễn Lương Bằng là nhà hoạt động cách mạng có nhiều đóng góp trong công tác tài chính, xây dựng chính quyền cách mạng và củng cố bộ máy nhà nước. Đồng chí là tấm gương về đạo đức cách mạng, tinh thần tận tụy và kỷ luật trong hoạt động cách mạng.',
    concepts: [
      'Góp phần xây dựng nền tài chính cách mạng trong điều kiện kháng chiến.',
      'Tham gia củng cố chính quyền cách mạng và bộ máy nhà nước.',
      'Thể hiện phẩm chất đạo đức cách mạng, cần kiệm, liêm chính.',
      'Có vai trò trong công tác tổ chức, kiểm tra và xây dựng Đảng.',
    ],
    quotes: [],
    works: [
      {
        title: 'Công tác tài chính cách mạng',
        year: '1945-1954',
        description:
          'Gắn với nhiệm vụ xây dựng nguồn lực tài chính phục vụ kháng chiến và kiến quốc.',
      },
      {
        title: 'Công tác lãnh đạo trong Nhà nước',
        year: 'Sau 1954',
        description:
          'Tham gia nhiều nhiệm vụ lãnh đạo trong bộ máy Đảng và Nhà nước.',
      },
    ],
    influences: ['Tư tưởng đạo đức cách mạng Hồ Chí Minh', 'Yêu cầu xây dựng chính quyền cách mạng'],
    influencedBy: ['Công tác tài chính cách mạng', 'Xây dựng đạo đức cán bộ'],
  },

  'van-tien-dung': {
    name: 'Văn Tiến Dũng',
    nameVi: 'Văn Tiến Dũng',
    birthDeath: '1917-2002',
    era: 'Kháng chiến chống Pháp, chống Mỹ và thống nhất đất nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/van-tien-dung.jpg',
    imageAlt: 'Chân dung Văn Tiến Dũng',
    imageCaption: 'Văn Tiến Dũng - Đại tướng, nhà lãnh đạo quân sự của Quân đội nhân dân Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Đại tướng Văn Tiến Dũng là nhà lãnh đạo quân sự tiêu biểu của Quân đội nhân dân Việt Nam. Đồng chí tham gia lãnh đạo, chỉ huy nhiều nhiệm vụ quân sự quan trọng, đặc biệt gắn với giai đoạn cuối của cuộc kháng chiến chống Mỹ và Đại thắng mùa Xuân năm 1975.',
    concepts: [
      'Góp phần phát triển nghệ thuật chỉ đạo chiến dịch trong chiến tranh nhân dân.',
      'Tham gia lãnh đạo quân sự trong giai đoạn quyết định của kháng chiến chống Mỹ.',
      'Gắn với quá trình tổ chức và chỉ huy chiến dịch trong Tổng tiến công mùa Xuân 1975.',
      'Thể hiện vai trò của Bộ Tổng tham mưu và chỉ đạo chiến lược quân sự.',
    ],
    quotes: [],
    works: [
      {
        title: 'Chỉ đạo quân sự trong kháng chiến chống Mỹ',
        year: '1954-1975',
        description:
          'Tham gia nhiều nhiệm vụ lãnh đạo, chỉ huy quân sự trong cuộc kháng chiến chống Mỹ.',
      },
      {
        title: 'Đại thắng mùa Xuân năm 1975',
        year: '1975',
        description:
          'Gắn với quá trình chỉ đạo chiến dịch trong giai đoạn quyết định giải phóng miền Nam.',
      },
    ],
    influences: ['Đường lối chiến tranh nhân dân', 'Nghệ thuật quân sự Việt Nam'],
    influencedBy: ['Chỉ đạo chiến lược quân sự', 'Tổng tiến công và nổi dậy mùa Xuân 1975'],
  },

  'vo-van-kiet': {
    name: 'Võ Văn Kiệt',
    nameVi: 'Võ Văn Kiệt',
    birthDeath: '1922-2008',
    era: 'Kháng chiến, đổi mới và phát triển đất nước',
    school: 'Giai đoạn từ 1975',
    imageUrl: '/people/vo-van-kiet.jpg',
    imageAlt: 'Chân dung Võ Văn Kiệt',
    imageCaption: 'Võ Văn Kiệt - nhà lãnh đạo gắn với công cuộc đổi mới và phát triển đất nước',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Võ Văn Kiệt là nhà lãnh đạo có tư duy đổi mới mạnh mẽ, trưởng thành từ thực tiễn cách mạng miền Nam và có nhiều đóng góp trong phát triển kinh tế - xã hội sau thống nhất. Đồng chí gắn với tinh thần đổi mới, dám nghĩ, dám làm, thúc đẩy hạ tầng, mở cửa và hội nhập.',
    concepts: [
      'Gắn đổi mới với thực tiễn đời sống nhân dân và yêu cầu phát triển đất nước.',
      'Thúc đẩy tư duy quản lý năng động, tháo gỡ cơ chế cũ và khuyến khích sản xuất.',
      'Quan tâm phát triển hạ tầng, năng lượng và kết nối vùng.',
      'Kết hợp ổn định chính trị với phát triển kinh tế và mở rộng quan hệ đối ngoại.',
    ],
    quotes: [],
    works: [
      {
        title: 'Thúc đẩy đổi mới kinh tế - xã hội',
        year: 'Sau 1986',
        description:
          'Gắn với nhiều quyết sách và công trình phát triển trong giai đoạn đầu đổi mới.',
      },
      {
        title: 'Phát triển hạ tầng và kết nối vùng',
        year: '1990s',
        description:
          'Quan tâm thúc đẩy các dự án hạ tầng, năng lượng và phát triển kinh tế vùng.',
      },
    ],
    influences: ['Thực tiễn Nam Bộ', 'Đường lối đổi mới của Đảng'],
    influencedBy: ['Tư duy quản lý đổi mới', 'Phát triển kinh tế - xã hội sau 1986'],
  },

  'do-muoi': {
    name: 'Đỗ Mười',
    nameVi: 'Đỗ Mười',
    birthDeath: '1917-2018',
    era: 'Đổi mới và xây dựng Đảng',
    school: 'Giai đoạn từ 1975',
    imageUrl: '/people/do-muoi.jpg',
    imageAlt: 'Chân dung Đỗ Mười',
    imageCaption: 'Đỗ Mười - Tổng Bí thư của Đảng trong thời kỳ đầu đổi mới',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Đỗ Mười là Tổng Bí thư của Đảng trong giai đoạn đầu đổi mới, có vai trò trong quá trình tiếp tục thể chế hóa và triển khai đường lối đổi mới sau Đại hội VI. Đồng chí gắn với nhiệm vụ ổn định kinh tế - xã hội, xây dựng Đảng và hoàn thiện nhận thức về con đường phát triển đất nước.',
    concepts: [
      'Tiếp tục triển khai và củng cố đường lối đổi mới.',
      'Chú trọng ổn định kinh tế - xã hội trong giai đoạn chuyển đổi cơ chế.',
      'Góp phần xây dựng Đảng và củng cố hệ thống chính trị.',
      'Gắn đổi mới kinh tế với định hướng xã hội chủ nghĩa và vai trò quản lý của Nhà nước.',
    ],
    quotes: [],
    works: [
      {
        title: 'Lãnh đạo trong thời kỳ đầu đổi mới',
        year: '1991-1997',
        description:
          'Gắn với quá trình tiếp tục triển khai đường lối đổi mới sau Đại hội VI và Đại hội VII.',
      },
      {
        title: 'Xây dựng Đảng và ổn định kinh tế - xã hội',
        year: '1990s',
        description:
          'Chú trọng củng cố hệ thống chính trị, ổn định xã hội và phát triển kinh tế trong giai đoạn chuyển đổi.',
      },
    ],
    influences: ['Đường lối đổi mới', 'Yêu cầu ổn định và phát triển sau khủng hoảng kinh tế - xã hội'],
    influencedBy: ['Xây dựng Đảng thời kỳ đổi mới', 'Hoàn thiện cơ chế quản lý kinh tế'],
  },

  'nguyen-duc-binh': {
    name: 'Nguyễn Đức Bình',
    nameVi: 'Nguyễn Đức Bình',
    birthDeath: '1927-2019',
    era: 'Lý luận chính trị và xây dựng Đảng',
    school: 'Giai đoạn từ 1975',
    imageUrl: '/people/nguyen-duc-binh.jpg',
    imageAlt: 'Chân dung Nguyễn Đức Bình',
    imageCaption: 'Nguyễn Đức Bình - nhà lý luận chính trị, nhà lãnh đạo công tác tư tưởng của Đảng',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Nguyễn Đức Bình là nhà lý luận chính trị, có nhiều đóng góp trong công tác tư tưởng, lý luận và xây dựng Đảng thời kỳ đổi mới. Đồng chí gắn với việc nghiên cứu, bảo vệ và phát triển nền tảng tư tưởng của Đảng trong bối cảnh đất nước chuyển sang thời kỳ đổi mới.',
    concepts: [
      'Góp phần vào công tác tư tưởng, lý luận của Đảng.',
      'Chú trọng bảo vệ nền tảng tư tưởng và định hướng xã hội chủ nghĩa.',
      'Tham gia nghiên cứu, tổng kết thực tiễn đổi mới.',
      'Gắn lý luận chính trị với yêu cầu xây dựng Đảng trong thời kỳ mới.',
    ],
    quotes: [],
    works: [
      {
        title: 'Công tác lý luận chính trị',
        year: 'Thời kỳ đổi mới',
        description:
          'Có nhiều đóng góp trong nghiên cứu lý luận và tổng kết thực tiễn đổi mới.',
      },
      {
        title: 'Công tác tư tưởng của Đảng',
        year: 'Sau 1975',
        description:
          'Gắn với nhiệm vụ củng cố nền tảng tư tưởng và định hướng phát triển đất nước.',
      },
    ],
    influences: ['Chủ nghĩa Mác - Lênin', 'Tư tưởng Hồ Chí Minh', 'Thực tiễn đổi mới'],
    influencedBy: ['Công tác tư tưởng lý luận', 'Xây dựng Đảng trong thời kỳ đổi mới'],
  },
  'pham-van-dong': {
    name: 'Phạm Văn Đồng',
    nameVi: 'Phạm Văn Đồng',
    birthDeath: '1906-2000',
    era: 'Kháng chiến, kiến quốc và xây dựng đất nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/pham-van-dong.jpg',
    imageAlt: 'Chân dung Phạm Văn Đồng',
    imageCaption: 'Phạm Văn Đồng - nhà lãnh đạo cấp cao của Đảng và Nhà nước Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Phạm Văn Đồng là nhà lãnh đạo cấp cao của Đảng và Nhà nước Việt Nam, người học trò gần gũi của Chủ tịch Hồ Chí Minh. Đồng chí có nhiều đóng góp trong công tác Chính phủ, ngoại giao, xây dựng chính quyền cách mạng, kháng chiến kiến quốc và quản lý đất nước sau thống nhất.',
    concepts: [
      'Xây dựng chính quyền cách mạng và tổ chức bộ máy nhà nước sau Cách mạng Tháng Tám.',
      'Kết hợp nhiệm vụ kháng chiến với kiến quốc trong điều kiện đất nước còn nhiều khó khăn.',
      'Đóng góp quan trọng trong hoạt động ngoại giao và quản lý nhà nước.',
      'Gắn bó với tư tưởng Hồ Chí Minh về độc lập dân tộc, đoàn kết và phụng sự nhân dân.',
    ],
    quotes: [],
    works: [
      {
        title: 'Hoạt động trong Chính phủ Việt Nam Dân chủ Cộng hòa',
        year: '1945-1976',
        description:
          'Tham gia xây dựng và điều hành bộ máy nhà nước trong thời kỳ kháng chiến, kiến quốc và xây dựng miền Bắc.',
      },
      {
        title: 'Hoạt động đối ngoại trong kháng chiến',
        year: '1945-1975',
        description:
          'Có nhiều đóng góp trong công tác ngoại giao, tranh thủ sự ủng hộ quốc tế đối với cách mạng Việt Nam.',
      },
      {
        title: 'Quản lý đất nước sau thống nhất',
        year: '1976-1987',
        description:
          'Tiếp tục giữ vai trò quan trọng trong Chính phủ sau khi đất nước thống nhất.',
      },
    ],
    influences: ['Tư tưởng Hồ Chí Minh', 'Đường lối kháng chiến kiến quốc của Đảng'],
    influencedBy: ['Công tác quản lý nhà nước', 'Ngoại giao cách mạng Việt Nam'],
  },

  'ton-duc-thang': {
    name: 'Tôn Đức Thắng',
    nameVi: 'Tôn Đức Thắng',
    birthDeath: '1888-1980',
    era: 'Phong trào công nhân, kháng chiến và xây dựng nhà nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/ton-duc-thang.jpg',
    imageAlt: 'Chân dung Tôn Đức Thắng',
    imageCaption: 'Tôn Đức Thắng - nhà hoạt động cách mạng, Chủ tịch nước Việt Nam Dân chủ Cộng hòa và Cộng hòa xã hội chủ nghĩa Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Tôn Đức Thắng là nhà hoạt động cách mạng tiêu biểu, gắn với phong trào công nhân và sự nghiệp đại đoàn kết dân tộc. Đồng chí có nhiều đóng góp trong kháng chiến, xây dựng Mặt trận dân tộc thống nhất và củng cố Nhà nước Việt Nam sau Cách mạng Tháng Tám.',
    concepts: [
      'Gắn phong trào công nhân Việt Nam với phong trào cách mạng giải phóng dân tộc.',
      'Thể hiện tinh thần đoàn kết quốc tế và đoàn kết dân tộc.',
      'Có vai trò quan trọng trong Mặt trận dân tộc thống nhất.',
      'Góp phần củng cố Nhà nước cách mạng và khối đại đoàn kết toàn dân.',
    ],
    quotes: [],
    works: [
      {
        title: 'Hoạt động trong phong trào công nhân',
        year: 'Trước 1945',
        description:
          'Gắn bó với phong trào công nhân và hoạt động yêu nước trong thời kỳ đấu tranh chống thực dân.',
      },
      {
        title: 'Hoạt động trong Mặt trận dân tộc thống nhất',
        year: '1945-1975',
        description:
          'Góp phần xây dựng khối đoàn kết toàn dân trong kháng chiến và kiến quốc.',
      },
      {
        title: 'Củng cố Nhà nước Việt Nam sau thống nhất',
        year: '1976-1980',
        description:
          'Tiếp tục giữ vai trò biểu tượng đoàn kết trong giai đoạn đầu sau khi đất nước thống nhất.',
      },
    ],
    influences: ['Phong trào công nhân', 'Tư tưởng đại đoàn kết dân tộc'],
    influencedBy: ['Mặt trận dân tộc thống nhất', 'Truyền thống đoàn kết của cách mạng Việt Nam'],
  },

  'pham-hung': {
    name: 'Phạm Hùng',
    nameVi: 'Phạm Hùng',
    birthDeath: '1912-1988',
    era: 'Kháng chiến chống Mỹ và xây dựng đất nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/pham-hung.jpg',
    imageAlt: 'Chân dung Phạm Hùng',
    imageCaption: 'Phạm Hùng - nhà lãnh đạo của Đảng và Nhà nước Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Phạm Hùng là nhà lãnh đạo cách mạng có nhiều đóng góp trong phong trào cách mạng miền Nam, kháng chiến chống Mỹ và công tác lãnh đạo, quản lý đất nước sau thống nhất. Đồng chí gắn với thực tiễn đấu tranh ở Nam Bộ và quá trình xây dựng chính quyền cách mạng.',
    concepts: [
      'Gắn bó với phong trào cách mạng miền Nam và Nam Bộ.',
      'Đóng góp trong tổ chức lực lượng chính trị, quân sự và phong trào quần chúng.',
      'Tham gia lãnh đạo trong giai đoạn kháng chiến chống Mỹ và xây dựng đất nước sau thống nhất.',
      'Thể hiện vai trò của cán bộ lãnh đạo trưởng thành từ thực tiễn đấu tranh cách mạng.',
    ],
    quotes: [],
    works: [
      {
        title: 'Hoạt động cách mạng ở Nam Bộ',
        year: '1945-1975',
        description:
          'Gắn với quá trình lãnh đạo phong trào cách mạng miền Nam trong kháng chiến.',
      },
      {
        title: 'Công tác lãnh đạo sau thống nhất',
        year: 'Sau 1975',
        description:
          'Tiếp tục tham gia lãnh đạo, quản lý nhà nước trong giai đoạn xây dựng đất nước.',
      },
    ],
    influences: ['Thực tiễn cách mạng miền Nam', 'Đường lối kháng chiến chống Mỹ'],
    influencedBy: ['Phong trào cách mạng Nam Bộ', 'Công tác tổ chức và lãnh đạo sau thống nhất'],
  },

  'le-duc-tho': {
    name: 'Lê Đức Thọ',
    nameVi: 'Lê Đức Thọ',
    birthDeath: '1911-1990',
    era: 'Xây dựng Đảng, kháng chiến và ngoại giao',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/le-duc-tho.jpg',
    imageAlt: 'Chân dung Lê Đức Thọ',
    imageCaption: 'Lê Đức Thọ - nhà lãnh đạo của Đảng, nhà hoạt động ngoại giao trong kháng chiến chống Mỹ',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Lê Đức Thọ là nhà lãnh đạo của Đảng, có nhiều đóng góp trong công tác tổ chức, xây dựng Đảng và hoạt động ngoại giao thời kỳ kháng chiến chống Mỹ. Đồng chí gắn với quá trình đàm phán Hiệp định Paris, góp phần tạo điều kiện cho thắng lợi cuối cùng của sự nghiệp giải phóng miền Nam.',
    concepts: [
      'Đóng góp trong công tác tổ chức và xây dựng Đảng.',
      'Tham gia chỉ đạo, xử lý các vấn đề chiến lược trong kháng chiến chống Mỹ.',
      'Gắn với mặt trận ngoại giao, đặc biệt là quá trình đàm phán Paris.',
      'Thể hiện sự kết hợp giữa đấu tranh quân sự, chính trị và ngoại giao.',
    ],
    quotes: [],
    works: [
      {
        title: 'Công tác tổ chức của Đảng',
        year: '1945-1975',
        description:
          'Có nhiều đóng góp trong xây dựng tổ chức, cán bộ và hệ thống lãnh đạo của Đảng.',
      },
      {
        title: 'Đàm phán Paris',
        year: '1968-1973',
        description:
          'Tham gia quá trình đàm phán ngoại giao dẫn tới Hiệp định Paris về Việt Nam.',
      },
    ],
    influences: ['Đường lối kháng chiến chống Mỹ', 'Nghệ thuật ngoại giao cách mạng'],
    influencedBy: ['Công tác xây dựng Đảng', 'Đấu tranh ngoại giao trong kháng chiến chống Mỹ'],
  },

  'nguyen-chi-thanh': {
    name: 'Nguyễn Chí Thanh',
    nameVi: 'Nguyễn Chí Thanh',
    birthDeath: '1914-1967',
    era: 'Kháng chiến và xây dựng lực lượng',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/nguyen-chi-thanh.jpg',
    imageAlt: 'Chân dung Nguyễn Chí Thanh',
    imageCaption: 'Nguyễn Chí Thanh - lãnh đạo quân sự, chính trị của cách mạng Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Nguyễn Chí Thanh là nhà lãnh đạo chính trị, quân sự tiêu biểu, có nhiều đóng góp trong xây dựng lực lượng vũ trang, công tác chính trị trong quân đội và phong trào cách mạng miền Nam. Đồng chí gắn với tinh thần tiến công và quan điểm phát huy sức mạnh chính trị của quần chúng trong chiến tranh cách mạng.',
    concepts: [
      'Chú trọng công tác chính trị, tư tưởng trong lực lượng vũ trang.',
      'Gắn xây dựng quân đội với xây dựng Đảng và phát huy vai trò quần chúng.',
      'Góp phần chỉ đạo phong trào cách mạng miền Nam trong kháng chiến chống Mỹ.',
      'Thể hiện tinh thần chủ động tiến công trong chiến tranh cách mạng.',
    ],
    quotes: [],
    works: [
      {
        title: 'Công tác chính trị trong quân đội',
        year: '1945-1967',
        description:
          'Có nhiều đóng góp trong xây dựng quân đội về chính trị, tư tưởng và tổ chức.',
      },
      {
        title: 'Chỉ đạo chiến trường miền Nam',
        year: '1960s',
        description:
          'Góp phần phát triển đường lối đấu tranh cách mạng ở miền Nam trong kháng chiến chống Mỹ.',
      },
    ],
    influences: ['Đường lối chiến tranh nhân dân', 'Công tác chính trị trong quân đội'],
    influencedBy: ['Xây dựng lực lượng vũ trang nhân dân', 'Phong trào cách mạng miền Nam'],
  },

  'hoang-quoc-viet': {
    name: 'Hoàng Quốc Việt',
    nameVi: 'Hoàng Quốc Việt',
    birthDeath: '1905-1992',
    era: 'Phong trào công nhân, Mặt trận và xây dựng Đảng',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/hoang-quoc-viet.jpg',
    imageAlt: 'Chân dung Hoàng Quốc Việt',
    imageCaption: 'Hoàng Quốc Việt - nhà hoạt động cách mạng, lãnh đạo trong công tác Mặt trận và công đoàn',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Hoàng Quốc Việt là nhà hoạt động cách mạng có nhiều đóng góp trong phong trào công nhân, công tác Mặt trận, công đoàn và xây dựng Đảng. Đồng chí gắn với việc tập hợp lực lượng quần chúng và phát huy vai trò của các tổ chức chính trị - xã hội trong cách mạng Việt Nam.',
    concepts: [
      'Gắn phong trào công nhân với sự lãnh đạo của Đảng.',
      'Chú trọng công tác vận động quần chúng và xây dựng tổ chức chính trị - xã hội.',
      'Đóng góp trong công tác Mặt trận và công đoàn.',
      'Thể hiện vai trò của đoàn kết xã hội trong kháng chiến và xây dựng đất nước.',
    ],
    quotes: [],
    works: [
      {
        title: 'Hoạt động trong phong trào công nhân',
        year: 'Trước và sau 1945',
        description:
          'Gắn với công tác vận động công nhân và tổ chức quần chúng.',
      },
      {
        title: 'Công tác Mặt trận và công đoàn',
        year: '1945-1975',
        description:
          'Góp phần xây dựng khối đoàn kết và phát huy sức mạnh các tổ chức quần chúng.',
      },
    ],
    influences: ['Phong trào công nhân', 'Đường lối đại đoàn kết dân tộc'],
    influencedBy: ['Công tác dân vận', 'Mặt trận và công đoàn Việt Nam'],
  },

  'nguyen-luong-bang': {
    name: 'Nguyễn Lương Bằng',
    nameVi: 'Nguyễn Lương Bằng',
    birthDeath: '1904-1979',
    era: 'Tài chính cách mạng, kháng chiến và xây dựng nhà nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/nguyen-luong-bang.jpg',
    imageAlt: 'Chân dung Nguyễn Lương Bằng',
    imageCaption: 'Nguyễn Lương Bằng - nhà hoạt động cách mạng, cán bộ lãnh đạo của Đảng và Nhà nước',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Nguyễn Lương Bằng là nhà hoạt động cách mạng có nhiều đóng góp trong công tác tài chính, xây dựng chính quyền cách mạng và củng cố bộ máy nhà nước. Đồng chí là tấm gương về đạo đức cách mạng, tinh thần tận tụy và kỷ luật trong hoạt động cách mạng.',
    concepts: [
      'Góp phần xây dựng nền tài chính cách mạng trong điều kiện kháng chiến.',
      'Tham gia củng cố chính quyền cách mạng và bộ máy nhà nước.',
      'Thể hiện phẩm chất đạo đức cách mạng, cần kiệm, liêm chính.',
      'Có vai trò trong công tác tổ chức, kiểm tra và xây dựng Đảng.',
    ],
    quotes: [],
    works: [
      {
        title: 'Công tác tài chính cách mạng',
        year: '1945-1954',
        description:
          'Gắn với nhiệm vụ xây dựng nguồn lực tài chính phục vụ kháng chiến và kiến quốc.',
      },
      {
        title: 'Công tác lãnh đạo trong Nhà nước',
        year: 'Sau 1954',
        description:
          'Tham gia nhiều nhiệm vụ lãnh đạo trong bộ máy Đảng và Nhà nước.',
      },
    ],
    influences: ['Tư tưởng đạo đức cách mạng Hồ Chí Minh', 'Yêu cầu xây dựng chính quyền cách mạng'],
    influencedBy: ['Công tác tài chính cách mạng', 'Xây dựng đạo đức cán bộ'],
  },

  'van-tien-dung': {
    name: 'Văn Tiến Dũng',
    nameVi: 'Văn Tiến Dũng',
    birthDeath: '1917-2002',
    era: 'Kháng chiến chống Pháp, chống Mỹ và thống nhất đất nước',
    school: 'Giai đoạn 1945-1975',
    imageUrl: '/people/van-tien-dung.jpg',
    imageAlt: 'Chân dung Văn Tiến Dũng',
    imageCaption: 'Văn Tiến Dũng - Đại tướng, nhà lãnh đạo quân sự của Quân đội nhân dân Việt Nam',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Đại tướng Văn Tiến Dũng là nhà lãnh đạo quân sự tiêu biểu của Quân đội nhân dân Việt Nam. Đồng chí tham gia lãnh đạo, chỉ huy nhiều nhiệm vụ quân sự quan trọng, đặc biệt gắn với giai đoạn cuối của cuộc kháng chiến chống Mỹ và Đại thắng mùa Xuân năm 1975.',
    concepts: [
      'Góp phần phát triển nghệ thuật chỉ đạo chiến dịch trong chiến tranh nhân dân.',
      'Tham gia lãnh đạo quân sự trong giai đoạn quyết định của kháng chiến chống Mỹ.',
      'Gắn với quá trình tổ chức và chỉ huy chiến dịch trong Tổng tiến công mùa Xuân 1975.',
      'Thể hiện vai trò của Bộ Tổng tham mưu và chỉ đạo chiến lược quân sự.',
    ],
    quotes: [],
    works: [
      {
        title: 'Chỉ đạo quân sự trong kháng chiến chống Mỹ',
        year: '1954-1975',
        description:
          'Tham gia nhiều nhiệm vụ lãnh đạo, chỉ huy quân sự trong cuộc kháng chiến chống Mỹ.',
      },
      {
        title: 'Đại thắng mùa Xuân năm 1975',
        year: '1975',
        description:
          'Gắn với quá trình chỉ đạo chiến dịch trong giai đoạn quyết định giải phóng miền Nam.',
      },
    ],
    influences: ['Đường lối chiến tranh nhân dân', 'Nghệ thuật quân sự Việt Nam'],
    influencedBy: ['Chỉ đạo chiến lược quân sự', 'Tổng tiến công và nổi dậy mùa Xuân 1975'],
  },

  'vo-van-kiet': {
    name: 'Võ Văn Kiệt',
    nameVi: 'Võ Văn Kiệt',
    birthDeath: '1922-2008',
    era: 'Kháng chiến, đổi mới và phát triển đất nước',
    school: 'Giai đoạn từ 1975',
    imageUrl: '/people/vo-van-kiet.jpg',
    imageAlt: 'Chân dung Võ Văn Kiệt',
    imageCaption: 'Võ Văn Kiệt - nhà lãnh đạo gắn với công cuộc đổi mới và phát triển đất nước',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Võ Văn Kiệt là nhà lãnh đạo có tư duy đổi mới mạnh mẽ, trưởng thành từ thực tiễn cách mạng miền Nam và có nhiều đóng góp trong phát triển kinh tế - xã hội sau thống nhất. Đồng chí gắn với tinh thần đổi mới, dám nghĩ, dám làm, thúc đẩy hạ tầng, mở cửa và hội nhập.',
    concepts: [
      'Gắn đổi mới với thực tiễn đời sống nhân dân và yêu cầu phát triển đất nước.',
      'Thúc đẩy tư duy quản lý năng động, tháo gỡ cơ chế cũ và khuyến khích sản xuất.',
      'Quan tâm phát triển hạ tầng, năng lượng và kết nối vùng.',
      'Kết hợp ổn định chính trị với phát triển kinh tế và mở rộng quan hệ đối ngoại.',
    ],
    quotes: [],
    works: [
      {
        title: 'Thúc đẩy đổi mới kinh tế - xã hội',
        year: 'Sau 1986',
        description:
          'Gắn với nhiều quyết sách và công trình phát triển trong giai đoạn đầu đổi mới.',
      },
      {
        title: 'Phát triển hạ tầng và kết nối vùng',
        year: '1990s',
        description:
          'Quan tâm thúc đẩy các dự án hạ tầng, năng lượng và phát triển kinh tế vùng.',
      },
    ],
    influences: ['Thực tiễn Nam Bộ', 'Đường lối đổi mới của Đảng'],
    influencedBy: ['Tư duy quản lý đổi mới', 'Phát triển kinh tế - xã hội sau 1986'],
  },

  'do-muoi': {
    name: 'Đỗ Mười',
    nameVi: 'Đỗ Mười',
    birthDeath: '1917-2018',
    era: 'Đổi mới và xây dựng Đảng',
    school: 'Giai đoạn từ 1975',
    imageUrl: '/people/do-muoi.jpg',
    imageAlt: 'Chân dung Đỗ Mười',
    imageCaption: 'Đỗ Mười - Tổng Bí thư của Đảng trong thời kỳ đầu đổi mới',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Đỗ Mười là Tổng Bí thư của Đảng trong giai đoạn đầu đổi mới, có vai trò trong quá trình tiếp tục thể chế hóa và triển khai đường lối đổi mới sau Đại hội VI. Đồng chí gắn với nhiệm vụ ổn định kinh tế - xã hội, xây dựng Đảng và hoàn thiện nhận thức về con đường phát triển đất nước.',
    concepts: [
      'Tiếp tục triển khai và củng cố đường lối đổi mới.',
      'Chú trọng ổn định kinh tế - xã hội trong giai đoạn chuyển đổi cơ chế.',
      'Góp phần xây dựng Đảng và củng cố hệ thống chính trị.',
      'Gắn đổi mới kinh tế với định hướng xã hội chủ nghĩa và vai trò quản lý của Nhà nước.',
    ],
    quotes: [],
    works: [
      {
        title: 'Lãnh đạo trong thời kỳ đầu đổi mới',
        year: '1991-1997',
        description:
          'Gắn với quá trình tiếp tục triển khai đường lối đổi mới sau Đại hội VI và Đại hội VII.',
      },
      {
        title: 'Xây dựng Đảng và ổn định kinh tế - xã hội',
        year: '1990s',
        description:
          'Chú trọng củng cố hệ thống chính trị, ổn định xã hội và phát triển kinh tế trong giai đoạn chuyển đổi.',
      },
    ],
    influences: ['Đường lối đổi mới', 'Yêu cầu ổn định và phát triển sau khủng hoảng kinh tế - xã hội'],
    influencedBy: ['Xây dựng Đảng thời kỳ đổi mới', 'Hoàn thiện cơ chế quản lý kinh tế'],
  },

  'nguyen-duc-binh': {
    name: 'Nguyễn Đức Bình',
    nameVi: 'Nguyễn Đức Bình',
    birthDeath: '1927-2019',
    era: 'Lý luận chính trị và xây dựng Đảng',
    school: 'Giai đoạn từ 1975',
    imageUrl: '/people/nguyen-duc-binh.jpg',
    imageAlt: 'Chân dung Nguyễn Đức Bình',
    imageCaption: 'Nguyễn Đức Bình - nhà lý luận chính trị, nhà lãnh đạo công tác tư tưởng của Đảng',
    imageSource: 'Tư liệu - Văn kiện Đảng',
    imageSourceUrl: 'https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc',
    summary:
      'Nguyễn Đức Bình là nhà lý luận chính trị, có nhiều đóng góp trong công tác tư tưởng, lý luận và xây dựng Đảng thời kỳ đổi mới. Đồng chí gắn với việc nghiên cứu, bảo vệ và phát triển nền tảng tư tưởng của Đảng trong bối cảnh đất nước chuyển sang thời kỳ đổi mới.',
    concepts: [
      'Góp phần vào công tác tư tưởng, lý luận của Đảng.',
      'Chú trọng bảo vệ nền tảng tư tưởng và định hướng xã hội chủ nghĩa.',
      'Tham gia nghiên cứu, tổng kết thực tiễn đổi mới.',
      'Gắn lý luận chính trị với yêu cầu xây dựng Đảng trong thời kỳ mới.',
    ],
    quotes: [],
    works: [
      {
        title: 'Công tác lý luận chính trị',
        year: 'Thời kỳ đổi mới',
        description:
          'Có nhiều đóng góp trong nghiên cứu lý luận và tổng kết thực tiễn đổi mới.',
      },
      {
        title: 'Công tác tư tưởng của Đảng',
        year: 'Sau 1975',
        description:
          'Gắn với nhiệm vụ củng cố nền tảng tư tưởng và định hướng phát triển đất nước.',
      },
    ],
    influences: ['Chủ nghĩa Mác - Lênin', 'Tư tưởng Hồ Chí Minh', 'Thực tiễn đổi mới'],
    influencedBy: ['Công tác tư tưởng lý luận', 'Xây dựng Đảng trong thời kỳ đổi mới'],
  }
};

export const TIMELINE = [
  { year: '3/2/1930', event: 'Đảng Cộng sản Việt Nam ra đời', philosopher: 'Hồ Chí Minh', era: '1930-1945' },
  { year: '10/1930', event: 'Hội nghị Trung ương thông qua Luận cương chính trị', philosopher: 'Trần Phú', era: '1930-1945' },
  { year: '1930-1931', event: 'Cao trào cách mạng và Xô viết Nghệ - Tĩnh', philosopher: 'Đảng Cộng sản Đông Dương', era: '1930-1945' },
  { year: '1936-1939', event: 'Cuộc vận động dân chủ, dân sinh', philosopher: 'Đảng Cộng sản Đông Dương', era: '1930-1945' },
  { year: '5/1941', event: 'Hội nghị Trung ương 8 hoàn chỉnh chuyển hướng chiến lược', philosopher: 'Hồ Chí Minh', era: '1930-1945' },
  { year: '8/1945', event: 'Cách mạng Tháng Tám thành công', philosopher: 'Đảng Cộng sản Đông Dương', era: '1930-1945' },
  { year: '2/9/1945', event: 'Nước Việt Nam Dân chủ Cộng hòa ra đời', philosopher: 'Hồ Chí Minh', era: '1930-1945' },
  { year: '19/12/1946', event: 'Toàn quốc kháng chiến chống thực dân Pháp', philosopher: 'Đảng và Chủ tịch Hồ Chí Minh', era: '1945-1975' },
  { year: '1951', event: 'Đại hội II của Đảng, thành lập Đảng Lao động Việt Nam', philosopher: 'Đảng Lao động Việt Nam', era: '1945-1975' },
  { year: '7/5/1954', event: 'Chiến thắng Điện Biên Phủ', philosopher: 'Võ Nguyên Giáp', era: '1945-1975' },
  { year: '7/1954', event: 'Hiệp định Genève về Đông Dương được ký kết', philosopher: 'Đoàn đại biểu Việt Nam', era: '1945-1975' },
  { year: '1960', event: 'Đại hội III xác định đường lối cách mạng hai miền', philosopher: 'Đảng Lao động Việt Nam', era: '1945-1975' },
  { year: '1968', event: 'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân', philosopher: 'Đảng Lao động Việt Nam', era: '1945-1975' },
  { year: '27/1/1973', event: 'Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam', philosopher: 'Đoàn đại biểu Việt Nam', era: '1945-1975' },
  { year: '30/4/1975', event: 'Giải phóng miền Nam, thống nhất đất nước', philosopher: 'Đảng Lao động Việt Nam', era: '1945-1975' },
  { year: '12/1976', event: 'Đại hội IV, Đảng mang tên Đảng Cộng sản Việt Nam', philosopher: 'Đảng Cộng sản Việt Nam', era: 'Từ 1975' },
  { year: '12/1986', event: 'Đại hội VI khởi xướng công cuộc đổi mới', philosopher: 'Nguyễn Văn Linh', era: 'Từ 1975' },
  { year: '1991', event: 'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội', philosopher: 'Đảng Cộng sản Việt Nam', era: 'Từ 1975' },
  { year: '2007', event: 'Việt Nam gia nhập Tổ chức Thương mại Thế giới', philosopher: 'Đảng và Nhà nước Việt Nam', era: 'Từ 1975' },
  { year: '2011', event: 'Thông qua Cương lĩnh bổ sung, phát triển năm 2011', philosopher: 'Đảng Cộng sản Việt Nam', era: 'Từ 1975' }
];

export const SCHOOLS_DETAIL = {
  'Giai đoạn 1930-1945': {
    name: 'Đảng ra đời và giành chính quyền',
    era: '1930-1945',
    description: 'Đảng ra đời, từng bước hoàn chỉnh đường lối giải phóng dân tộc, xây dựng lực lượng và lãnh đạo Cách mạng Tháng Tám thành công.',
    keyIdeas: ['Thành lập Đảng', 'Giải phóng dân tộc', 'Cách mạng Tháng Tám'],
    philosophers: ['Hồ Chí Minh', 'Trần Phú', 'Lê Hồng Phong', 'Nguyễn Văn Cừ'],
    icon: '\u2605'
  },
  'Giai đoạn 1945-1975': {
    name: 'Kháng chiến và thống nhất đất nước',
    era: '1945-1975',
    description: 'Đảng lãnh đạo bảo vệ chính quyền cách mạng, tiến hành hai cuộc kháng chiến và hoàn thành giải phóng miền Nam, thống nhất đất nước.',
    keyIdeas: ['Kháng chiến kiến quốc', 'Chiến tranh nhân dân', 'Thống nhất đất nước'],
    philosophers: [
      'Hồ Chí Minh',
      'Trường Chinh',
      'Võ Nguyên Giáp',
      'Lê Duẩn',
      'Phạm Văn Đồng',
      'Tôn Đức Thắng',
      'Phạm Hùng',
      'Lê Đức Thọ',
      'Nguyễn Chí Thanh',
      'Hoàng Quốc Việt',
      'Nguyễn Lương Bằng',
      'Văn Tiến Dũng'
    ],
    icon: '\u2691'
  },
  'Giai đoạn từ 1975': {
    name: 'Xây dựng đất nước và đổi mới',
    era: 'Từ 1975',
    description: 'Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội, khởi xướng đổi mới, phát triển kinh tế thị trường định hướng xã hội chủ nghĩa và hội nhập quốc tế.',
    keyIdeas: ['Thống nhất về nhà nước', 'Đổi mới', 'Hội nhập quốc tế'],
    philosophers: [
      'Trường Chinh',
      'Nguyễn Văn Linh',
      'Phạm Văn Đồng',
      'Tôn Đức Thắng',
      'Phạm Hùng',
      'Võ Văn Kiệt',
      'Đỗ Mười',
      'Nguyễn Đức Bình'
    ],
    icon: '\u{1F4C8}'
  }
};

export const SCHOOLS = Object.fromEntries(
  Object.values(SCHOOLS_DETAIL).map((period) => [period.name.toLowerCase(), period.description])
);

export const CONCEPT_DETAILS = {
  'cuong-linh-chinh-tri-dau-tien': { title: 'Cương lĩnh chính trị đầu tiên', school: '1930-1945', description: 'Các văn kiện do Nguyễn Ái Quốc soạn thảo và được Hội nghị thành lập Đảng thông qua đầu năm 1930. Cương lĩnh xác định nhiệm vụ chống đế quốc và phong kiến, giành độc lập dân tộc, đồng thời nêu lực lượng và phương pháp cách mạng.' },
  'luan-cuong-chinh-tri-1930': { title: 'Luận cương chính trị tháng 10/1930', school: '1930-1945', description: 'Văn kiện do Trần Phú khởi thảo, nhấn mạnh vai trò lãnh đạo của Đảng và liên minh công nhân - nông dân. Luận cương có đóng góp về lý luận nhưng chưa đánh giá đầy đủ vấn đề dân tộc và khả năng tập hợp các lực lượng yêu nước.' },
  'xo-viet-nghe-tinh': { title: 'Xô viết Nghệ - Tĩnh', school: '1930-1945', description: 'Đỉnh cao của cao trào cách mạng 1930-1931. Phong trào thể hiện năng lực lãnh đạo của Đảng, sức mạnh công - nông và hình thức chính quyền cách mạng sơ khai ở một số địa phương.' },
  'mat-tran-viet-minh': { title: 'Mặt trận Việt Minh', school: '1930-1945', description: 'Mặt trận Việt Nam Độc lập Đồng minh được thành lập năm 1941 nhằm tập hợp rộng rãi lực lượng yêu nước, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.' },
  'cach-mang-thang-tam': { title: 'Cách mạng Tháng Tám năm 1945', school: '1930-1945', description: 'Cuộc tổng khởi nghĩa giành chính quyền trong cả nước. Thắng lợi là kết quả của đường lối đúng, quá trình chuẩn bị lực lượng lâu dài và nghệ thuật chớp thời cơ của Đảng.' },
  'khang-chien-toan-dan': { title: 'Kháng chiến toàn dân, toàn diện', school: '1945-1975', description: 'Đường lối huy động mọi người dân tham gia và tiến hành đấu tranh trên các mặt quân sự, chính trị, kinh tế, văn hóa, ngoại giao. Kháng chiến trường kỳ, dựa vào sức mình là chính và tranh thủ sự ủng hộ quốc tế.' },
  'chien-tranh-nhan-dan': { title: 'Chiến tranh nhân dân', school: '1945-1975', description: 'Phương thức chiến tranh phát huy sức mạnh toàn dân, kết hợp lực lượng chính trị với lực lượng vũ trang, kết hợp ba thứ quân và phối hợp các vùng chiến lược.' },
  'dien-bien-phu': { title: 'Chiến thắng Điện Biên Phủ', school: '1945-1975', description: 'Thắng lợi ngày 7/5/1954 đập tan tập đoàn cứ điểm Điện Biên Phủ, làm phá sản Kế hoạch Nava và tạo cơ sở quan trọng cho đấu tranh ngoại giao tại Hội nghị Genève.' },
  'duong-loi-cach-mang-hai-mien': { title: 'Đường lối cách mạng hai miền', school: '1945-1975', description: 'Đại hội III năm 1960 xác định miền Bắc tiến hành cách mạng xã hội chủ nghĩa và giữ vai trò quyết định nhất; cách mạng miền Nam giữ vai trò quyết định trực tiếp đối với giải phóng miền Nam.' },
  'dau-tranh-ba-mat-tran': { title: 'Kết hợp quân sự, chính trị và ngoại giao', school: '1945-1975', description: 'Đảng phối hợp ba mặt trận để tạo và chuyển hóa thế mạnh. Thắng lợi quân sự và chính trị trên chiến trường tạo vị thế cho đàm phán, còn ngoại giao ghi nhận kết quả bằng cam kết pháp lý.' },
  'dai-thang-mua-xuan-1975': { title: 'Đại thắng mùa Xuân năm 1975', school: '1945-1975', description: 'Đỉnh cao là Chiến dịch Hồ Chí Minh, kết thúc thắng lợi cuộc kháng chiến chống Mỹ, giải phóng miền Nam và mở ra thời kỳ cả nước độc lập, thống nhất.' },
  'doi-moi-1986': { title: 'Đường lối đổi mới năm 1986', school: 'Từ 1975', description: 'Đại hội VI khởi xướng đổi mới toàn diện, trước hết là đổi mới tư duy kinh tế. Đường lối xuất phát từ thực tiễn, tôn trọng quy luật khách quan và hướng đến nâng cao đời sống nhân dân.' },
  'kinh-te-thi-truong-dinh-huong-xhcn': { title: 'Kinh tế thị trường định hướng xã hội chủ nghĩa', school: 'Từ 1975', description: 'Mô hình kinh tế tổng quát trong thời kỳ quá độ ở Việt Nam. Nền kinh tế vận hành theo quy luật thị trường, có sự quản lý của Nhà nước và hướng đến mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.' },
  'cong-nghiep-hoa-hien-dai-hoa': { title: 'Công nghiệp hóa, hiện đại hóa', school: 'Từ 1975', description: 'Quá trình chuyển đổi căn bản hoạt động sản xuất và quản lý dựa trên khoa học, công nghệ và năng suất cao. Đảng xác định đây là nhiệm vụ trung tâm trong phát triển đất nước.' },
  'hoi-nhap-quoc-te': { title: 'Hội nhập quốc tế', school: 'Từ 1975', description: 'Chủ trương chủ động tham gia sâu rộng vào đời sống quốc tế, kết hợp sức mạnh dân tộc với sức mạnh thời đại, đồng thời giữ vững độc lập, tự chủ và lợi ích quốc gia - dân tộc.' }
};

export const CONCEPTS = Object.fromEntries(
  Object.entries(CONCEPT_DETAILS).map(([slug, detail]) => [slug, detail.description])
);

const normalize = (value = '') =>
  value
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^\w\s/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const tokenize = (value = '') =>
  normalize(value)
    .split(' ')
    .filter((token) => token.length >= 2);

const hasAny = (text, keywords = []) =>
  keywords.some((keyword) => text.includes(normalize(keyword)));

const hasAllImportantWords = (text, value = '') => {
  const tokens = tokenize(value).filter((token) => token.length >= 3);

  if (!tokens.length) return false;

  return tokens.every((token) => text.includes(token));
};

const formatBulletList = (items = []) => {
  if (!items.length) return '- Chưa có dữ liệu chi tiết trong hệ thống.';

  return items.map((item) => `- ${item}`).join('\n');
};

const formatTimelineItems = (items = []) => {
  if (!items.length) return '- Chưa có mốc thời gian phù hợp trong dữ liệu.';

  return items.map((item) => `- **${item.year}:** ${item.event}`).join('\n');
};

const INTENT_KEYWORDS = {
  event: [
    'su kien',
    'moc',
    'moc thoi gian',
    'dien ra',
    'xay ra',
    'co gi',
    'nam nao',
    'thoi gian',
    'giai doan nao',
  ],
  meaning: [
    'y nghia',
    'vai tro',
    'vi sao',
    'tai sao',
    'nguyen nhan',
    'ket qua',
    'bai hoc',
    'tac dong',
  ],
  definition: [
    'la gi',
    'la nhu the nao',
    'noi dung',
    'tom tat',
    'trinh bay',
    'phan tich',
    'khai niem',
  ],
  compare: [
    'so sanh',
    'khac nhau',
    'giong nhau',
    'phan biet',
    'diem giong',
    'diem khac',
  ],
};

function detectIntent(normalizedQuery) {
  if (hasAny(normalizedQuery, INTENT_KEYWORDS.compare)) return 'compare';
  if (hasAny(normalizedQuery, INTENT_KEYWORDS.event)) return 'event';
  if (hasAny(normalizedQuery, INTENT_KEYWORDS.meaning)) return 'meaning';
  if (hasAny(normalizedQuery, INTENT_KEYWORDS.definition)) return 'definition';

  return 'general';
}

const PERIODS = [
  {
    id: '1930-1945',
    title: 'Giai đoạn 1930-1945: Đảng ra đời và lãnh đạo giành chính quyền',
    aliases: [
      '1930-1945',
      '1930 1945',
      '1930 den 1945',
      '1930 đến 1945',
      'giai doan 1930',
      'giai đoạn 1930',
      'dang ra doi',
      'đảng ra đời',
      'gianh chinh quyen',
      'giành chính quyền',
      'cach mang thang tam',
      'cách mạng tháng tám',
      'tong khoi nghia',
      'tổng khởi nghĩa',
      'truoc 1945',
      'trước 1945',
    ],
    summary:
      'Đây là giai đoạn Đảng Cộng sản Việt Nam ra đời, xác lập đường lối cách mạng, trải qua các cao trào đấu tranh, chuyển hướng chiến lược giải phóng dân tộc và lãnh đạo Cách mạng Tháng Tám năm 1945.',
    keyPoints: [
      'Đảng Cộng sản Việt Nam ra đời đầu năm 1930.',
      'Cương lĩnh chính trị đầu tiên xác định nhiệm vụ giải phóng dân tộc.',
      'Cao trào 1930-1931 và Xô viết Nghệ - Tĩnh khẳng định vai trò lãnh đạo của Đảng.',
      'Phong trào dân chủ 1936-1939 mở rộng lực lượng chính trị của quần chúng.',
      'Từ 1939, Đảng chuyển hướng chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.',
      'Hội nghị Trung ương 8 năm 1941 hoàn chỉnh chủ trương giải phóng dân tộc.',
      'Cách mạng Tháng Tám năm 1945 giành chính quyền trong cả nước.',
    ],
  },
  {
    id: '1945-1975',
    title: 'Giai đoạn 1945-1975: Kháng chiến và thống nhất đất nước',
    aliases: [
      '1945-1975',
      '1945 1975',
      '1945 den 1975',
      '1945 đến 1975',
      'khang chien chong phap',
      'kháng chiến chống pháp',
      'khang chien chong my',
      'kháng chiến chống mỹ',
      'dien bien phu',
      'điện biên phủ',
      'giai phong mien nam',
      'giải phóng miền nam',
      'thong nhat dat nuoc',
      'thống nhất đất nước',
      'mua xuan 1975',
      'mùa xuân 1975',
    ],
    summary:
      'Đây là giai đoạn Đảng lãnh đạo nhân dân bảo vệ chính quyền cách mạng, tiến hành kháng chiến chống thực dân Pháp, xây dựng miền Bắc, đấu tranh giải phóng miền Nam và thống nhất đất nước.',
    keyPoints: [
      'Bảo vệ chính quyền cách mạng sau Cách mạng Tháng Tám.',
      'Toàn quốc kháng chiến chống thực dân Pháp từ cuối năm 1946.',
      'Chiến thắng Điện Biên Phủ năm 1954 tạo cơ sở cho Hiệp định Genève.',
      'Đại hội III năm 1960 xác định đường lối cách mạng hai miền.',
      'Kết hợp đấu tranh quân sự, chính trị và ngoại giao trong kháng chiến chống Mỹ.',
      'Đại thắng mùa Xuân năm 1975 giải phóng miền Nam, thống nhất đất nước.',
    ],
  },
  {
    id: 'Từ 1975',
    title: 'Giai đoạn từ 1975: Xây dựng đất nước, đổi mới và hội nhập',
    aliases: [
      'tu 1975',
      'từ 1975',
      'sau 1975',
      'sau nam 1975',
      'doi moi',
      'đổi mới',
      'dai hoi vi',
      'đại hội vi',
      'dai hoi 6',
      'đại hội 6',
      '1986',
      'hoi nhap',
      'hội nhập',
      'kinh te thi truong',
      'kinh tế thị trường',
      'cong nghiep hoa',
      'công nghiệp hóa',
    ],
    summary:
      'Đây là giai đoạn cả nước thống nhất đi lên chủ nghĩa xã hội, khắc phục khó khăn sau chiến tranh, khởi xướng công cuộc đổi mới từ Đại hội VI năm 1986 và từng bước hội nhập quốc tế.',
    keyPoints: [
      'Sau 1975, cả nước bước vào thời kỳ xây dựng và bảo vệ Tổ quốc trong điều kiện mới.',
      'Đại hội VI năm 1986 khởi xướng đường lối đổi mới toàn diện.',
      'Đổi mới trước hết là đổi mới tư duy kinh tế.',
      'Từng bước hình thành nhận thức về kinh tế thị trường định hướng xã hội chủ nghĩa.',
      'Đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.',
    ],
  },
];

const CONCEPT_ALIASES = {
  'cuong-linh-chinh-tri-dau-tien': [
    'cuong linh',
    'cương lĩnh',
    'cuong linh dau tien',
    'cương lĩnh đầu tiên',
    'chanh cuong van tat',
    'chánh cương vắn tắt',
    'sach luoc van tat',
    'sách lược vắn tắt',
    'hoi nghi thanh lap dang',
    'hội nghị thành lập đảng',
  ],
  'luan-cuong-chinh-tri-1930': [
    'luan cuong',
    'luận cương',
    'luan cuong 1930',
    'luận cương 1930',
    'luan cuong chinh tri',
    'luận cương chính trị',
    'tran phu',
    'trần phú',
  ],
  'xo-viet-nghe-tinh': [
    'xo viet nghe tinh',
    'xô viết nghệ tĩnh',
    'nghe tinh',
    'nghệ tĩnh',
    'cao trao 1930',
    'cao trào 1930',
    '1930-1931',
    '1930 1931',
  ],
  'mat-tran-viet-minh': [
    'viet minh',
    'việt minh',
    'mat tran viet minh',
    'mặt trận việt minh',
    'viet nam doc lap dong minh',
    'việt nam độc lập đồng minh',
  ],
  'cach-mang-thang-tam': [
    'cach mang thang tam',
    'cách mạng tháng tám',
    'cach mang thang 8',
    'cách mạng tháng 8',
    'tong khoi nghia thang tam',
    'tổng khởi nghĩa tháng tám',
    'tong khoi nghia thang 8',
    'tổng khởi nghĩa tháng 8',
    'tong khoi nghia 1945',
    'tổng khởi nghĩa 1945',
    'thang tam 1945',
    'tháng tám 1945',
    'thang 8 1945',
    'tháng 8 1945',
    'gianh chinh quyen 1945',
    'giành chính quyền 1945',
  ],
  'khang-chien-toan-dan': [
    'khang chien toan dan',
    'kháng chiến toàn dân',
    'khang chien toan dien',
    'kháng chiến toàn diện',
    'toan dan toan dien',
    'toàn dân toàn diện',
    'truong ky',
    'trường kỳ',
    'tu luc canh sinh',
    'tự lực cánh sinh',
  ],
  'chien-tranh-nhan-dan': [
    'chien tranh nhan dan',
    'chiến tranh nhân dân',
    'du kich',
    'du kích',
    'ba thu quan',
    'ba thứ quân',
    'luc luong vu trang',
    'lực lượng vũ trang',
  ],
  'dien-bien-phu': [
    'dien bien phu',
    'điện biên phủ',
    '7/5/1954',
    '7 5 1954',
    'ke hoach nava',
    'kế hoạch nava',
    'danh chac tien chac',
    'đánh chắc tiến chắc',
  ],
  'duong-loi-cach-mang-hai-mien': [
    'duong loi cach mang hai mien',
    'đường lối cách mạng hai miền',
    'cach mang hai mien',
    'cách mạng hai miền',
    'dai hoi iii',
    'đại hội iii',
    'dai hoi 3',
    'đại hội 3',
    'mien bac',
    'miền bắc',
    'mien nam',
    'miền nam',
  ],
  'dau-tranh-ba-mat-tran': [
    'ba mat tran',
    'ba mặt trận',
    'quan su chinh tri ngoai giao',
    'quân sự chính trị ngoại giao',
    'ket hop quan su chinh tri ngoai giao',
    'kết hợp quân sự chính trị ngoại giao',
    'hiep dinh paris',
    'hiệp định paris',
  ],
  'dai-thang-mua-xuan-1975': [
    'dai thang mua xuan',
    'đại thắng mùa xuân',
    'mua xuan 1975',
    'mùa xuân 1975',
    '30/4/1975',
    '30 4 1975',
    'chien dich ho chi minh',
    'chiến dịch hồ chí minh',
    'giai phong mien nam',
    'giải phóng miền nam',
  ],
  'doi-moi-1986': [
    'doi moi',
    'đổi mới',
    'doi moi 1986',
    'đổi mới 1986',
    'dai hoi vi',
    'đại hội vi',
    'dai hoi 6',
    'đại hội 6',
    'nhin thang vao su that',
    'nhìn thẳng vào sự thật',
  ],
  'kinh-te-thi-truong-dinh-huong-xhcn': [
    'kinh te thi truong',
    'kinh tế thị trường',
    'dinh huong xa hoi chu nghia',
    'định hướng xã hội chủ nghĩa',
    'kinh te thi truong dinh huong xa hoi chu nghia',
    'kinh tế thị trường định hướng xã hội chủ nghĩa',
  ],
  'cong-nghiep-hoa-hien-dai-hoa': [
    'cong nghiep hoa',
    'công nghiệp hóa',
    'hien dai hoa',
    'hiện đại hóa',
    'cong nghiep hoa hien dai hoa',
    'công nghiệp hóa hiện đại hóa',
  ],
  'hoi-nhap-quoc-te': [
    'hoi nhap',
    'hội nhập',
    'hoi nhap quoc te',
    'hội nhập quốc tế',
    'doi ngoai',
    'đối ngoại',
    'wto',
  ],
};

function findPeriod(normalizedQuery) {
  return PERIODS.find((period) =>
    period.aliases.some((alias) => normalizedQuery.includes(normalize(alias)))
  );
}

function getTimelineForPeriod(periodId) {
  return TIMELINE.filter((item) =>
    normalize(item.era).includes(normalize(periodId))
  );
}

function findPerson(normalizedQuery) {
  for (const [slug, person] of Object.entries(PHILOSOPHERS)) {
    const names = [person.name, person.nameVi, slug]
      .filter(Boolean)
      .map(normalize);

    if (names.some((name) => normalizedQuery.includes(name))) {
      return { slug, person };
    }
  }

  return null;
}

function findConcept(normalizedQuery) {
  for (const [slug, detail] of Object.entries(CONCEPT_DETAILS)) {
    const titleMatch =
      normalizedQuery.includes(normalize(detail.title)) ||
      hasAllImportantWords(normalizedQuery, detail.title);

    const aliasMatch = (CONCEPT_ALIASES[slug] || []).some((alias) =>
      normalizedQuery.includes(normalize(alias))
    );

    if (titleMatch || aliasMatch) {
      return { slug, detail };
    }
  }

  return null;
}

function buildPeriodResponse(period, intent) {
  const events = getTimelineForPeriod(period.id);

  if (intent === 'event') {
    return {
      content:
        `**${period.title}** có các mốc nổi bật sau:\n\n` +
        `${formatTimelineItems(events)}\n\n` +
        `**Ý chính cần nhớ:**\n${formatBulletList(period.keyPoints)}\n\n` +
        'Bạn có thể hỏi tiếp một mốc cụ thể, ví dụ: “Cách mạng Tháng Tám là gì?” hoặc “Hội nghị Trung ương 8 năm 1941 có ý nghĩa gì?”.',
      topicDetected: period.id,
      rejected: false,
    };
  }

  return {
    content:
      `**${period.title}**\n\n${period.summary}\n\n` +
      `**Ý chính cần nắm:**\n${formatBulletList(period.keyPoints)}\n\n` +
      `**Một số mốc tiêu biểu:**\n${formatTimelineItems(events.slice(0, 6))}`,
    topicDetected: period.id,
    rejected: false,
  };
}

function buildConceptResponse(slug, detail, intent) {
  const relatedEvents = TIMELINE.filter((item) =>
    normalize(item.era).includes(normalize(detail.school))
  ).slice(0, 6);

  if (intent === 'event') {
    return {
      content:
        `**${detail.title}** thuộc giai đoạn **${detail.school}**.\n\n` +
        `${detail.description}\n\n` +
        `**Một số mốc liên quan:**\n${formatTimelineItems(relatedEvents)}`,
      topicDetected: detail.title,
      rejected: false,
    };
  }

  if (intent === 'meaning') {
    return {
      content:
        `**${detail.title}**\n\n${detail.description}\n\n` +
        `**Ý nghĩa / vai trò khi học:**\n` +
        '- Giúp nhận diện đường lối, nhiệm vụ hoặc phương pháp cách mạng trong từng giai đoạn.\n' +
        '- Là điểm kiến thức thường dùng để liên hệ với sự kiện, nhân vật và văn kiện cùng thời kỳ.\n' +
        '- Khi ôn thi, nên nắm bối cảnh ra đời, nội dung chính và ý nghĩa lịch sử.\n\n' +
        `*Giai đoạn: ${detail.school}*`,
      topicDetected: detail.title,
      rejected: false,
    };
  }

  return {
    content:
      `**${detail.title}**\n\n${detail.description}\n\n` +
      `**Cách học nhanh:**\n` +
      '- Ghi nhớ bối cảnh xuất hiện.\n' +
      '- Nắm nội dung trọng tâm.\n' +
      '- Liên hệ với nhân vật, văn kiện và sự kiện cùng giai đoạn.\n\n' +
      `*Giai đoạn: ${detail.school}*`,
    topicDetected: detail.title,
    rejected: false,
  };
}

function buildPersonResponse(person) {
  const works = (person.works || []).map((work) =>
    work.year
      ? `${work.title} (${work.year}): ${work.description}`
      : `${work.title}: ${work.description}`
  );

  return {
    content:
      `**${person.name} (${person.birthDeath})**\n\n${person.summary}\n\n` +
      `**Đóng góp nổi bật:**\n${formatBulletList(person.concepts)}\n\n` +
      `**Tác phẩm / hoạt động liên quan:**\n${formatBulletList(works)}`,
    topicDetected: person.name,
    rejected: false,
  };
}

function buildCompareResponse(normalizedQuery) {
  const asksCuongLinh = hasAny(normalizedQuery, ['cuong linh', 'chanh cuong']);
  const asksLuanCuong = hasAny(normalizedQuery, ['luan cuong']);

  if (asksCuongLinh && asksLuanCuong) {
    const cuongLinh = CONCEPT_DETAILS['cuong-linh-chinh-tri-dau-tien'];
    const luanCuong = CONCEPT_DETAILS['luan-cuong-chinh-tri-1930'];

    return {
      content:
        `**So sánh Cương lĩnh chính trị đầu tiên và Luận cương chính trị tháng 10/1930**\n\n` +
        `**Cương lĩnh chính trị đầu tiên:**\n${cuongLinh.description}\n\n` +
        `**Luận cương chính trị tháng 10/1930:**\n${luanCuong.description}\n\n` +
        `**Điểm cần nhớ khi ôn thi:**\n` +
        '- Cương lĩnh đầu tiên nổi bật ở việc đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.\n' +
        '- Luận cương tháng 10/1930 nhấn mạnh đấu tranh giai cấp và liên minh công - nông.\n' +
        '- Câu hỏi so sánh thường yêu cầu nêu ưu điểm, hạn chế và bối cảnh ra đời của từng văn kiện.',
      topicDetected: 'So sánh Cương lĩnh và Luận cương',
      rejected: false,
    };
  }

  return null;
}

function buildBroadResponse(normalizedQuery) {
  if (
    hasAny(normalizedQuery, [
      'lich su dang',
      'dang cong san viet nam',
      'tong quan',
      'toan bo',
      'he thong',
    ])
  ) {
    return {
      content:
        '**Lịch sử Đảng Cộng sản Việt Nam** có thể hệ thống theo ba chặng lớn:\n\n' +
        '1. **1930-1945:** Đảng ra đời, xác lập đường lối cách mạng và lãnh đạo Cách mạng Tháng Tám.\n' +
        '2. **1945-1975:** Bảo vệ chính quyền, tiến hành kháng chiến chống Pháp, chống Mỹ và thống nhất đất nước.\n' +
        '3. **Từ 1975:** Xây dựng đất nước, đổi mới và hội nhập quốc tế.\n\n' +
        'Bạn có thể hỏi theo dạng: “1930-1945 có sự kiện gì?”, “Cách mạng Tháng Tám là gì?”, “Đại hội VI có ý nghĩa gì?”.',
      topicDetected: 'Tổng quan Lịch sử Đảng',
      rejected: false,
    };
  }

  if (hasAny(normalizedQuery, ['dai hoi'])) {
    return {
      content:
        '**Các Đại hội Đảng** là những mốc quan trọng tổng kết thực tiễn, bổ sung đường lối và xác định nhiệm vụ chiến lược cho từng thời kỳ.\n\n' +
        '**Một số mốc thường gặp khi học:**\n' +
        '- **Đại hội II năm 1951:** Đảng ra hoạt động công khai với tên Đảng Lao động Việt Nam.\n' +
        '- **Đại hội III năm 1960:** Xác định đường lối cách mạng hai miền.\n' +
        '- **Đại hội VI năm 1986:** Khởi xướng công cuộc đổi mới.\n\n' +
        'Bạn có thể hỏi cụ thể hơn, ví dụ: “Đại hội VI là gì?” hoặc “Đại hội III xác định nhiệm vụ hai miền thế nào?”.',
      topicDetected: 'Đại hội Đảng',
      rejected: false,
    };
  }

  return null;
}

export function getChatResponse(query) {
  const normalized = normalize(query);
  const intent = detectIntent(normalized);

  if (!normalized) {
    return {
      content:
        'Bạn hãy nhập một câu hỏi về **Lịch sử Đảng Cộng sản Việt Nam**, ví dụ: “1930-1945 có sự kiện gì?” hoặc “Cách mạng Tháng Tám là gì?”.',
      topicDetected: 'Câu hỏi trống',
      rejected: true,
    };
  }

  const compareResponse = buildCompareResponse(normalized);
  if (compareResponse) return compareResponse;

  const personMatch = findPerson(normalized);
  if (personMatch) {
    return buildPersonResponse(personMatch.person);
  }

  const conceptMatch = findConcept(normalized);
  if (conceptMatch) {
    return buildConceptResponse(conceptMatch.slug, conceptMatch.detail, intent);
  }

  const periodMatch = findPeriod(normalized);
  if (periodMatch) {
    return buildPeriodResponse(periodMatch, intent);
  }

  const broadResponse = buildBroadResponse(normalized);
  if (broadResponse) return broadResponse;

  const broadTopics = [
    'dang',
    'lich su',
    'cach mang',
    'khang chien',
    'doi moi',
    'dai hoi',
    'viet nam',
    'dien bien phu',
    'thang tam',
    'thang 8',
    'van kien',
    'cuong linh',
    'luan cuong',
    'giai phong',
    'thong nhat',
    'hoi nhap',
    'khai nghia',
    'tong khoi nghia',
  ];

  if (broadTopics.some((topic) => normalized.includes(topic))) {
    return {
      content:
        '**Lịch sử Đảng Cộng sản Việt Nam** được trình bày theo ba chặng chính:\n\n' +
        '1. **1930-1945:** Đảng ra đời, hoàn chỉnh đường lối giải phóng dân tộc và lãnh đạo Cách mạng Tháng Tám.\n' +
        '2. **1945-1975:** Bảo vệ chính quyền, tiến hành hai cuộc kháng chiến và thống nhất đất nước.\n' +
        '3. **Từ 1975:** Xây dựng đất nước, khởi xướng đổi mới và hội nhập quốc tế.\n\n' +
        'Bạn hãy nêu một **sự kiện, nhân vật, giai đoạn hoặc văn kiện cụ thể** để tôi giải thích sâu hơn.',
      topicDetected: 'Lịch sử Đảng',
      rejected: false,
    };
  }

  return {
    content:
      'Tôi hỗ trợ tra cứu nội dung **Lịch sử Đảng Cộng sản Việt Nam**. Bạn có thể hỏi theo các dạng:\n\n' +
      '- “1930-1945 có sự kiện gì?”\n' +
      '- “Tổng khởi nghĩa tháng 8 là gì?”\n' +
      '- “Cương lĩnh chính trị đầu tiên là gì?”\n' +
      '- “So sánh Cương lĩnh và Luận cương 1930”\n' +
      '- “Đại hội VI có ý nghĩa gì?”\n' +
      '- “Võ Nguyên Giáp có vai trò gì?”',
    topicDetected: 'Chưa nhận diện rõ',
    rejected: true,
  };
}

export const SAMPLE_QUESTIONS = [
  'Vì sao Đảng Cộng sản Việt Nam ra đời là bước ngoặt lịch sử?',
  'Ý nghĩa của Cách mạng Tháng Tám năm 1945 là gì?',
  'Phân tích đường lối kháng chiến chống thực dân Pháp',
  'Vì sao Đại hội VI năm 1986 mở ra thời kỳ đổi mới?',
  'So sánh Cương lĩnh đầu tiên và Luận cương tháng 10/1930'
];

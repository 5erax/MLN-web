/**
 * Kho kiến thức Lịch sử Đảng Cộng sản Việt Nam.
 * Cấu trúc giữ tương thích với các API hiện có để không làm gián đoạn ứng dụng.
 */

export const PHILOSOPHERS = {
  'ho-chi-minh': {
    name: 'Hồ Chí Minh',
    nameVi: 'Nguyễn Ái Quốc - Hồ Chí Minh',
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
    philosophers: ['Hồ Chí Minh', 'Trường Chinh', 'Võ Nguyên Giáp', 'Lê Duẩn'],
    icon: '\u2691'
  },
  'Giai đoạn từ 1975': {
    name: 'Xây dựng đất nước và đổi mới',
    era: 'Từ 1975',
    description: 'Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội, khởi xướng đổi mới, phát triển kinh tế thị trường định hướng xã hội chủ nghĩa và hội nhập quốc tế.',
    keyIdeas: ['Thống nhất về nhà nước', 'Đổi mới', 'Hội nhập quốc tế'],
    philosophers: ['Trường Chinh', 'Nguyễn Văn Linh'],
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

const normalize = (value = '') => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/đ/g, 'd');

export function getChatResponse(query) {
  const normalized = normalize(query);

  for (const [slug, person] of Object.entries(PHILOSOPHERS)) {
    const names = [person.name, person.nameVi, slug].filter(Boolean).map(normalize);
    if (names.some((name) => normalized.includes(name))) {
      return {
        content: `**${person.name} (${person.birthDeath})**\n\n${person.summary}\n\n**Đóng góp nổi bật:**\n${person.concepts.map((item) => `- ${item}`).join('\n')}`,
        topicDetected: person.name,
        rejected: false
      };
    }
  }

  for (const detail of Object.values(CONCEPT_DETAILS)) {
    if (normalized.includes(normalize(detail.title))) {
      return {
        content: `**${detail.title}**\n\n${detail.description}\n\n*Giai đoạn: ${detail.school}*`,
        topicDetected: detail.title,
        rejected: false
      };
    }
  }

  const broadTopics = ['dang', 'lich su', 'cach mang', 'khang chien', 'doi moi', 'dai hoi', 'viet nam', 'dien bien phu', 'thang tam'];
  if (broadTopics.some((topic) => normalized.includes(topic))) {
    return {
      content: '**Lịch sử Đảng Cộng sản Việt Nam** được trình bày theo ba chặng chính:\n\n1. **1930-1945:** Đảng ra đời, hoàn chỉnh đường lối giải phóng dân tộc và lãnh đạo Cách mạng Tháng Tám.\n2. **1945-1975:** Bảo vệ chính quyền, tiến hành hai cuộc kháng chiến và thống nhất đất nước.\n3. **Từ 1975:** Xây dựng đất nước, khởi xướng đổi mới và hội nhập quốc tế.\n\nBạn hãy nêu một sự kiện, nhân vật hoặc văn kiện cụ thể để tôi giải thích sâu hơn.',
      topicDetected: 'Lịch sử Đảng',
      rejected: false
    };
  }

  return {
    content: 'Tôi hỗ trợ nội dung **Lịch sử Đảng Cộng sản Việt Nam**. Bạn có thể hỏi về sự ra đời của Đảng, Cách mạng Tháng Tám, hai cuộc kháng chiến, công cuộc đổi mới, các đại hội, nhân vật hoặc văn kiện tiêu biểu.',
    topicDetected: 'Ngoài phạm vi',
    rejected: true
  };
}

export const SAMPLE_QUESTIONS = [
  'Vì sao Đảng Cộng sản Việt Nam ra đời là bước ngoặt lịch sử?',
  'Ý nghĩa của Cách mạng Tháng Tám năm 1945 là gì?',
  'Phân tích đường lối kháng chiến chống thực dân Pháp',
  'Vì sao Đại hội VI năm 1986 mở ra thời kỳ đổi mới?',
  'So sánh Cương lĩnh đầu tiên và Luận cương tháng 10/1930'
];

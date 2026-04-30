export type NavItem = {
  label: string;
  path: string;
};

export type HeroCloudPhrase = {
  text: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  tone?: 'muted' | 'soft' | 'main';
  weight?: 'normal' | 'strong';
  delayMs?: number;
  durationMs?: number;
};

export type HeroCloudRow = {
  left?: HeroCloudPhrase;
  center?: HeroCloudPhrase;
  right?: HeroCloudPhrase;
};

export type ProductItem = {
  title: string;
  meta: string;
  image: string;
};

export type OfferItem = {
  image: string;
  title: string;
  subtitle: string;
};

export type StrengthItem = {
  title: string;
  description: string;
};

export type MetricItem = {
  label: string;
  value: string;
  description: string;
};

export type MentorHighlight = {
  name: string;
  title: string;
  bullets: string[];
  image: string;
};

export type SuccessCase = {
  name: string;
  title: string;
  profile: string;
  story: string;
  image: string;
};

export type MentorProfile = {
  name: string;
  image: string;
  highlights: string[];
};

export const navItems: NavItem[] = [
  { label: '主页', path: '/' },
  { label: '关于学屿', path: '/about' },
  { label: '学屿团队', path: '/mentor' },
  { label: '联系我们', path: '/contact' },
];

export const heroCloudRows: HeroCloudRow[] = [
  {
    left: {
      text: '我们相信谦卑，相信持续的学习和进化。',
      size: 'xs',
      tone: 'muted',
      delayMs: 180,
    },
    center: {
      text: '我们相信申请不是模板填空，而是长期叙事。',
      size: 'sm',
      tone: 'soft',
      weight: 'strong',
      delayMs: 360,
    },
    right: {
      text: '我们相信更早的规划，会让选择更从容。',
      size: 'sm',
      tone: 'main',
      weight: 'strong',
      delayMs: 560,
    },
  },
  {
    left: {
      text: '我们相信选校不该只看榜单。',
      size: 'xs',
      tone: 'muted',
      delayMs: 740,
    },
    center: {
      text: '我们相信名校申请不是追逐光环，而是对未来方向的认真回答。',
      size: 'sm',
      tone: 'main',
      weight: 'strong',
      delayMs: 920,
    },
    right: {
      text: '我们相信好的教育陪伴，会让学生更清楚自己是谁。',
      size: 'sm',
      tone: 'soft',
      weight: 'strong',
      delayMs: 1100,
    },
  },
  {
    left: {
      text: '我们相信努力和判断要一起进化。',
      size: 'xs',
      tone: 'muted',
      delayMs: 1260,
    },
    center: {
      text: '我们相信背景提升、课程规划、实习和研究，应当从同一目标出发。',
      size: 'sm',
      tone: 'soft',
      weight: 'strong',
      delayMs: 1380,
    },
    right: {
      text: '我们相信真正的准备感，来自长期积累。',
      size: 'xs',
      tone: 'muted',
      delayMs: 1520,
    },
  },
  {
    left: {
      text: '我们相信每个学生都值得一套真正个性化的路径。',
      size: 'sm',
      tone: 'main',
      weight: 'strong',
      delayMs: 1640,
    },
    right: {
      text: '我们相信文书、选校、面试和执行，必须连成一条线。',
      size: 'sm',
      tone: 'main',
      weight: 'strong',
      delayMs: 1760,
    },
  },
  {
    left: {
      text: '我们相信好的文书要说真话。',
      size: 'xs',
      tone: 'muted',
      delayMs: 1920,
      durationMs: 1200,
    },
    center: {
      text: '我们相信，一个好的申请团队应该坚定地和学生站在一起，提供快速反馈、清晰判断和长期陪伴。',
      size: 'sm',
      tone: 'main',
      delayMs: 2040,
      durationMs: 1200,
    },
    right: {
      text: '我们相信沟通要坦诚，节奏要清晰。',
      size: 'xs',
      tone: 'muted',
      delayMs: 2160,
      durationMs: 1200,
    },
  },
  {
    center: {
      text: '应该帮忙不添乱，提供方法而不是模板，提供判断而不是空泛安慰。',
      size: 'sm',
      tone: 'main',
      delayMs: 2480,
      durationMs: 1200,
    },
  },
  {
    left: {
      text: '我们相信透明协作，比神秘包装更能建立信任。',
      size: 'xs',
      tone: 'muted',
      delayMs: 2860,
      durationMs: 1200,
    },
    center: {
      text: '我们相信长期主义不是慢吞吞，而是每一步都朝正确方向积累。',
      size: 'xs',
      tone: 'soft',
      delayMs: 3020,
      durationMs: 1200,
    },
    right: {
      text: '我们相信录取只是开始，成长路径更重要。',
      size: 'xs',
      tone: 'muted',
      delayMs: 3180,
      durationMs: 1200,
    },
  },
  {
    left: {
      text: '我们相信预测未来最好的方式，是今天就认真准备。',
      size: 'sm',
      tone: 'main',
      weight: 'strong',
      delayMs: 3380,
      durationMs: 1300,
    },
    right: {
      text: '我们相信结果重要，但成长路径同样重要。',
      size: 'sm',
      tone: 'main',
      weight: 'strong',
      delayMs: 3560,
      durationMs: 1300,
    },
  },
  {
    left: {
      text: '我们相信能力的积累，不该被切成彼此无关的任务。',
      size: 'xs',
      tone: 'muted',
      delayMs: 3800,
      durationMs: 1300,
    },
    center: {
      text: '我们相信好的导师不是替你发声，而是帮你找到自己的表达。',
      size: 'xs',
      tone: 'muted',
      delayMs: 3980,
      durationMs: 1300,
    },
    right: {
      text: '我们相信专业定位，比盲目冲排名更重要。',
      size: 'xs',
      tone: 'muted',
      delayMs: 4160,
      durationMs: 1300,
    },
  },
  {
    left: {
      text: '我们相信诚实比漂亮更有力量。',
      size: 'xs',
      tone: 'muted',
      delayMs: 4320,
      durationMs: 1300,
    },
    center: {
      text: '我们相信重要的决定，值得慢下来想清楚。',
      size: 'xs',
      tone: 'soft',
      delayMs: 4480,
      durationMs: 1300,
    },
    right: {
      text: '我们相信每一次准备，都应该通向更大的自信。',
      size: 'xs',
      tone: 'muted',
      delayMs: 4640,
      durationMs: 1300,
    },
  },
];

export const productItems: ProductItem[] = [
  {
    title: '留学申请',
    meta: '本科 · 硕士 · 博士',
    image: '/assets/images/product-accordion/study-abroad.jpg',
  },
  {
    title: '国际标化',
    meta: 'A-Level · IGCSE · IB · AP',
    image: '/assets/images/product-accordion/standardized-tests.jpg',
  },
  {
    title: '语言培训',
    meta: 'IELTS · TOEFL · GRE · GMAT · 小语种',
    image: '/assets/images/product-accordion/language-training.jpg',
  },
  {
    title: '课业辅导',
    meta: 'Thesis · Essay · Assignment · Code',
    image: '/assets/images/product-accordion/academic-support.jpg',
  },
  {
    title: '背景提升',
    meta: '科研 · 竞赛 · 实习',
    image: '/assets/images/product-accordion/profile-enhancement.jpg',
  },
  {
    title: '求职规划',
    meta: '国内、海外求职培训',
    image: '/assets/images/product-accordion/career-planning.jpg',
  },
  {
    title: '签证住宿',
    meta: '学习旅游签证 · 住宿办理',
    image: '/assets/images/product-accordion/visa-housing.jpg',
  },
  {
    title: '海外游学',
    meta: '高含金量游学项目 · 交换计划',
    image: '/assets/images/product-accordion/overseas-study-tour.jpg',
  },
];

export const offerItems: OfferItem[] = [
  {
    image: '/assets/images/offer/3.png',
    title: 'Cambridge',
    subtitle: 'PhD Offer',
  },
  {
    image: '/assets/images/offer/4.png',
    title: 'UCL',
    subtitle: 'Undergraduate Offer',
  },
  {
    image: '/assets/images/offer/5.png',
    title: 'NYU',
    subtitle: 'Master Offer',
  },
  {
    image: '/assets/images/offer/6.png',
    title: 'Imperial',
    subtitle: 'Master Offer',
  },
  {
    image: '/assets/images/offer/7.png',
    title: 'HKU',
    subtitle: 'Scholarship',
  },
  {
    image: '/assets/images/offer/8.png',
    title: 'LSE',
    subtitle: 'Master Offer',
  },
  {
    image: '/assets/images/offer/9.png',
    title: 'Oxford',
    subtitle: 'Master Offer',
  },
  {
    image: '/assets/images/offer/10.png',
    title: 'Columbia',
    subtitle: 'Master Offer',
  },
  {
    image: '/assets/images/offer/11.png',
    title: 'Manchester',
    subtitle: 'Postgraduate',
  },
  {
    image: '/assets/images/offer/12.png',
    title: 'Bristol',
    subtitle: 'Postgraduate',
  },
  {
    image: '/assets/images/offer/13.png',
    title: 'HKUST',
    subtitle: 'Master Offer',
  },
  {
    image: '/assets/images/offer/14.png',
    title: 'CUHK',
    subtitle: 'Master Offer',
  },
];

export const strengths: StrengthItem[] = [
  {
    title: 'ThreeToOne 申请服务',
    description:
      '我们采用“选校顾问+专业导师+申请导师”三对一全程跟踪服务，由具备海外留学经历的导师分工协作，精准高效辅导申请。',
  },
  {
    title: '最懂你的申请导师',
    description:
      '为每位学员匹配来自 Dream School 或目标学科领域的学长学姐，确保在申请策略与执行层面得到有针对性的指导。',
  },
  {
    title: '丰富资源和学术网络',
    description:
      '与众多国际高校及海外教授保持紧密合作，帮助学生获得更及时的招生信息、学术要求与奖学金机会。',
  },
  {
    title: '非申请季专属规划',
    description:
      '在非申请季提前明确院校与专业目标，制定个性化背景提升计划，为申请季形成更稳的竞争优势。',
  },
  {
    title: '定制化文书',
    description:
      '结合课程设置、招生偏好与个人特质进行深度文书挖掘与打磨，坚持原创表达，拒绝模板化内容。',
  },
  {
    title: '个性化背景提升',
    description:
      '围绕科研、竞赛、实习等高含金量项目，给出可执行的背景提升路径，强化申请竞争力。',
  },
  {
    title: '申请案例数据库',
    description:
      '基于过往成功案例与数据分析进行申请概率评估，帮助学生形成更具针对性的选校与申报策略。',
  },
  {
    title: '申请透明和退费保障',
    description:
      '通过共享邮箱、数字化进度同步与规范合同机制保障过程透明，并提供相应退费保障方案。',
  },
  {
    title: '全程温暖相伴',
    description:
      '坚持专业、透明、温暖相伴的辅导理念，陪伴学员从目标设定到录取落地，走完完整成长路径。',
  },
];

export const metrics: MetricItem[] = [
  {
    label: '名校导师',
    value: '108',
    description:
      '来自世界综合或专业排名 TOP50 的世界名校，全线覆盖美国常春藤、英国 G5、欧洲、港澳、新加坡、澳洲等地。',
  },
  {
    label: 'OFFER 总数',
    value: '1064',
    description:
      '已帮助超过 382 名学生斩获 1064 张 offer，其中包含哈佛、MIT、斯坦福、牛津、剑桥等顶尖名校录取。',
  },
  {
    label: '申请成功率',
    value: '98.2%',
    description: '世界名校本硕博录取申请成功率达到 98.2%，93.4% 以上学生被 TOP100 或王牌专业录取。',
  },
  {
    label: '辅导专业覆盖率',
    value: '90%',
    description: '深耕商科、传播学、语言学、教育学、心理学、计算机及数学等热门专业申请。',
  },
];

export const mentorHighlights: MentorHighlight[] = [
  {
    name: 'Evan Xu',
    title: '想要讲好留学故事的非知名学者',
    bullets: [
      '阿姆斯特丹大学 人工智能 全奖博士',
      '荷兰理学院 招生官',
      '澳门高校青年学联 理事长',
      '中港澳教育文化交流协会 副会长',
    ],
    image: '/assets/images/clients/SCR-20240816-rpoi.jpeg',
  },
  {
    name: 'Zoe Fan',
    title: '努力学三外的柏林留德华',
    bullets: ['ESCP 欧洲高等商学院 国际销售管理 硕士', 'SAI（法国商学院联盟）招生官', '欧陆商学院申请大满贯'],
    image: '/assets/images/clients/founder2.png',
  },
  {
    name: 'Kayn Xu',
    title: '伦敦第一“申请”',
    bullets: ['伦敦大学学院UCL 数学 学士', '香港大学本科 全奖offer', 'AMC12 全球前1% ｜ A-LEVEL 5A*'],
    image: '/assets/images/clients/founder3.jpg',
  },
];

export const successCases: SuccessCase[] = [
  {
    name: 'Cecilia 同学',
    title: '录取剑桥大学、香港中文大学博士',
    profile: '硕士 UCL Responsible Finance and Alternative Assets；本科 UCL Mathematics',
    story:
      '感谢 Evan 学长在申博之路上的帮助。虽然我在房地产经济与人工智能交叉领域起步较晚，但在导师指导下完成了高质量 SOP 和 RP，最终顺利拿到剑桥录取。',
    image: '/assets/images/clients/Cecilia.png',
  },
  {
    name: '陈同学',
    title: '录取伦敦大学学院 UCL 本科',
    profile: '重庆市第一外国语中学普高部，18 岁，高三',
    story:
      'Kayn 老师非常了解 UCL 招录风格与考试题型，通过全英文模拟面试和逐题纠错提升了我的表达和术语能力，最终数学笔试满分并顺利通过面试。',
    image: '/assets/images/clients/c同学.jpeg',
  },
  {
    name: 'Selina 同学',
    title: '录取纽约大学硕士（奖学金）',
    profile: '本科 弗吉尼亚理工大学 应用计算数学和统计',
    story:
      '从大二开始就同步规划方向、科研和实习路径，最后成功拿到 NYU 金融工程 offer 并获得 4000 美元奖学金。专业度和陪伴感都非常强。',
    image: '/assets/images/clients/Selina.png',
  },
];

export const mentorProfiles: MentorProfile[] = [
  {
    name: 'Evan',
    image: '/assets/images/team/evan.png',
    highlights: [
      '阿姆斯特丹大学 计算机 博士硕士',
      '澳门科技大学 计算机 学士',
      '荷兰理学院 招生官',
      '中港澳教育文化交流协会 副会长',
    ],
  },
  {
    name: 'Zoe',
    image: '/assets/images/team/zoe.png',
    highlights: ['ESCP 欧洲高等商学院 市场与管理 硕士&学士', 'SAI（法国商学院联盟）招生官'],
  },
  {
    name: 'Xavier',
    image: '/assets/images/team/Xavier.png',
    highlights: ['HEC Paris 法国高商 商科 硕士', 'SAI（法国商学院联盟）招生官', '就职于国内头部投行'],
  },
  {
    name: 'George',
    image: '/assets/images/team/George.png',
    highlights: ['ESSEC 法国高等商学院 金融 硕士', '法语 C1｜雅思 8.0｜GMAT 750', '就职于巴黎银行 企业金融'],
  },
  {
    name: 'Murphy',
    image: '/assets/images/team/murphy.png',
    highlights: ['ESCP 欧洲高等商学院 管理 硕士', '东北大学 德语系 学士'],
  },
  {
    name: 'Emma',
    image: '/assets/images/team/emma.png',
    highlights: ['法国里昂高等商学院 会计学 硕士', '北京科技大学 战略与咨询 学士'],
  },
  {
    name: 'JING',
    image: '/assets/images/team/jing.png',
    highlights: ['法国 ESRA 制片与发行 硕士', '法国 CLCF 副导演 学士', '法语 C1'],
  },
  {
    name: 'Yuki',
    image: '/assets/images/team/yuki.png',
    highlights: ['阿姆斯特丹大学 语言学 硕士', '托福总分 112'],
  },
  {
    name: 'Yufei',
    image: '/assets/images/team/Yufei.png',
    highlights: ['阿姆斯特丹大学 媒体研究 硕士', 'Scripps College 人类学 学士', '托福 106｜GRE 333｜日语 N1'],
  },
  {
    name: 'Paisley',
    image: '/assets/images/team/Paisley.png',
    highlights: ['美国西北大学 传播学 硕士', '美国南卫理公会大学 公关与政治传播学 学士', '就职于联合国纽约文教办'],
  },
  {
    name: 'Lee',
    image: '/assets/images/team/Lee.png',
    highlights: ['伦敦大学学院 社会学 博士', '伦敦大学学院 经济学 硕士', '雅思 8.0｜GRE 330'],
  },
  {
    name: 'Vivan',
    image: '/assets/images/team/Vivan.png',
    highlights: ['利兹大学 教育学 博士', '伦敦大学学院 教育学 硕士', 'IB 考官、教师培训官｜雅思 8.0'],
  },
  {
    name: 'Dery',
    image: '/assets/images/team/Dery.png',
    highlights: ['伦敦大学学院 社会学 博士', '伦敦大学学院 TESOL 硕士', '13 年学术英语与雅思教学经验'],
  },
  {
    name: 'Pansy',
    image: '/assets/images/team/Pansy.png',
    highlights: ['帝国理工学院 数学与统计金融 学士&硕士', '上海某知名国际高中老师'],
  },
  {
    name: 'Kayn',
    image: '/assets/images/team/kayn.png',
    highlights: ['伦敦大学学院 数学系 学士', '港大学士全奖', 'A-Level 5A*｜AMC12 全球前 1%'],
  },
  {
    name: 'Chris',
    image: '/assets/images/team/Chris.png',
    highlights: ['伦敦政经学院 纯经济系 学士', 'NEC 全国金奖获得者', 'A-Level 5A*'],
  },
];

export const partnerUniversityLogos = [
  '/assets/images/partners/university/University_of_Edinburgh-Logo.wine.svg',
  '/assets/images/partners/university/London_School_of_Economics-Logo.wine.svg',
  '/assets/images/partners/university/University_of_Manchester-Logo.wine.svg',
  '/assets/images/partners/university/University_of_Bristol-Logo.wine.svg',
  '/assets/images/partners/university/University_of_California,_Los_Angeles-Logo.wine.svg',
  '/assets/images/partners/university/Columbia_University-Logo.wine.svg',
  '/assets/images/partners/university/Hong_Kong_University_of_Science_and_Technology-Logo.wine.svg',
  '/assets/images/partners/university/University_of_Hong_Kong-Logo.wine.svg',
  '/assets/images/partners/university/Chinese_University_of_Hong_Kong-Logo.wine.svg',
  '/assets/images/partners/university/psb.png',
  '/assets/images/partners/university/melbourne.png',
];

export const partnerCompanyLogos = [
  '/assets/images/partners/company/HSBC-Logo.wine.svg',
  '/assets/images/partners/company/Prudential_plc-Logo.wine.svg',
  '/assets/images/partners/company/kaplan.png',
  '/assets/images/partners/company/ceg.png',
];

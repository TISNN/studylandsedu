import {
  ArrowLeftRight,
  Award,
  BadgeCheck,
  Building2,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  School,
  Sparkles,
  Users,
} from 'lucide-react';

type EcosystemItem = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const ecosystemItems: EcosystemItem[] = [
  {
    title: '欧陆地区招生官团队',
    description: '法国高商 SAI 联盟 / 理学院 / 人文社科学院',
    Icon: Globe2,
  },
  {
    title: '官方授权学校代理',
    description: '英美澳加欧洲马来等地区',
    Icon: BadgeCheck,
  },
  {
    title: '马来西亚私立大学联合校方',
    description: '林肯大学、精英大学、ALFA 大学等',
    Icon: School,
  },
  {
    title: '国内中外合办项目方',
    description: '1+3 / 2+2 / 3+1 / 4+0 项目',
    Icon: Handshake,
  },
  {
    title: '中港澳教育文化交流协会',
    description: '副会长单位',
    Icon: ArrowLeftRight,
  },
  {
    title: '澳门高校青年学联',
    description: '理事长单位',
    Icon: Users,
  },
  {
    title: '港澳地区院校',
    description: '合作伙伴',
    Icon: GraduationCap,
  },
  {
    title: '香港汇丰银行 HSBC',
    description: '合作伙伴',
    Icon: Landmark,
  },
];

const journeyItems = [
  {
    year: '2021',
    title: '兼职团队',
    description: '搭建高端留学工作室，创始人负责欧洲校区。',
    Icon: Users,
  },
  {
    year: '2022',
    title: '团队重组',
    description: '扩充世界名校导师团队，形成跨地区专业协作。',
    Icon: GraduationCap,
  },
  {
    year: '2023',
    title: '品牌升级',
    description: '形成留学申请为核心的全链路产品体系。',
    Icon: Sparkles,
  },
  {
    year: '2024',
    title: '专业机构',
    description: '全力打磨产品与服务，成立上海、珠海、重庆办公室。',
    Icon: Building2,
  },
  {
    year: '2024',
    title: '澳门青年创业企业',
    description: '通过横琴粤澳深度合作区评审，获澳门及横琴政府认可。',
    Icon: Award,
  },
];

export function AboutPage() {
  return (
    <>
      <section className="section-gap">
        <div className="brand-container">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">ABOUT US</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">学屿教育</h2>
            <p className="mt-6 text-lg leading-9 text-slate-700">
              学屿，寓意知识的岛屿。我们希望成为学生探索梦想之海时，可靠而长期的同行者。
            </p>
            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
              <p className="leading-8 text-slate-600">
                学屿教育（StudyLandsEdu）由海外名校学长学姐创立，专注国际教育申请与成长陪伴。我们通过导师制度和产品化服务，让路径更清晰、过程更透明。
              </p>
              <p className="leading-8 text-slate-600">
                我们搭建学长学姐分享平台，提供个性化申请指导、经验交流和长期成长支持，帮助学生找到同频伙伴。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-slate-50">
        <div className="brand-container grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">NETWORK</p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900">合作生态</h3>
            <p className="mt-4 leading-8 text-slate-600">
              学屿长期合作的院校、代理、协会、银行与校方资源，构成了我们的支持网络。
            </p>
            <p className="mt-3 leading-8 text-slate-600">
              这些合作关系让咨询建议更贴近真实申请路径，也让学生在学校、项目与地区选择上更有依据。
            </p>
          </div>

          <dl className="rounded-3xl bg-white/80 px-6 ring-1 ring-slate-100">
            {ecosystemItems.map((item, index) => (
              <div
                key={item.title}
                className={
                  index === ecosystemItems.length - 1
                    ? 'grid gap-4 py-5 sm:grid-cols-[auto_1fr]'
                    : 'grid gap-4 border-b border-slate-200/80 py-5 sm:grid-cols-[auto_1fr]'
                }
              >
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
                  <item.Icon size={18} />
                </div>
                <div>
                  <dt className="text-base font-semibold text-slate-900">{item.title}</dt>
                  <dd className="mt-1 text-sm leading-7 text-slate-600">{item.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-gap">
        <div className="brand-container">
          <article className="max-w-3xl rounded-3xl bg-white p-8 ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">品牌理念</p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900">我们的理念</h3>
            <p className="mt-5 leading-8 text-slate-600">
              学屿不仅关注学术结果，更重视个人成长。我们通过团体工作坊和一对一陪伴，帮助学生澄清目标、建立规划能力，让申请成为更清晰的成长过程。
            </p>
            <div className="mt-6 space-y-4 border-t border-slate-200 pt-5">
              <p className="text-sm leading-7 text-slate-600">先理解学生，再给出路径，而不是先给答案。</p>
              <p className="text-sm leading-7 text-slate-600">让申请、成长、社交和职业认知放在同一条线上看。</p>
              <p className="text-sm leading-7 text-slate-600">相比把服务讲得很满，我们更希望先把人和目标理解清楚，再决定怎样往前走。</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-gap bg-slate-50">
        <div className="brand-container">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-semibold text-slate-900">学屿教育发展历程</h3>
            <p className="mt-3 text-slate-600">一路前行，为莘莘学子开启留学梦想</p>
          </div>

          <ol className="mt-10 space-y-4">
            {journeyItems.map((item) => (
              <li key={`${item.year}-${item.title}`} className="grid gap-4 rounded-3xl bg-white p-6 ring-1 ring-slate-100 md:grid-cols-[auto_1fr] md:items-start">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
                  <item.Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#20ad96]">{item.year}</p>
                  <h4 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

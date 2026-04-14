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
import { PageHeader } from '@/components/common/page-header';

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
      <PageHeader title="关于学屿" />

      <section className="section-gap">
        <div className="brand-container">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {ecosystemItems.map((item) => (
              <article key={item.title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
                  <item.Icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-slate-50">
        <div className="brand-container grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">ABOUT US</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">学屿教育</h2>
            <p className="mt-4 leading-8 text-slate-600">
              学屿，寓意知识的岛屿。我们致力于成为每位学子探索梦想之海的可靠港湾，助力他们迈向全球教育的广阔天地。
            </p>
            <p className="mt-3 leading-8 text-slate-600">
              学屿教育（StudyLandsEdu）由海外名校学长学姐创立，作为年轻化留学品牌，我们通过导师制度与产品化服务消除国际教育信息不对称。
            </p>
            <p className="mt-3 leading-8 text-slate-600">
              我们搭建了学长学姐分享平台，不仅提供个性化申请指导，也创造了学术与职业交流空间，帮助学生找到同频伙伴并持续成长。
            </p>
          </div>

          <div>
            <img src="/assets/images/bg/about.jpg" alt="关于学屿" className="h-full w-full rounded-2xl object-cover shadow-sm" />
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="brand-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">OUR MISSION</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">我们的理念</h3>
            <p className="mt-4 leading-8 text-slate-600">
              学屿不仅关注学术结果，更重视个人成长。我们通过团体工作坊和一对一陪伴，帮助学生澄清价值与动机，建立长期规划能力，从恐惧驱动转向热爱驱动。
            </p>
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">Competitive Advantage</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">申请服务优势</h3>
            <p className="mt-4 leading-8 text-slate-600">
              我们采用“选校顾问+专业导师+申请导师”三对一全程服务，覆盖选校定校、文书撰写、网申递交、签证办理、入学指导与职业规划等关键流程。
            </p>
            <img src="/assets/images/bg/专业导师.png" alt="专业导师" className="mt-5 w-full rounded-xl object-cover" />
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">Competitive Advantage</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">价格优势</h3>
            <p className="mt-4 leading-8 text-slate-600">
              学屿坚持价格透明与高质量并重，减少家庭在价格与质量之间反复比较的成本。对有实际困难的家庭，我们也会提供一定的支持性服务。
            </p>
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">Competitive Advantage</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">学屿独特之处</h3>
            <p className="mt-4 leading-8 text-slate-600">
              我们优先为每位学员匹配来自目标院校或目标学科的“学科过来人”导师，辅以专业选择指导、跨专业测评、实习与游学资源，形成完整成长路径。
            </p>
            <img src="/assets/images/course-在线课堂.jpeg" alt="在线课堂" className="mt-5 w-full rounded-xl object-cover" />
          </article>
        </div>
      </section>

      <section className="section-gap bg-slate-50">
        <div className="brand-container">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-semibold text-slate-900">学屿教育发展历程</h3>
            <p className="mt-3 text-slate-600">一路前行，为莘莘学子开启留学梦想</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {journeyItems.map((item) => (
              <article key={`${item.year}-${item.title}`} className="rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                <p className="text-sm font-semibold text-[#20ad96]">{item.year}</p>
                <div className="mt-3 inline-flex size-9 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
                  <item.Icon size={16} />
                </div>
                <h4 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

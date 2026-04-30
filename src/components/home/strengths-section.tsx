import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { strengths } from '@/data/site';

export function StrengthsSection() {
  const [, mentor, academicNetwork, offseason, essay, , , transparency, warmth] = strengths;

  const baseCardStyle = "flex flex-col bg-slate-100 p-7 md:p-8 xl:p-10 hover:bg-slate-200/50 transition-colors duration-300";

  return (
    <section className="section-gap bg-white">
      <div className="brand-container">
        {/* 保留宽阔的 gap-6 产生独立卡片感 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          
          {/* Card 1: Main Proposition (2x2) */}
          <article className={`${baseCardStyle} md:col-span-2 xl:row-span-2 min-h-[460px]`}>
            {/* 顶部分区 */}
            <div className="flex items-start justify-between text-slate-500">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">MANIFESTO</p>
              <ArrowUpRight size={18} />
            </div>
            
            {/* 底部内容分区，利用 mt-auto 整体沉底，让上部拥有宽阔呼吸区 */}
            <div className="mt-auto max-w-[600px] pt-12">
              <h2 className="text-[2.45rem] font-semibold tracking-tight text-slate-900 leading-[1.06] md:text-[2.9rem]">
                申请不是拼速度，<br />而是把判断做稳
              </h2>
              
              <div className="mt-8 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span className="flex h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                选校顾问 / 专业导师 / 申请导师
              </div>
              
              <p className="mt-5 text-[15px] leading-[1.85] text-slate-600">
                申请中最难的不是材料本身，而是方向、表达和执行彼此脱节。学屿用三对一协作，把院校判断、文书表达和申请进度放在同一套节奏里。
              </p>
              
              <div className="mt-7 border-t border-slate-300 pt-6">
                <p className="text-xs text-slate-500 leading-relaxed">全程可跟进，关键节点透明可见。</p>
                <Link
                  to="/service"
                  className="strengths-primary-cta mt-5"
                >
                  查看申请服务
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2: Mentor Image (Color + Overlay) (2x2) */}
          <article className="strengths-feature-card group md:col-span-2 xl:row-span-2">
            <img
              src="/assets/images/product-accordion/study-abroad.jpg"
              alt="学屿教育申请陪伴"
              className="strengths-feature-image"
            />
            <div className="strengths-feature-overlay" />
            
            <div className="strengths-feature-top">
              <p>FEATURED SETUP</p>
              <ArrowUpRight size={18} className="text-white" />
            </div>
            
            <div className="strengths-feature-scrim" />
            <h3 className="strengths-feature-title">
              让真正懂学校与专业的人，<br />一起参与判断
            </h3>
          </article>

          {/* Card 3: Resources (1x2) */}
          <article className={`${baseCardStyle} xl:col-span-1 xl:row-span-2 min-h-[410px]`}>
            <div className="flex items-start justify-between text-slate-500">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">ACADEMIC NETWORK</p>
              <ArrowUpRight size={18} />
            </div>
            <div className="mt-8 overflow-hidden border border-slate-200 bg-white">
              <img
                src="/assets/images/university.jpg"
                alt="学术连接与合作院校"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="mt-auto pt-8">
              <h3 className="text-[1.7rem] font-semibold tracking-tight text-slate-900 leading-[1.18]">
                广阔资源与<br />学术连接
              </h3>
              <p className="mt-6 text-[14px] leading-[1.78] text-slate-600">
                {academicNetwork.description} 真实案例会作为参照，帮助学生把判断建立在完整信息之上。
              </p>
            </div>
          </article>

          {/* Wrapper for 1x2 column that holds two 1x1 cards */}
          <div className="flex flex-col gap-4 md:gap-6 xl:col-span-1 xl:row-span-2">
            
            {/* Card 4.1: Mentor Matching Split */}
            <article className={`${baseCardStyle} flex-1 min-h-[192px]`}>
              <div className="flex items-start justify-between text-slate-500">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">ALUMNI MENTOR</p>
                <ArrowUpRight size={18} />
              </div>
              <div className="mt-auto pt-7">
                <h3 className="text-[16px] font-semibold tracking-tight text-slate-900">
                  让过来人参与判断
                </h3>
                <p className="mt-3 text-[13px] leading-[1.72] text-slate-600">
                  {mentor.description}
                </p>
              </div>
            </article>

            {/* Card 4.2: Off-season */}
            <article className={`${baseCardStyle} flex-1 min-h-[192px]`}>
               <div className="flex items-start justify-between text-slate-500">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">OFF-SEASON PLANNING</p>
                <ArrowUpRight size={18} />
              </div>
              <div className="mt-auto pt-7">
                <h3 className="text-[17px] font-semibold tracking-tight text-slate-900">
                  非申请季提前布局
                </h3>
                <p className="mt-3 text-[13px] leading-[1.72] text-slate-600">
                  {offseason.description} 围绕科研、竞赛、实习等项目提前积累。
                </p>
              </div>
            </article>

          </div>
          
          {/* Card 5: Personal Writing (2x2) */}
          <article className={`${baseCardStyle} xl:col-span-2 xl:row-span-2 min-h-[410px]`}>
            <div className="flex items-start justify-between text-slate-500">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">PERSONAL WRITING</p>
              <ArrowUpRight size={18} />
            </div>
            
            <div className="mt-auto max-w-[560px] pt-8">
              <img
                src="/assets/images/essay-illustration.svg"
                alt="文书打磨手绘插画"
                className="mb-7 h-28 w-auto"
              />
              <h3 className="text-3xl font-semibold tracking-tight text-slate-900 leading-[1.12] lg:text-[2.35rem]">
                文书不是修辞堆砌，<br />而是把经历说准
              </h3>
              <p className="mt-5 text-[15px] leading-[1.78] text-slate-600">
               {essay.description}
             </p>
             <div className="mt-7 flex items-center gap-2 font-mono text-[11px] text-slate-500 bg-white/60 p-3.5 rounded-md border border-slate-200/80 shadow-sm">
               <span className="text-slate-400">&gt;</span> drafting personal_statement.md<span className="animate-pulse bg-slate-400 w-1.5 h-3 inline-block align-middle ml-1"></span>
             </div>
            </div>
          </article>

          {/* Card 6: Transparency (1x1 area) */}
          <article className={`${baseCardStyle} xl:col-span-1 min-h-[270px]`}>
            <div className="flex items-start justify-between text-slate-500">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">TRANSPARENCY</p>
              <ArrowUpRight size={18} />
            </div>
            <div className="mt-auto pt-10 text-slate-900">
              <div className="mb-4 text-[3.2rem] font-semibold tracking-tighter">3:1</div>
              <p className="text-[14px] leading-[1.76] text-slate-600">
                选校顾问、专业导师、申请导师分别负责不同判断。{transparency.description}
              </p>
            </div>
          </article>

          {/* Card 7: Long-term (3x1 area) */}
          <article className={`${baseCardStyle} xl:col-span-3 min-h-[270px]`}>
            <div className="flex items-start justify-between text-slate-500">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">LONG-TERM SUPPORT</p>
              <ArrowUpRight size={18} />
            </div>
            <div className="mt-auto flex flex-col gap-8 pt-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                 <img
                  src="/assets/images/logo.png"
                  alt="学屿教育"
                  className="mb-7 h-20 w-auto opacity-90"
                />
                 <h3 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-[2rem]">
                  不只陪你拿到录取，也陪你走完这段路
                </h3>
                <p className="mt-4 text-[15px] leading-[1.76] text-slate-600">
                   {warmth.description}
                </p>
              </div>
              <div className="shrink-0 mb-1">
                <Link
                    to="/contact"
                    className="font-mono text-xs text-slate-900 border-b border-slate-300 pb-1 hover:text-slate-600 transition-colors uppercase tracking-widest"
                  >
                    CONTACT_US()
                </Link>
              </div>
            </div>
          </article>
          
        </div>
      </div>
    </section>
  );
}

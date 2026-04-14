import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="section-gap">
      <div className="brand-container text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#20ad96]">404</p>
        <h1 className="mt-2 text-4xl font-semibold">页面不存在</h1>
        <p className="mt-4 text-slate-600">你访问的页面还在迁移中，先回到主页继续浏览。</p>
        <Link
          to="/"
          className="mt-7 inline-block rounded-full bg-[#20ad96] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a9b86]"
        >
          返回主页
        </Link>
      </div>
    </section>
  );
}

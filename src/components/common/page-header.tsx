import { Link } from 'react-router-dom';

type PageHeaderProps = {
  title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="bg-slate-50 py-14">
      <div className="brand-container text-center">
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">
          <Link to="/" className="hover:text-[#20ad96]">
            主页
          </Link>{' '}
          / <span>{title}</span>
        </p>
      </div>
    </section>
  );
}

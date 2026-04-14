import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '@/data/site';

function navClass(isActive: boolean): string {
  return [
    'text-sm md:text-base transition-colors',
    isActive ? 'text-[#20ad96] font-semibold' : 'text-slate-700 hover:text-[#20ad96]',
  ].join(' ');
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="brand-container flex h-20 items-center justify-between gap-4">
        <NavLink to="/" className="shrink-0" onClick={() => setIsOpen(false)}>
          <img
            src="/assets/images/banner/logo double.png"
            alt="学屿教育"
            className="h-10 w-auto md:h-12"
          />
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="切换导航"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => navClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://workspace.studylandsedu.com"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[#20ad96] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1a9b86] md:inline-block"
        >
          登录
        </a>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <nav className="brand-container flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => navClass(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://workspace.studylandsedu.com"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex w-fit rounded-full bg-[#20ad96] px-5 py-2 text-sm font-semibold text-white"
            >
              登录
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

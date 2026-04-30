import { Outlet } from 'react-router-dom';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';

export function SiteLayout() {
  return (
    <div className="site-shell min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <div className="site-shell__content">
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

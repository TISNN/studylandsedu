import { Mail, MessageCircle } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-slate-900 text-slate-100">
      <div className="brand-container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold">学屿教育</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            我们搭建了一个学长学姐的平台，分享彼此间的留学故事。不仅为学生提供最具个性化的留学申请指导，也创造了一个广阔的社交和成长空间，提供学术和职业交流。
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">About us</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>inqury@studylandsedu.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle size={16} className="mt-0.5 shrink-0" />
              <span>studymindedu</span>
            </li>
            <li className="leading-7">
              上海市徐汇区徐家汇中心3期A栋
              <br />
              珠海市横琴新区环岛东路南方三一总部大厦13楼
              <br />
              重庆市渝中区民族路188号华润广场B座
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="brand-container py-5 text-center text-xs text-slate-400">
          <p>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" className="hover:text-slate-200">
              沪ICP备2024091674号
            </a>
          </p>
          <p className="mt-1">Copyright © {currentYear} StudyLandsEdu All Rights Reserved. 学屿教育版权所有</p>
        </div>
      </div>
    </footer>
  );
}

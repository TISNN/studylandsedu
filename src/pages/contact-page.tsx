import { Mail, MapPin } from 'lucide-react';
import { PageHeader } from '@/components/common/page-header';

export function ContactPage() {
  return (
    <>
      <PageHeader title="联系我们" />
      <section className="section-gap">
        <div className="brand-container">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">contact</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">联系小屿</h2>
            <p className="mt-3 text-slate-600">欢迎通过微信或邮件联系，我们会尽快与你对接。</p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-8">
            <img
              src="/assets/images/联系微信.png"
              alt="微信二维码"
              className="w-full max-w-[560px] rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
            />

            <div className="grid w-full max-w-6xl gap-5 md:grid-cols-2">
              <article className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                <div className="inline-flex size-9 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
                  <Mail size={16} />
                </div>
                <div className="mt-4 space-y-5">
                  <div>
                    <p className="text-sm text-slate-500">邮箱</p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">inqury@studylandsedu.com</h3>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">微信</p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">studymindedu</h3>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                <div className="inline-flex size-9 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
                  <MapPin size={16} />
                </div>
                <p className="mt-4 text-sm text-slate-500">办公地址</p>
                <h3 className="mt-2 text-base font-medium leading-7 text-slate-900">
                  上海市徐汇区徐家汇中心3期A栋
                  <br />
                  珠海市横琴新区环岛东路南方三一总部大厦13楼
                  <br />
                  重庆市渝中区民族路188号华润广场B座
                </h3>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

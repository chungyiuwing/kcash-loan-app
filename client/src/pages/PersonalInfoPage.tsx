/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: 個人及住址資料 (Step 3/6)
 */
import { AppHeader, PageWrapper, PrimaryButton, StepProgress } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";

export default function PersonalInfoPage() {
  const { navigateTo } = useNavigation();

  return (
    <PageWrapper>
      <AppHeader title="Loan Application" />

      <main className="pt-20 pb-32 max-w-md mx-auto w-full">
        {/* Progress Header */}
        <div className="px-6 pt-4 pb-4">
          <div className="flex justify-between items-end mb-3">
            <span className="text-[#5ce697] font-bold text-2xl tracking-tighter">3 / 6</span>
            <span className="text-slate-500 text-sm font-medium">個人及住址資料</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#5ce697] rounded-full w-1/2 glow-primary" />
          </div>
        </div>

        <form className="px-6 space-y-8 mt-4" onSubmit={(e) => e.preventDefault()}>
          {/* Section 1: Personal Details */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#5ce697] rounded-full" />
              <h2 className="text-[1.25rem] font-bold text-slate-900">個人基本資料</h2>
            </div>
            <div className="space-y-5">
              {/* Nationality */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-500 px-1">國籍 (Nationality)</label>
                <div className="relative">
                  <select className="w-full h-14 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5ce697] px-4 appearance-none font-medium">
                    <option>香港 (Hong Kong)</option>
                    <option>中國 (China)</option>
                    <option>其他</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-500 px-1">教育程度 (Education)</label>
                <div className="relative">
                  <select className="w-full h-14 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5ce697] px-4 appearance-none font-medium">
                    <option>大學學士 (Bachelor)</option>
                    <option>碩士 (Master)</option>
                    <option>博士 (PhD)</option>
                    <option>中學 (Secondary)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-500 px-1">電子郵件 (Email)</label>
                <input
                  className="w-full h-14 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5ce697] px-4 font-medium"
                  placeholder="example@email.com"
                  type="email"
                  defaultValue="taiman.chen@email.com"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Address */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#5ce697] rounded-full" />
              <h2 className="text-[1.25rem] font-bold text-slate-900">住址資料</h2>
            </div>
            <div className="space-y-5">
              {/* Home Phone */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-500 px-1">住宅電話 (Home Phone)</label>
                <input
                  className="w-full h-14 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5ce697] px-4 font-medium"
                  placeholder="2345 6789"
                  type="tel"
                  defaultValue="2345 6789"
                />
              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-500 px-1">現居住址 (Address)</label>
                <textarea
                  className="w-full p-4 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5ce697] font-medium resize-none"
                  rows={3}
                  defaultValue="香港九龍尖沙咀彌敦道 101 號&#10;海港大廈 18 樓 B 室"
                />
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="space-y-4 mt-8">
            <PrimaryButton onClick={() => navigateTo("employment")}>
              繼續下一步
            </PrimaryButton>
            <p className="text-xs text-slate-500 text-center leading-relaxed px-4">
              請確保以上資料準確無誤，所有資料將會根據我們的私隱政策受到嚴格保護。
            </p>
          </div>
        </form>
      </main>
    </PageWrapper>
  );
}

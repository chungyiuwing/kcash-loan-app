/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: 財務及法律聲明 (Step 5/6)
 * Referral: 2 options only - 線上 (online) / 線下 (offline with TV & friends examples)
 */
import { AppHeader, BottomNav, PageWrapper, PrimaryButton, StepProgress } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";
import { useState } from "react";

export default function FinancialPage() {
  const { navigateTo } = useNavigation();
  const [intermediary, setIntermediary] = useState("N");
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);

  return (
    <PageWrapper>
      <AppHeader title="貸款申請" />

      <main className="pt-20 pb-28 px-5 max-w-md mx-auto w-full">
        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-3">
            <span className="text-[#5ce697] font-bold text-lg">5 / 6</span>
            <span className="text-slate-500 text-sm font-medium">最後一步：財務與聲明</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#5ce697] rounded-full" style={{ width: "83%" }} />
          </div>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Financial Expenses */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#5ce697]">payments</span>
              財務開支 Financial Expenses
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-500 mb-2 ml-1">
                  每月日常開支 (含房租或供樓)
                </label>
                <div className="relative flex items-center h-14 bg-white rounded-xl border border-slate-200 focus-within:border-[#5ce697] transition-all px-4 shadow-sm input-focus-ring">
                  <span className="text-slate-400 font-medium mr-2">HKD</span>
                  <input
                    className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 font-bold text-lg p-0"
                    placeholder="0"
                    type="number"
                    defaultValue={0}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-500 mb-2 ml-1">
                  每月財務開支
                </label>
                <div className="relative flex items-center h-14 bg-white rounded-xl border border-slate-200 focus-within:border-[#5ce697] transition-all px-4 shadow-sm input-focus-ring">
                  <span className="text-slate-400 font-medium mr-2">HKD</span>
                  <input
                    className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 font-bold text-lg p-0"
                    placeholder="0"
                    type="number"
                    defaultValue={0}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Intermediary & Referral */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#5ce697]">share</span>
              中介及轉介 Intermediary
            </h2>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-500 mb-3">有無第三方中介</label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    onClick={() => setIntermediary("N")}
                    className={`relative flex items-center justify-center h-12 rounded-xl border-2 cursor-pointer transition-all ${
                      intermediary === "N"
                        ? "border-[#5ce697] bg-[#5ce697]/5"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className={`font-bold ${intermediary === "N" ? "text-emerald-800" : "text-slate-600"}`}>
                      無 (No)
                    </span>
                    {intermediary === "N" && (
                      <span
                        className="absolute top-2 right-2 material-symbols-outlined text-[#5ce697] text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    )}
                  </label>
                  <label
                    onClick={() => setIntermediary("Y")}
                    className={`flex items-center justify-center h-12 rounded-xl border-2 cursor-pointer transition-all ${
                      intermediary === "Y"
                        ? "border-[#5ce697] bg-[#5ce697]/5"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className={`font-medium ${intermediary === "Y" ? "text-emerald-800 font-bold" : "text-slate-600"}`}>
                      有 (Yes)
                    </span>
                  </label>
                </div>
              </div>

              {/* Referral Source - 2 options only */}
              <div>
                <label className="block text-sm font-semibold text-slate-500 mb-3">從何認識我們</label>
                <div className="space-y-3">
                  {/* Online */}
                  <label
                    onClick={() => setSelectedSource("online")}
                    className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all border-2 ${
                      selectedSource === "online"
                        ? "border-[#5ce697] bg-[#5ce697]/5"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${
                      selectedSource === "online"
                        ? "bg-[#5ce697] text-white"
                        : "border-2 border-slate-300"
                    }`}>
                      {selectedSource === "online" && (
                        <span className="material-symbols-outlined text-sm">check</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="material-symbols-outlined text-[#5ce697]">language</span>
                        <span className="font-bold text-slate-900">線上渠道 (Online)</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        例如：Google 搜尋、Facebook / Instagram 廣告、YouTube 影片、網站橫幅廣告、網上論壇等
                      </p>
                    </div>
                  </label>

                  {/* Offline */}
                  <label
                    onClick={() => setSelectedSource("offline")}
                    className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all border-2 ${
                      selectedSource === "offline"
                        ? "border-[#5ce697] bg-[#5ce697]/5"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${
                      selectedSource === "offline"
                        ? "bg-[#5ce697] text-white"
                        : "border-2 border-slate-300"
                    }`}>
                      {selectedSource === "offline" && (
                        <span className="material-symbols-outlined text-sm">check</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="material-symbols-outlined text-[#5ce697]">groups</span>
                        <span className="font-bold text-slate-900">線下渠道 (Offline)</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        例如：電視廣告 (TVB/ViuTV)、親友介紹推薦、街頭傳單、巴士 / 港鐵車廂廣告、報紙雜誌等
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Declarations */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#5ce697]">gavel</span>
              法律聲明 Legal Declarations
            </h2>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 leading-relaxed max-h-32 overflow-y-auto">
                <p className="font-bold mb-2">個人資料收集聲明</p>
                <p>
                  本人同意 K Cash 根據其私隱政策收集、使用及處理本人的個人資料，以處理本次貸款申請。本人確認所提供的資料真實、準確及完整。本人明白提供虛假資料可能導致申請被拒絕或法律責任。
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 leading-relaxed max-h-32 overflow-y-auto">
                <p className="font-bold mb-2">信貸報告查閱授權</p>
                <p>
                  本人授權 K Cash 向信貸資料機構查閱本人的信貸報告，以評估本次貸款申請。本人明白此查閱記錄將會記錄在本人的信貸報告中。
                </p>
              </div>
              <label
                onClick={() => setAgreed(!agreed)}
                className="flex items-start gap-3 p-3 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${
                  agreed ? "bg-[#5ce697] text-white" : "border-2 border-slate-300"
                }`}>
                  {agreed && <span className="material-symbols-outlined text-sm">check</span>}
                </div>
                <span className="text-sm font-medium text-slate-700 leading-relaxed">
                  本人已閱讀並同意以上所有條款及聲明，包括個人資料收集聲明及信貸報告查閱授權。
                </span>
              </label>
            </div>
          </section>
        </form>
      </main>

      {/* Bottom Action */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-10px_15px_-3px_rgba(92,230,151,0.15)] rounded-t-xl pb-safe">
        <div className="max-w-md mx-auto flex gap-4 items-center px-4 py-5">
          <PrimaryButton onClick={() => navigateTo("preview")}>
            <span className="material-symbols-outlined">arrow_forward</span>
            預覽申請資料
          </PrimaryButton>
        </div>
      </footer>
    </PageWrapper>
  );
}

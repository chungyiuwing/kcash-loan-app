/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: 貸款詳情 - 金額、期限、用途
 */
import { AppHeader, BottomActionBar, PageWrapper, PrimaryButton, StepProgress } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";
import { useState } from "react";

const amounts = [
  { label: "$30,000", value: 30000 },
  { label: "$50,000", value: 50000 },
];

const periods = ["12個月", "24個月", "36個月", "48個月", "60個月", "其他"];

const purposes = [
  { icon: "home", label: "家居裝修" },
  { icon: "credit_card", label: "債務重組" },
  { icon: "school", label: "進修教育" },
  { icon: "flight_takeoff", label: "旅遊消費" },
  { icon: "directions_car", label: "購車備用" },
  { icon: "more_horiz", label: "其他" },
];

export default function LoanDetailsPage() {
  const { navigateTo } = useNavigation();
  const [selectedAmount, setSelectedAmount] = useState(50000);
  const [selectedPeriod, setSelectedPeriod] = useState("12個月");
  const [selectedPurpose, setSelectedPurpose] = useState("債務重組");

  return (
    <PageWrapper>
      <AppHeader title="貸款申請" />

      <main className="pt-20 pb-32 px-5 max-w-md mx-auto w-full">
        {/* Progress */}
        <div className="px-1 py-4">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-sm text-slate-500">目前進度</p>
              <h2 className="text-xl font-bold">第 2 步：貸款詳情</h2>
            </div>
            <p className="text-sm font-semibold text-[#5ce697]">2 / 6</p>
          </div>
          <div className="w-full bg-[#5ce697]/20 h-2 rounded-full overflow-hidden">
            <div className="bg-[#5ce697] h-full rounded-full" style={{ width: "33.3%" }} />
          </div>
          <p className="text-xs mt-2 text-slate-500">下一步：身份驗證</p>
        </div>

        <div className="space-y-8 mt-4">
          {/* Loan Amount */}
          <section>
            <label className="block font-bold text-lg mb-4">申請貸款額</label>
            <div className="grid grid-cols-2 gap-4">
              {amounts.map((amt) => (
                <button
                  key={amt.value}
                  onClick={() => setSelectedAmount(amt.value)}
                  className={`flex flex-col items-center justify-center py-6 px-4 border-2 rounded-xl transition-all ${
                    selectedAmount === amt.value
                      ? "border-[#5ce697] bg-[#5ce697]/10"
                      : "border-slate-200 hover:border-[#5ce697]/50"
                  }`}
                >
                  <span className={`text-sm mb-1 ${selectedAmount === amt.value ? "text-[#5ce697]" : "text-slate-500"}`}>
                    HKD
                  </span>
                  <span className={`text-xl font-bold ${selectedAmount === amt.value ? "text-[#5ce697]" : ""}`}>
                    {amt.label}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Higher amount CTA */}
          <section className="p-5 bg-white border-2 border-dashed border-[#5ce697]/30 rounded-2xl flex items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-slate-900">需要更高額度？</h3>
              <p className="text-xs text-slate-500 mt-1">我們提供更高限額的私人貸款方案</p>
            </div>
            <button
              onClick={() => navigateTo("property-type")}
              className="px-4 py-2 bg-[#5ce697] text-slate-900 text-sm font-bold rounded-lg hover:bg-[#5ce697]/90 transition-colors whitespace-nowrap"
            >
              查看私人貸款
            </button>
          </section>

          {/* Repayment Period */}
          <section>
            <label className="block font-bold text-lg mb-4">還款期</label>
            <div className="grid grid-cols-3 gap-3">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPeriod(p)}
                  className={`py-3 px-2 border-2 font-medium rounded-xl transition-all ${
                    selectedPeriod === p
                      ? "border-[#5ce697] bg-[#5ce697]/10 text-[#5ce697] font-bold"
                      : "border-slate-200 hover:border-[#5ce697]/50"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </section>

          {/* Loan Purpose */}
          <section>
            <label className="block font-bold text-lg mb-4">貸款用途</label>
            <div className="grid grid-cols-3 gap-4">
              {purposes.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setSelectedPurpose(p.label)}
                  className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl group transition-all ${
                    selectedPurpose === p.label
                      ? "border-[#5ce697] bg-[#5ce697]/5"
                      : "border-slate-200 hover:border-[#5ce697]"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl mb-2 ${
                      selectedPurpose === p.label ? "text-[#5ce697]" : "group-hover:text-[#5ce697]"
                    }`}
                  >
                    {p.icon}
                  </span>
                  <span className={`text-sm ${selectedPurpose === p.label ? "font-bold text-[#5ce697]" : "font-medium"}`}>
                    {p.label}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-[#f6f6f8]/90 backdrop-blur-sm">
        <PrimaryButton onClick={() => navigateTo("phone-verify")}>
          <span>下一步</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </PrimaryButton>
      </div>
    </PageWrapper>
  );
}

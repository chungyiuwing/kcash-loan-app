/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: 職業及收入資料 (Step 4/6)
 */
import { AppHeader, PageWrapper, PrimaryButton } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";
import { useState } from "react";

const paymentMethods = [
  { icon: "account_balance", label: "銀行轉帳", selected: true },
  { icon: "payments", label: "現金" },
  { icon: "description", label: "支票" },
];

export default function EmploymentPage() {
  const { navigateTo } = useNavigation();
  const [selectedPayment, setSelectedPayment] = useState("銀行轉帳");

  return (
    <PageWrapper>
      <AppHeader title="貸款申請" />

      <main className="pt-20 pb-32 px-5 max-w-md mx-auto w-full">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-end mb-3">
            <span className="text-[#5ce697] font-bold text-lg">4 / 6</span>
            <span className="text-slate-500 text-sm font-medium">職業及收入</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#5ce697] rounded-full" style={{ width: "67%" }} />
          </div>
        </div>

        {/* Section 1: Income & Payment */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#5ce697] rounded-full" />
            收入及出糧方式
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
            {/* Monthly Income */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-500">每月固定收入</label>
              <div className="relative flex items-center h-14 bg-slate-50 rounded-xl ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-[#5ce697] px-4 transition-all">
                <span className="text-slate-400 font-medium mr-2">HKD</span>
                <input
                  className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 font-bold text-lg p-0"
                  placeholder="0"
                  type="text"
                  defaultValue="30,000"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-500">出糧方式</label>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.label}
                    onClick={() => setSelectedPayment(method.label)}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPayment === method.label
                        ? "border-[#5ce697] bg-[#5ce697]/5"
                        : "border-transparent bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedPayment === method.label ? "bg-[#5ce697]/20 text-[#5ce697]" : "bg-slate-200 text-slate-500"
                      }`}>
                        <span className="material-symbols-outlined">{method.icon}</span>
                      </div>
                      <span className="font-medium text-slate-900">{method.label}</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === method.label ? "border-[#5ce697] bg-[#5ce697]" : "border-slate-300"
                    }`}>
                      {selectedPayment === method.label && (
                        <span className="material-symbols-outlined text-white text-sm">check</span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Occupation Details */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#5ce697] rounded-full" />
            詳細職業資料
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-5">
            <div className="grid grid-cols-1 gap-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-500">職業</label>
                <div className="relative">
                  <select className="w-full h-14 pl-4 pr-10 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#5ce697] appearance-none">
                    <option>請選擇</option>
                    <option>專業人士</option>
                    <option>管理人員</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-500">行業</label>
                <div className="relative">
                  <select className="w-full h-14 pl-4 pr-10 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#5ce697] appearance-none">
                    <option>請選擇</option>
                    <option>金融服務</option>
                    <option>資訊科技</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-500">職位</label>
              <input
                className="w-full h-14 px-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#5ce697]"
                placeholder="例如：高級經理"
                type="text"
                defaultValue="高級客戶經理"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-500">公司名稱</label>
              <input
                className="w-full h-14 px-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#5ce697]"
                placeholder="請輸入全名"
                type="text"
                defaultValue="環球科技有限公司"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-500">辦公室電話 (選填)</label>
              <input
                className="w-full h-14 px-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#5ce697]"
                placeholder="2345 6789"
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-500">辦公室地址 (選填)</label>
              <textarea
                className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#5ce697] resize-none"
                placeholder="請輸入完整的辦公室地址"
                rows={3}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="space-y-6 mt-10">
          <PrimaryButton onClick={() => navigateTo("financial")}>
            繼續下一步
          </PrimaryButton>
          <p className="text-xs text-slate-500 text-center leading-relaxed px-4">
            請確保以上資料準確無誤，這將有助於加快您的貸款審批進度。所有資料將會根據我們的私隱政策受到嚴格保護。
          </p>
        </div>
      </main>
    </PageWrapper>
  );
}

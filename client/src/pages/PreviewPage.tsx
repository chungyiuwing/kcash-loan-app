/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: 申請資料預覽 (Step 6/6 - Final)
 */
import { AppHeader, PageWrapper, SectionCard } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";
import { useState } from "react";

const SUCCESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663440805077/Wzyw4EBwj4dVFoJKAimjHH/kcash-success-celebration-7bnUhFPig9dzBE6FfRF2Dg.webp";

export default function PreviewPage() {
  const { navigateTo } = useNavigation();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
          <img src={SUCCESS_IMG} alt="成功" className="w-40 h-40 object-contain mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">申請已提交！</h1>
          <p className="text-slate-500 text-center mb-8 leading-relaxed">
            感謝您的申請。我們將在 1-2 個工作天內<br />透過電話或電郵與您聯繫。
          </p>
          <div className="bg-slate-50 rounded-xl p-6 w-full max-w-sm mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-slate-500">申請編號</span>
              <span className="font-bold text-[#5ce697]">KC-2024-88761</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">預計審批時間</span>
              <span className="font-bold">1-2 個工作天</span>
            </div>
          </div>
          <button
            onClick={() => navigateTo("home")}
            className="w-full max-w-sm bg-[#5ce697] text-black font-bold py-4 rounded-xl shadow-lg shadow-[#5ce697]/30 active:scale-[0.98] transition-all"
          >
            返回首頁
          </button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <AppHeader
        title="申請資料預覽"
        rightContent={
          <span className="text-[#5ce697] font-bold text-sm bg-[#5ce697]/10 px-3 py-1 rounded-full">
            步驟 6 / 6
          </span>
        }
      />

      <main className="pt-20 pb-32 px-4 max-w-md mx-auto w-full space-y-5">
        {/* Intro Note */}
        <div className="px-1">
          <p className="text-slate-500 text-sm">
            請核對以下資料，確保所有內容準確無誤。如需更改，請點擊右側的「修改」。
          </p>
        </div>

        {/* Loan Details */}
        <SectionCard icon="payments" title="貸款詳情" onEdit={() => navigateTo("loan-details")}>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-500 mb-1">貸款金額</p>
              <p className="font-bold text-lg">HKD 50,000</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-xs text-slate-500 mb-1">還款期</p>
                <p className="font-bold text-lg">24 個月</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-xs text-slate-500 mb-1">貸款用途</p>
                <p className="font-bold text-lg">家居裝修</p>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Personal Information */}
        <SectionCard icon="person" title="個人資料" onEdit={() => navigateTo("personal-info")}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <p className="text-xs text-slate-500">姓名</p>
                <p className="font-medium">陳大文 CHEN TAI MAN</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">香港身份證</p>
                <p className="font-medium">A123****(1)</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">國籍</p>
                <p className="font-medium">中國 (香港)</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">教育程度</p>
                <p className="font-medium">大學學士</p>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-slate-500">電子郵件</p>
              <p className="font-medium">taiman.chen@email.com</p>
            </div>
          </div>
        </SectionCard>

        {/* Address Information */}
        <SectionCard icon="home" title="住址資料" onEdit={() => navigateTo("personal-info")}>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-500">住宅電話</p>
              <p className="font-medium">2345 6789</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">現居住址</p>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="font-medium leading-relaxed">
                  香港九龍尖沙咀彌敦道 101 號
                  <br />
                  海港大廈 18 樓 B 室
                </p>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Occupation & Income */}
        <SectionCard icon="work" title="職業及收入" onEdit={() => navigateTo("employment")}>
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="border border-slate-100 p-4 rounded-xl">
                <p className="text-xs text-slate-500">職位名稱</p>
                <p className="font-bold">高級客戶經理</p>
              </div>
              <div className="border border-slate-100 p-4 rounded-xl">
                <p className="text-xs text-slate-500">僱主/公司名稱</p>
                <p className="font-bold">環球科技有限公司</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-slate-100 p-4 rounded-xl">
                  <p className="text-xs text-slate-500">就業狀態</p>
                  <p className="font-bold">全職 (Full-time)</p>
                </div>
                <div className="bg-[#5ce697]/5 border border-[#5ce697]/20 p-4 rounded-xl">
                  <p className="text-xs text-emerald-700">每月固定收入</p>
                  <p className="font-extrabold text-xl text-slate-900">HKD 30,000</p>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Financial & Declarations */}
        <SectionCard icon="description" title="財務及聲明" onEdit={() => navigateTo("financial")}>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-500 text-sm">每月其他借貸還款額</span>
              <span className="font-medium">HKD 0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-500 text-sm">是否經中介人申請</span>
              <span className="font-medium">否 (No)</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-500 text-sm">推薦來源</span>
              <span className="font-medium">網上 - 社交媒體</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl flex gap-3 items-start mt-2">
              <span
                className="material-symbols-outlined text-[#5ce697]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                task_alt
              </span>
              <div>
                <p className="text-sm font-bold">所有聲明已確認並簽署</p>
                <p className="text-xs text-slate-500 mt-1">
                  您已同意相關服務條款、個人資料收集聲明及信貸報告授權。
                </p>
              </div>
            </div>
          </div>
        </SectionCard>
      </main>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-10px_15px_-3px_rgba(92,230,151,0.15)] rounded-t-xl pb-safe">
        <div className="max-w-md mx-auto flex gap-4 items-center px-4 py-5">
          <button
            onClick={() => navigateTo("home")}
            className="flex flex-col items-center justify-center text-slate-500 px-4 py-3 hover:opacity-90 transition-opacity active:scale-[0.98] duration-200"
          >
            <span className="material-symbols-outlined mb-1">cancel</span>
            <span className="font-medium text-sm">取消</span>
          </button>
          <button
            onClick={() => setSubmitted(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#5ce697] text-black rounded-xl px-8 py-4 font-bold shadow-lg shadow-[#5ce697]/30 hover:opacity-90 transition-opacity active:scale-[0.98] duration-200"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            <span>確認並提交</span>
          </button>
        </div>
      </footer>
    </PageWrapper>
  );
}

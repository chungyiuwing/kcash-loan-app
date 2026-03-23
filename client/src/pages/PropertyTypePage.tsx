/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: 業主貸款類型選擇
 */
import { AppHeader, BottomNav, PageWrapper } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";

const PROPERTY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663440805077/Wzyw4EBwj4dVFoJKAimjHH/kcash-property-bg-3btXiUtWW8ZXEYMrgusoBf.webp";

const propertyTypes = [
  {
    icon: "domain",
    badge: "熱門選擇",
    title: "公居屋業主私人貸款",
    desc: "專為公屋及居屋業主而設，無需補地價，特快審批，高額現金流。",
    rate: "年利率低至 2.5%",
  },
  {
    icon: "apartment",
    badge: "",
    title: "私人屋苑業主貸款",
    desc: "適合私人屋苑業主的靈活貸款方案，手續簡單，還款期靈活。",
    rate: "特長還款期達 120 個月",
  },
];

export default function PropertyTypePage() {
  const { navigateTo } = useNavigation();

  return (
    <PageWrapper>
      <AppHeader
        title="請選擇業主貸款類型"
        rightContent={
          <button className="p-2 rounded-full text-slate-600">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        }
      />

      <main className="pt-16 pb-28 max-w-md mx-auto w-full">
        {/* Property Hero */}
        <div className="relative overflow-hidden rounded-b-3xl mb-6">
          <img src={PROPERTY_BG} alt="物業貸款" className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h1 className="text-xl font-bold text-white leading-tight mb-1 drop-shadow-lg">
              請選擇您的業主身分
            </h1>
            <p className="text-white/80 text-sm drop-shadow">
              我們將根據您的房屋類型提供最合適的貸款方案
            </p>
          </div>
        </div>

        <div className="space-y-4 px-4">
          {propertyTypes.map((type, i) => (
            <div
              key={i}
              onClick={() => navigateTo("loan-details")}
              className="group flex flex-col items-stretch overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200 hover:border-[#5ce697] transition-all duration-300 cursor-pointer"
            >
              <div className="flex p-5 gap-4">
                <div className="flex flex-col flex-1 gap-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-[#5ce697]/10 text-[#5ce697] p-2 rounded-lg">
                      <span className="material-symbols-outlined">{type.icon}</span>
                    </div>
                    {type.badge && (
                      <span className="text-[#5ce697] text-xs font-bold uppercase tracking-wider">
                        {type.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{type.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-2">
                    {type.desc}
                  </p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 flex justify-between items-center border-t border-slate-100">
                <span className="text-sm font-medium text-slate-600">{type.rate}</span>
                <button className="flex items-center gap-1 bg-[#5ce697] text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-sm">
                  選擇
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 mx-4 p-6 rounded-xl bg-[#5ce697]/10 border border-[#5ce697]/20">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-[#5ce697] text-3xl">info</span>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">不確定該選哪一個？</h4>
              <p className="text-sm text-slate-600 mb-3">
                我們的專業顧問隨時準備協助您分析不同方案的利弊。
              </p>
              <button className="text-[#5ce697] font-bold text-sm underline flex items-center gap-1">
                聯絡客戶服務
                <span className="material-symbols-outlined text-sm">chat</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </PageWrapper>
  );
}

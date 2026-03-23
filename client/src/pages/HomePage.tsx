/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: 首頁 - 選擇貸款產品
 * Colors: #5ce697 primary, #f6f6f8 bg, slate text
 */
import { AppHeader, BottomNav, PageWrapper, PrimaryButton } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663440805077/Wzyw4EBwj4dVFoJKAimjHH/kcash-hero-banner-UZKW6xc6BBCYsS2coPFEQc.webp";

const loanProducts = [
  {
    icon: "payments",
    title: "AI 私人貸款",
    desc: "7x24 極速私人貸款方案，靈活彈性，應對生活各種所需。",
    cta: "立即申請",
    targetPage: "loan-details" as const,
  },
  {
    icon: "account_balance_wallet",
    title: "清數貸款",
    desc: "整合多項債務，節省高昂利息開支，一筆過清還。",
    cta: "立即申請",
    targetPage: "loan-details" as const,
  },
  {
    icon: "domain",
    title: "業主私人貸款",
    desc: "專為業主而設，特大貸款額及特長還款期，手續簡便。",
    cta: "立即申請",
    targetPage: "property-type" as const,
  },
];

export default function HomePage() {
  const { navigateTo } = useNavigation();

  return (
    <PageWrapper>
      <AppHeader title="K Cash" showBack={false} rightContent={
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <span className="material-symbols-outlined text-slate-600">help_outline</span>
        </button>
      } />

      <main className="pt-16 pb-28 max-w-md mx-auto w-full">
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-b-3xl mb-6">
          <img
            src={HERO_IMG}
            alt="K Cash 貸款"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h2 className="text-2xl font-bold text-white mb-1 leading-tight drop-shadow-lg">
              請選擇貸款產品
            </h2>
            <p className="text-white/80 text-sm drop-shadow">為您量身定制的專業貸款方案</p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="space-y-4 px-4">
          {loanProducts.map((product, i) => (
            <div
              key={i}
              onClick={() => navigateTo(product.targetPage)}
              className="group relative bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#5ce697]/10 p-3 rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-[#5ce697] text-3xl">
                    {product.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{product.desc}</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#5ce697] text-slate-900 text-xs font-bold px-4 py-2 rounded-full uppercase">
                      {product.cta}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 mx-4 p-4 bg-[#5ce697]/5 rounded-xl border border-[#5ce697]/20">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-[#5ce697]">info</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              提示：借定唔借？還得到先好借！
              <br />
              放債人條例規定之最高利率不超過年息 48 厘。
            </p>
          </div>
        </div>
      </main>

      <BottomNav />
    </PageWrapper>
  );
}

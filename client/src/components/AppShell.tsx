import { useNavigation, type PageId } from "@/contexts/NavigationContext";
import { type ReactNode, useEffect, useState } from "react";

/* ─── Top App Bar ─── */
export function AppHeader({
  title,
  showBack = true,
  rightContent,
}: {
  title: string;
  showBack?: boolean;
  rightContent?: ReactNode;
}) {
  const { goBack } = useNavigation();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center justify-between px-4 h-14 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={goBack}
              className="hover:bg-slate-100 transition-colors rounded-full p-2 active:scale-95 duration-150"
            >
              <span className="material-symbols-outlined text-slate-900">
                arrow_back
              </span>
            </button>
          )}
          <h1 className="font-bold text-lg tracking-tight text-slate-900">
            {title}
          </h1>
        </div>
        {rightContent && <div className="flex items-center gap-2">{rightContent}</div>}
      </div>
    </header>
  );
}

/* ─── Step Progress Bar ─── */
export function StepProgress({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label: string;
}) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-3">
        <span className="text-[#5ce697] font-bold text-lg">
          {current} / {total}
        </span>
        <span className="text-slate-500 text-sm font-medium">{label}</span>
      </div>
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#5ce697] rounded-full transition-all duration-500 glow-primary"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ─── Bottom Navigation Bar ─── */
export function BottomNav() {
  const { navigateTo, currentPage } = useNavigation();

  const tabs: { icon: string; label: string; page: PageId; filled?: boolean }[] = [
    { icon: "home", label: "首頁", page: "home" },
    { icon: "account_balance_wallet", label: "貸款", page: "home", filled: true },
    { icon: "notifications", label: "通知", page: "home" },
    { icon: "person", label: "帳戶", page: "home" },
  ];

  const isLoanFlow = currentPage !== "home";

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-md border-t border-slate-100 shadow-[0_-4px_20px_-5px_rgba(92,230,151,0.15)]">
      {tabs.map((tab, i) => {
        const isActive =
          (i === 0 && !isLoanFlow) || (i === 1 && isLoanFlow);
        return (
          <button
            key={i}
            onClick={() => navigateTo(tab.page)}
            className={`flex flex-col items-center justify-center p-2 transition-colors active:scale-90 duration-200 ${
              isActive
                ? "text-black bg-[#5ce697] rounded-xl px-4 py-1 shadow-lg shadow-[#5ce697]/30"
                : "text-slate-400 hover:text-[#5ce697]"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={
                tab.filled && isActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {tab.icon}
            </span>
            <span className="text-[0.75rem] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

/* ─── Page Wrapper with animation ─── */
export function PageWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { direction } = useNavigation();
  const [animClass, setAnimClass] = useState(
    direction === "forward" ? "page-enter" : "page-enter-back"
  );

  useEffect(() => {
    setAnimClass(direction === "forward" ? "page-enter" : "page-enter-back");
  }, [direction]);

  return (
    <div className={`${animClass} ${className}`}>
      {children}
    </div>
  );
}

/* ─── Fixed Bottom Action Bar ─── */
export function BottomActionBar({ children }: { children: ReactNode }) {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-[0_-10px_15px_-3px_rgba(92,230,151,0.15)] rounded-t-xl pb-safe">
      <div className="max-w-md mx-auto flex gap-4 items-center px-4 py-5">
        {children}
      </div>
    </footer>
  );
}

/* ─── Primary Button ─── */
export function PrimaryButton({
  children,
  onClick,
  disabled = false,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-[#5ce697] text-black font-bold py-4 rounded-xl shadow-lg shadow-[#5ce697]/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

/* ─── Section Card ─── */
export function SectionCard({
  icon,
  title,
  children,
  onEdit,
}: {
  icon: string;
  title: string;
  children: ReactNode;
  onEdit?: () => void;
}) {
  return (
    <section className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#5ce697]/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#5ce697]">
              {icon}
            </span>
          </div>
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        {onEdit && (
          <button
            onClick={onEdit}
            className="flex items-center gap-1 text-[#5ce697] font-medium hover:opacity-80 transition-opacity"
          >
            <span className="material-symbols-outlined text-sm">edit</span>
            <span>修改</span>
          </button>
        )}
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

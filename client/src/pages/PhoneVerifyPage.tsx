/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: 手機號碼驗證 (Step 1/6)
 */
import { AppHeader, PageWrapper, PrimaryButton } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";
import { useState, useRef } from "react";

export default function PhoneVerifyPage() {
  const { navigateTo } = useNavigation();
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [smsSent, setSmsSent] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <PageWrapper>
      <AppHeader title="貸款申請" />

      <div className="pt-16 max-w-[430px] mx-auto min-h-screen flex flex-col bg-white shadow-2xl">
        {/* Progress */}
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-6 justify-between">
            <p className="text-slate-900 text-sm font-medium leading-normal uppercase tracking-wider">
              第 1 步 (共 6 步)
            </p>
            <p className="text-[#5ce697] text-sm font-bold leading-normal">17% 已完成</p>
          </div>
          <div className="rounded-full bg-[#5ce697]/20 h-2 w-full overflow-hidden">
            <div className="h-full rounded-full bg-[#5ce697]" style={{ width: "16.6%" }} />
          </div>
        </div>

        {/* Title */}
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-slate-900 tracking-tight text-2xl font-bold leading-tight">
            手機號碼驗證
          </h3>
          <p className="text-slate-600 text-base font-normal leading-normal mt-2">
            為了保障您的帳戶安全，我們將向您的手機號碼發送一次性驗證碼。
          </p>
        </div>

        {/* Phone Input */}
        <div className="flex flex-col gap-4 px-4 py-6">
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-semibold">手機號碼</label>
            <div className="flex gap-2">
              <div className="relative min-w-[110px]">
                <select className="w-full h-14 rounded-xl border border-slate-200 bg-white text-slate-900 focus:border-[#5ce697] focus:ring-1 focus:ring-[#5ce697] text-base font-medium px-3 appearance-none">
                  <option value="+852">🇭🇰 +852</option>
                  <option value="+853">🇲🇴 +853</option>
                  <option value="+86">🇨🇳 +86</option>
                  <option value="+886">🇹🇼 +886</option>
                </select>
              </div>
              <div className="flex-1">
                <input
                  className="w-full h-14 rounded-xl border border-slate-200 bg-white text-slate-900 focus:border-[#5ce697] focus:ring-1 focus:ring-[#5ce697] placeholder:text-slate-400 text-base font-medium px-4"
                  placeholder="請輸入手機號碼"
                  type="tel"
                />
              </div>
            </div>
          </div>
          <PrimaryButton onClick={() => setSmsSent(true)}>
            發送驗證碼
          </PrimaryButton>
        </div>

        {/* Divider */}
        <div className="px-4 py-2 flex items-center gap-4">
          <div className="h-px bg-slate-200 flex-1" />
          <span className="text-xs text-slate-400 font-medium">驗證碼</span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        {/* OTP Input */}
        <div className="px-4 py-6 flex flex-col gap-6">
          <div className="flex justify-between gap-2 max-w-sm mx-auto w-full">
            {otpValues.map((val, i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                className="w-12 h-14 text-center rounded-xl border border-slate-200 bg-white text-xl font-bold text-[#5ce697] focus:border-[#5ce697] focus:ring-1 focus:ring-[#5ce697]"
                maxLength={1}
                placeholder="•"
                type="text"
                value={val}
                onChange={(e) => handleOtpChange(i, e.target.value)}
              />
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-slate-500">
              收不到驗證碼？{" "}
              <button className="text-[#5ce697] font-bold hover:underline">
                0:59 後重新發送
              </button>
            </p>
          </div>
          <PrimaryButton onClick={() => navigateTo("ekyc")}>
            驗證並繼續
          </PrimaryButton>
        </div>

        {/* Trust badges */}
        <div className="mt-auto px-4 pb-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-xs text-center">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>您的資料已進行加密處理，確保安全無虞</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

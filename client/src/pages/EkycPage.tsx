/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: eKYC 身份驗證 (Step 2/6)
 * Flow: Scan ID → Face Recognition → Show extracted info with edit buttons → Confirm & continue
 */
import { AppHeader, PageWrapper, PrimaryButton } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";
import { useState, useRef, useEffect } from "react";

// Demo data simulating eKYC extraction
const DEMO_EKYC_DATA = {
  nameEn: "CHAN Tai Man",
  nameCn: "陳大文",
  idNumber: "A123456(7)",
  dob: "1990-05-15",
  sex: "男 (Male)",
};

type EkycField = {
  key: string;
  label: string;
  labelEn: string;
  icon: string;
  value: string;
  type?: string;
  options?: string[];
};

export default function EkycPage() {
  const { navigateTo } = useNavigation();
  const [phase, setPhase] = useState<"scan" | "verifying" | "confirmed">("scan");
  const [editingField, setEditingField] = useState<string | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  const [fields, setFields] = useState<EkycField[]>([
    { key: "nameEn", label: "英文全名", labelEn: "Full Name (English)", icon: "badge", value: DEMO_EKYC_DATA.nameEn },
    { key: "nameCn", label: "中文全名", labelEn: "Full Name (Chinese)", icon: "translate", value: DEMO_EKYC_DATA.nameCn },
    { key: "idNumber", label: "身份證號碼", labelEn: "HKID Number", icon: "credit_card", value: DEMO_EKYC_DATA.idNumber },
    { key: "dob", label: "出生日期", labelEn: "Date of Birth", icon: "calendar_month", value: DEMO_EKYC_DATA.dob, type: "date" },
    { key: "sex", label: "性別", labelEn: "Sex", icon: "wc", value: DEMO_EKYC_DATA.sex, options: ["男 (Male)", "女 (Female)"] },
  ]);

  // Focus input when editing
  useEffect(() => {
    if (editingField && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingField]);

  const handleStartVerify = () => {
    setPhase("verifying");
    // Simulate verification delay
    setTimeout(() => {
      setPhase("confirmed");
    }, 2000);
  };

  const updateField = (key: string, newValue: string) => {
    setFields((prev) => prev.map((f) => (f.key === key ? { ...f, value: newValue } : f)));
    setEditingField(null);
  };

  // ─── Phase 1: Scan ID & Face ───
  if (phase === "scan" || phase === "verifying") {
    return (
      <PageWrapper>
        <AppHeader title="個人資料 (eKYC)" />

        <div className="pt-16 max-w-md mx-auto min-h-screen flex flex-col">
          {/* Progress */}
          <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-between items-end">
              <p className="text-slate-900 text-base font-bold leading-normal">步驟 2/6</p>
              <p className="text-slate-500 text-sm font-normal leading-normal">Step 2 of 6</p>
            </div>
            <div className="rounded-full bg-slate-200 h-2 w-full overflow-hidden">
              <div className="h-full rounded-full bg-[#5ce697]" style={{ width: "33.33%" }} />
            </div>
          </div>

          <div className="flex flex-col flex-1 px-4">
            {/* Title */}
            <h3 className="text-slate-900 tracking-tight text-2xl font-bold leading-tight py-4">
              請掃描您的香港身份證正面
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              請確保證件清晰可見，避免反光或陰影影響識別效果。
            </p>

            {/* ID Card Upload */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="relative group cursor-pointer">
                <div className="bg-slate-200 flex flex-col items-center justify-center gap-3 rounded-xl aspect-[1.58/1] border-2 border-dashed border-slate-300 hover:border-[#5ce697] transition-colors overflow-hidden bg-gradient-to-br from-slate-300 to-slate-200">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-4xl">
                      add_a_photo
                    </span>
                    <p className="text-slate-600 text-base font-bold leading-tight">
                      香港身份證正面
                    </p>
                    <p className="text-slate-400 text-xs">點擊上傳或拍照</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-[#5ce697] text-slate-900 p-1 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
              </div>
            </div>

            {/* Face Recognition */}
            <div className="mt-4 pb-12">
              <h3 className="text-slate-900 text-lg font-bold leading-tight tracking-tight mb-4">
                人臉識別驗證
              </h3>
              <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-8 rounded-3xl overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 opacity-70" />
                <div className="absolute inset-0 face-scanner-overlay border-[3px] border-[#5ce697]/40 rounded-3xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full border-2 border-[#5ce697] border-dashed opacity-80" />
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <span className="bg-[#5ce697]/80 backdrop-blur-sm text-slate-900 px-4 py-1 rounded-full text-xs font-bold">
                    請將臉部移入圓圈內
                  </span>
                </div>
              </div>

              {phase === "verifying" ? (
                <div className="flex flex-col items-center gap-4 py-4">
                  <div className="w-12 h-12 border-4 border-[#5ce697] border-t-transparent rounded-full animate-spin" />
                  <p className="text-slate-600 font-medium text-sm">正在驗證身份資料...</p>
                  <p className="text-slate-400 text-xs">請稍候，系統正在識別您的證件資料</p>
                </div>
              ) : (
                <PrimaryButton onClick={handleStartVerify}>
                  <span className="material-symbols-outlined">face</span>
                  開始人臉識別
                </PrimaryButton>
              )}
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }

  // ─── Phase 2: Confirmation with editable fields ───
  return (
    <PageWrapper>
      <AppHeader title="個人資料 (eKYC)" />

      <div className="pt-16 max-w-md mx-auto min-h-screen flex flex-col">
        {/* Progress */}
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-6 justify-between items-end">
            <p className="text-slate-900 text-base font-bold leading-normal">步驟 2/6</p>
            <p className="text-slate-500 text-sm font-normal leading-normal">Step 2 of 6</p>
          </div>
          <div className="rounded-full bg-slate-200 h-2 w-full overflow-hidden">
            <div className="h-full rounded-full bg-[#5ce697]" style={{ width: "33.33%" }} />
          </div>
        </div>

        <div className="flex flex-col flex-1 px-4 pb-32">
          {/* Success Banner */}
          <div className="bg-[#5ce697]/10 border border-[#5ce697]/30 rounded-2xl p-5 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#5ce697] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-lg leading-tight">身份驗證成功</h3>
                <p className="text-slate-500 text-xs mt-0.5">Identity Verified Successfully</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              以下資料已從您的身份證中自動識別，請核對並確認。如有錯誤，請點擊「修改」按鈕進行更正。
            </p>
          </div>

          {/* Extracted Fields */}
          <div className="space-y-3">
            {fields.map((field) => (
              <div
                key={field.key}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                {editingField === field.key ? (
                  // ─── Edit Mode ───
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-[#5ce697] text-lg">{field.icon}</span>
                      <span className="text-sm font-bold text-slate-900">{field.label}</span>
                      <span className="text-xs text-slate-400">{field.labelEn}</span>
                    </div>

                    {field.options ? (
                      // Select for sex field
                      <div className="space-y-2">
                        {field.options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => updateField(field.key, opt)}
                            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all font-medium text-sm ${
                              field.value === opt
                                ? "border-[#5ce697] bg-[#5ce697]/5 text-emerald-800"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : field.type === "date" ? (
                      // Date input
                      <div className="flex gap-2">
                        <input
                          ref={editInputRef}
                          type="date"
                          defaultValue={field.value}
                          className="flex-1 h-12 bg-slate-50 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5ce697] px-4 font-medium text-sm border-none"
                          onBlur={(e) => {
                            if (e.target.value) updateField(field.key, e.target.value);
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => setEditingField(null)}
                          className="h-12 px-4 bg-[#5ce697] text-white rounded-xl font-bold text-sm flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-sm">check</span>
                          確認
                        </button>
                      </div>
                    ) : (
                      // Text input
                      <div className="flex gap-2">
                        <input
                          ref={editInputRef}
                          type="text"
                          defaultValue={field.value}
                          className="flex-1 h-12 bg-slate-50 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5ce697] px-4 font-medium text-sm border-none"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              updateField(field.key, (e.target as HTMLInputElement).value);
                            }
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (editInputRef.current) {
                              updateField(field.key, editInputRef.current.value);
                            }
                          }}
                          className="h-12 px-4 bg-[#5ce697] text-white rounded-xl font-bold text-sm flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-sm">check</span>
                          確認
                        </button>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setEditingField(null)}
                      className="mt-2 text-xs text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      取消修改
                    </button>
                  </div>
                ) : (
                  // ─── Display Mode ───
                  <div className="flex items-center gap-3 p-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[#5ce697] text-xl">{field.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 mb-0.5">
                        {field.label} <span className="text-slate-300">|</span> {field.labelEn}
                      </p>
                      <p className="text-slate-900 font-bold text-base truncate">{field.value}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEditingField(field.key)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex-shrink-0"
                    >
                      <span className="material-symbols-outlined text-slate-500 text-sm">edit</span>
                      <span className="text-xs font-semibold text-slate-600">修改</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Info Note */}
          <div className="flex items-start gap-3 mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200/60">
            <span className="material-symbols-outlined text-amber-500 text-lg flex-shrink-0 mt-0.5">info</span>
            <p className="text-xs text-amber-700 leading-relaxed">
              以上資料由系統自動識別，如有任何錯誤請即時修改。確認無誤後，請點擊下方按鈕繼續申請流程。
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-10px_15px_-3px_rgba(92,230,151,0.15)] rounded-t-xl pb-safe">
          <div className="max-w-md mx-auto px-4 py-5">
            <PrimaryButton onClick={() => navigateTo("personal-info")}>
              <span className="material-symbols-outlined">check_circle</span>
              確認資料並繼續
            </PrimaryButton>
          </div>
        </footer>
      </div>
    </PageWrapper>
  );
}

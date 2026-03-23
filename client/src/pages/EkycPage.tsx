/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: eKYC 身份驗證 (Step 2/6)
 */
import { AppHeader, PageWrapper, PrimaryButton } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";

export default function EkycPage() {
  const { navigateTo } = useNavigation();

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
            <PrimaryButton onClick={() => navigateTo("personal-info")}>
              <span className="material-symbols-outlined">face</span>
              開始人臉識別
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

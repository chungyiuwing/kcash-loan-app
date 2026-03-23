/*
 * Design: 翡翠金融 Neo-Oriental Fintech
 * Page: 個人及住址資料 (Step 3/6)
 * Address: estate search → auto-fill address/region/district → floor & room
 */
import { AppHeader, PageWrapper, PrimaryButton, StepProgress } from "@/components/AppShell";
import { useNavigation } from "@/contexts/NavigationContext";
import { searchEstates, type Estate } from "@/data/hk-estates";
import { useState, useRef, useEffect } from "react";

export default function PersonalInfoPage() {
  const { navigateTo } = useNavigation();

  // Estate search state
  const [estateQuery, setEstateQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Estate[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedEstate, setSelectedEstate] = useState<Estate | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Address fields
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");

  // Handle estate search
  const handleEstateSearch = (query: string) => {
    setEstateQuery(query);
    if (query.trim().length > 0) {
      const results = searchEstates(query);
      setSearchResults(results);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
    // Clear auto-filled fields when user changes search
    if (selectedEstate && query !== selectedEstate.name) {
      setSelectedEstate(null);
      setFullAddress("");
      setRegion("");
      setDistrict("");
    }
  };

  // Handle estate selection
  const handleSelectEstate = (estate: Estate) => {
    setSelectedEstate(estate);
    setEstateQuery(estate.name);
    setFullAddress(estate.address);
    setRegion(estate.region);
    setDistrict(estate.district);
    setShowDropdown(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const inputClass =
    "w-full h-14 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5ce697] px-4 font-medium transition-all";
  const readonlyClass =
    "w-full h-14 bg-emerald-50/50 rounded-xl border-none ring-1 ring-emerald-200 px-4 font-medium text-slate-700 cursor-not-allowed";

  return (
    <PageWrapper>
      <AppHeader title="Loan Application" />

      <main className="pt-20 pb-32 max-w-md mx-auto w-full">
        {/* Progress Header */}
        <div className="px-6 pt-4 pb-4">
          <div className="flex justify-between items-end mb-3">
            <span className="text-[#5ce697] font-bold text-2xl tracking-tighter">3 / 6</span>
            <span className="text-slate-500 text-sm font-medium">個人及住址資料</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#5ce697] rounded-full w-1/2 glow-primary" />
          </div>
        </div>

        <form className="px-6 space-y-8 mt-4" onSubmit={(e) => e.preventDefault()}>
          {/* Section 1: Personal Details */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#5ce697] rounded-full" />
              <h2 className="text-[1.25rem] font-bold text-slate-900">個人基本資料</h2>
            </div>
            <div className="space-y-5">
              {/* Nationality */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-500 px-1">國籍 (Nationality)</label>
                <div className="relative">
                  <select className={inputClass + " appearance-none"}>
                    <option>香港 (Hong Kong)</option>
                    <option>中國 (China)</option>
                    <option>其他</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-500 px-1">教育程度 (Education)</label>
                <div className="relative">
                  <select className={inputClass + " appearance-none"}>
                    <option>大學學士 (Bachelor)</option>
                    <option>碩士 (Master)</option>
                    <option>博士 (PhD)</option>
                    <option>中學 (Secondary)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-500 px-1">電子郵件 (Email)</label>
                <input
                  className={inputClass}
                  placeholder="example@email.com"
                  type="email"
                  defaultValue="taiman.chen@email.com"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Address */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#5ce697] rounded-full" />
              <h2 className="text-[1.25rem] font-bold text-slate-900">現居住址</h2>
            </div>
            <div className="space-y-5">
              {/* Home Phone */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-500 px-1">住宅電話 (Home Phone)</label>
                <input
                  className={inputClass}
                  placeholder="2345 6789"
                  type="tel"
                  defaultValue="2345 6789"
                />
              </div>

              {/* Estate Name Search */}
              <div className="space-y-1.5" ref={dropdownRef}>
                <label className="text-sm font-medium text-slate-500 px-1">
                  屋苑 / 大廈名稱 (Estate Name)
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    search
                  </span>
                  <input
                    className="w-full h-14 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5ce697] pl-12 pr-4 font-medium transition-all"
                    placeholder="輸入屋苑名稱搜尋..."
                    value={estateQuery}
                    onChange={(e) => handleEstateSearch(e.target.value)}
                    onFocus={() => {
                      if (searchResults.length > 0) setShowDropdown(true);
                    }}
                  />
                  {selectedEstate && (
                    <span
                      className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#5ce697]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {showDropdown && searchResults.length > 0 && (
                  <div className="absolute z-50 left-6 right-6 bg-white rounded-xl shadow-xl border border-slate-200 max-h-64 overflow-y-auto mt-1">
                    {searchResults.map((estate, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSelectEstate(estate)}
                        className="w-full text-left px-4 py-3 hover:bg-[#5ce697]/5 transition-colors border-b border-slate-100 last:border-b-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#5ce697] text-xl">apartment</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-slate-900 text-sm truncate">{estate.name}</p>
                            <p className="text-xs text-slate-500 truncate">{estate.nameEn}</p>
                            <p className="text-xs text-slate-400 truncate mt-0.5">{estate.address}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                              {estate.district}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* No results */}
                {showDropdown && estateQuery.trim().length > 0 && searchResults.length === 0 && (
                  <div className="absolute z-50 left-6 right-6 bg-white rounded-xl shadow-xl border border-slate-200 p-4 mt-1">
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="material-symbols-outlined">search_off</span>
                      <p className="text-sm">找不到相關屋苑，請嘗試其他關鍵字</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Full Address (auto-filled) */}
              {selectedEstate && (
                <>
                  <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-sm font-medium text-slate-500 px-1">
                      完整地址 (Full Address)
                      <span className="text-[#5ce697] ml-2 text-xs">已自動填入</span>
                    </label>
                    <input className={readonlyClass} value={fullAddress} readOnly />
                  </div>

                  {/* Floor & Room - Side by Side */}
                  <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-500 px-1">樓層 (Floor)</label>
                      <input
                        className={inputClass}
                        placeholder="例：18"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-500 px-1">室號 (Room)</label>
                      <input
                        className={inputClass}
                        placeholder="例：B"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Region & District (auto-filled) */}
                  <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-500 px-1">
                        地區 (Region)
                        <span className="material-symbols-outlined text-[#5ce697] text-xs ml-1 align-middle" style={{ fontVariationSettings: "'FILL' 1" }}>
                          lock
                        </span>
                      </label>
                      <input className={readonlyClass} value={region} readOnly />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-500 px-1">
                        區域 (District)
                        <span className="material-symbols-outlined text-[#5ce697] text-xs ml-1 align-middle" style={{ fontVariationSettings: "'FILL' 1" }}>
                          lock
                        </span>
                      </label>
                      <input className={readonlyClass} value={district} readOnly />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* CTA */}
          <div className="space-y-4 mt-8">
            <PrimaryButton onClick={() => navigateTo("employment")}>
              繼續下一步
            </PrimaryButton>
            <p className="text-xs text-slate-500 text-center leading-relaxed px-4">
              請確保以上資料準確無誤，所有資料將會根據我們的私隱政策受到嚴格保護。
            </p>
          </div>
        </form>
      </main>
    </PageWrapper>
  );
}

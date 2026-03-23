import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type PageId =
  | "home"
  | "property-type"
  | "loan-details"
  | "phone-verify"
  | "ekyc"
  | "personal-info"
  | "employment"
  | "financial"
  | "preview";

interface NavigationContextType {
  currentPage: PageId;
  direction: "forward" | "backward";
  navigateTo: (page: PageId) => void;
  goBack: () => void;
  pageHistory: PageId[];
}

const pageOrder: PageId[] = [
  "home",
  "property-type",
  "loan-details",
  "phone-verify",
  "ekyc",
  "personal-info",
  "employment",
  "financial",
  "preview",
];

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [pageHistory, setPageHistory] = useState<PageId[]>(["home"]);

  const navigateTo = useCallback(
    (page: PageId) => {
      const currentIndex = pageOrder.indexOf(currentPage);
      const targetIndex = pageOrder.indexOf(page);
      setDirection(targetIndex >= currentIndex ? "forward" : "backward");
      setCurrentPage(page);
      setPageHistory((prev) => [...prev, page]);
    },
    [currentPage]
  );

  const goBack = useCallback(() => {
    if (pageHistory.length > 1) {
      const newHistory = [...pageHistory];
      newHistory.pop();
      const previousPage = newHistory[newHistory.length - 1];
      setDirection("backward");
      setCurrentPage(previousPage);
      setPageHistory(newHistory);
    }
  }, [pageHistory]);

  return (
    <NavigationContext.Provider
      value={{ currentPage, direction, navigateTo, goBack, pageHistory }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}

export { pageOrder };
export type { PageId };

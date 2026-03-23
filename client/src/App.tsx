import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { NavigationProvider, useNavigation } from "./contexts/NavigationContext";
import type { PageId } from "./contexts/NavigationContext";

import HomePage from "./pages/HomePage";
import PropertyTypePage from "./pages/PropertyTypePage";
import LoanDetailsPage from "./pages/LoanDetailsPage";
import PhoneVerifyPage from "./pages/PhoneVerifyPage";
import EkycPage from "./pages/EkycPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import EmploymentPage from "./pages/EmploymentPage";
import FinancialPage from "./pages/FinancialPage";
import PreviewPage from "./pages/PreviewPage";

const pageComponents: Record<PageId, React.ComponentType> = {
  "home": HomePage,
  "property-type": PropertyTypePage,
  "loan-details": LoanDetailsPage,
  "phone-verify": PhoneVerifyPage,
  "ekyc": EkycPage,
  "personal-info": PersonalInfoPage,
  "employment": EmploymentPage,
  "financial": FinancialPage,
  "preview": PreviewPage,
};

function PageRouter() {
  const { currentPage } = useNavigation();
  const PageComponent = pageComponents[currentPage];
  return <PageComponent />;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <NavigationProvider>
            <div className="max-w-md mx-auto min-h-screen bg-[#f6f6f8] relative overflow-hidden shadow-2xl">
              <PageRouter />
            </div>
          </NavigationProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import MarginWidthWrapper from "@/components/DashboardUI/MarginWidthWrapper";
import PageWrapper from "@/components/DashboardUI/PageWrapper";
import SideNav from "@/components/DashboardUI/SideNav";
import Header from "@/components/DashboardUI/header";
import HeaderMobile from "@/components/DashboardUI/header-mobile";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex">
        <SideNav />
        <main className="flex-1">
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

import MarginWidthWrapper from "@/components/DashboardUI/MarginWidthWrapper";
import PageWrapper from "@/components/DashboardUI/PageWrapper";
import SideNav from "@/components/DashboardUI/SideNav";
import Header from "@/components/DashboardUI/header";
import HeaderMobile from "@/components/DashboardUI/header-mobile";
import { getServerAuthSession } from "@/server/auth";

const DashboardLayout = async({ children }: { children: React.ReactNode }) => {
  const session = await getServerAuthSession();
  return (
    <div>
      <div className="flex">
        <SideNav />
        <main className="flex-1">
          <MarginWidthWrapper>
            <Header session={session} />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

import ClientHeader from "@/components/ClientHeader";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>
    <TopBar />
    <ClientHeader />
    {children}
    <Footer />
    </main>;
};

export default PagesLayout;

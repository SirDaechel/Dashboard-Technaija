import MobileMenu from "@/components/layout/MobileMenu";
import SideBar from "@/components/layout/SideBar";
import Topnav from "@/components/layout/Topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex items-start justify-start m:flex-col">
        <SideBar />
        <MobileMenu />
        <section className="w-[85%] m:w-full">
          <Topnav />
          <div className="m:mt-20">{children}</div>
        </section>
      </main>
    </>
  );
}

import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="flex justify-between items-center bg-black mt-0 w-full p-2">
          <div>
            <SidebarTrigger />
          </div>
          <div className="max-w-6xl">
            <Header />
          </div>
          <div></div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;

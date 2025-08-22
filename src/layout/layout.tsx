import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="flex justify-between items-center bg-black mt-0 w-full p-2">
          <div className="max-w-[300px]">
            <SidebarTrigger />
          </div>
          <div className="max-w-6xl">
            <Header />
          </div>
          <div></div>
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;

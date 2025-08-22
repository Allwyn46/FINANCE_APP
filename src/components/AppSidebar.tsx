import { Home, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Billing",
    url: "#",
    icon: Inbox,
    submenus: [
      {
        title: "Create Invoice",
        url: "#",
      },
      {
        title: "Generate Estimate",
        url: "#",
      },
      {
        title: "Create Receipts",
        url: "#",
      },
      {
        title: "Markup Calculator",
        url: "#",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-black">
      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {item.submenus?.map((menuitem) => (
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <a href={menuitem.url}>
                            <span>{menuitem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

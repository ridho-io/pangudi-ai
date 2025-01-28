import * as React from "react"
import {
  MessageCirclePlus,
  MessageSquare,
} from "lucide-react"

import { NavRecents } from "@/components/nav-recents"
import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar"

import { Label } from "@/components/ui/label"
import { NavUser } from "./nav-user"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "New Chat",
      url: "#",
      icon: MessageCirclePlus,
    },
  ],
  recents: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      icon: MessageSquare,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0 bg-gray-900" {...props}>
      <SidebarHeader>
        <div className="flex flex-col space-x-2 my-4">
          <Label className="font-bold text-2xl ms-2">Pangudi AI</Label>
          <Label className="font-bold text-sm ms-2">by RPL 1</Label>
        </div>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavRecents recents={data.recents} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

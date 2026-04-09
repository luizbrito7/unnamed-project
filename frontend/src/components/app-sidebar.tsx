"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Brain,
  Target,
  Award,
  Users,
  MessageSquare,
  UsersRound,
  Squirrel,
} from "lucide-react"
import { useRole } from "@/contexts/role-context"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Skills", url: "/skills", icon: Brain },
  { title: "PDI", url: "/pdi", icon: Target },
  { title: "Certificações", url: "/certifications", icon: Award },
  { title: "Reuniões 1:1", url: "/meetings", icon: Users },
  { title: "Feedback", url: "/feedback", icon: MessageSquare },
]

const managerMenuItems = [
  { title: "Time", url: "/team", icon: UsersRound },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { activeRole, user } = useRole()

  const allItems =
    activeRole === "manager"
      ? [...menuItems, ...managerMenuItems]
      : menuItems

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <TooltipProvider delay={200}>
      <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              render={<Link href="/dashboard" />}
              tooltip="Unnamed"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Squirrel className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Unnamed</span>
                <span className="text-xs text-muted-foreground">Plataforma</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {allItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={<Link href={item.url} />}
                    isActive={pathname.startsWith(item.url)}
                    tooltip={item.title}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip={user.name}>
              <Avatar className="size-8">
                <AvatarFallback className="text-xs">{initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-xs text-muted-foreground">{user.email}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
    </TooltipProvider>
  )
}

"use client"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { RoleSwitcher } from "@/components/role-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRole } from "@/contexts/role-context"

export function AppHeader() {
  const { user } = useRole()

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <BreadcrumbNav />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden items-center gap-2 sm:flex">
          <Avatar className="size-7">
            <AvatarFallback className="text-xs">{initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{user.name}</span>
        </div>
        <ThemeToggle />
        <RoleSwitcher />
      </div>
    </header>
  )
}

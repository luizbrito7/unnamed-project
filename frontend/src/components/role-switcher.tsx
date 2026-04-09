"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { useRole, type Role } from "@/contexts/role-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const roleLabels: Record<Role, string> = {
  collaborator: "Colaborador",
  manager: "Gestor",
}

export function RoleSwitcher() {
  const { activeRole, setActiveRole } = useRole()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2 cursor-pointer")}
      >
        {roleLabels[activeRole]}
        <ChevronsUpDown className="size-4 opacity-50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Alternar papel</DropdownMenuLabel>
          {(Object.keys(roleLabels) as Role[]).map((role) => (
            <DropdownMenuItem
              key={role}
              onClick={() => setActiveRole(role)}
              className="gap-2 cursor-pointer"
            >
              <Check
                className={`size-4 ${activeRole === role ? "opacity-100" : "opacity-0"}`}
              />
              {roleLabels[role]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

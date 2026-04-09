"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Role = "collaborator" | "manager"

export interface UserMock {
  name: string
  email: string
  avatarUrl: string
  roles: Role[]
}

export const MOCK_USER: UserMock = {
  name: "Ana Silva",
  email: "ana.silva@unnamed.com",
  avatarUrl: "",
  roles: ["collaborator", "manager"],
}

interface RoleContextValue {
  activeRole: Role
  setActiveRole: (role: Role) => void
  user: UserMock
}

const RoleContext = createContext<RoleContextValue | null>(null)

export function RoleProvider({ children }: { children: ReactNode }) {
  const [activeRole, setActiveRole] = useState<Role>("collaborator")

  return (
    <RoleContext value={{ activeRole, setActiveRole, user: MOCK_USER }}>
      {children}
    </RoleContext>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (!context) {
    throw new Error(
      "useRole must be used within a RoleProvider. Wrap your component tree with <RoleProvider>."
    )
  }
  return context
}

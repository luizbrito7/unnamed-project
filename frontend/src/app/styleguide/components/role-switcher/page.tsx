"use client"

import { RoleProvider, useRole } from "@/contexts/role-context"
import { RoleSwitcher } from "@/components/role-switcher"

function RoleSwitcherDemo() {
  const { activeRole } = useRole()

  return (
    <div className="flex items-center gap-4">
      <RoleSwitcher />
      <span className="text-sm text-muted-foreground">
        Papel ativo: <strong>{activeRole === "collaborator" ? "Colaborador" : "Gestor"}</strong>
      </span>
    </div>
  )
}

export default function RoleSwitcherShowcase() {
  return (
    <div className="p-8 max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight">RoleSwitcher</h1>
      <p className="text-muted-foreground mt-1 mb-8">
        Dropdown para alternar entre os papéis de Colaborador e Gestor.
      </p>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Exemplo interativo</h2>
        <div className="h-px bg-border mb-6" />
        <p className="text-sm text-muted-foreground mb-4">
          Clique no dropdown para alternar entre os papéis. O ícone de check indica o papel ativo.
        </p>
        <RoleProvider>
          <RoleSwitcherDemo />
        </RoleProvider>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">API Reference</h2>
        <div className="h-px bg-border mb-6" />
        <div className="text-sm space-y-2">
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">RoleSwitcher</code> — Não recebe props. Consome <code className="bg-muted px-1.5 py-0.5 rounded text-xs">useRole()</code> internamente.</p>
          <p>Exibe <code className="bg-muted px-1.5 py-0.5 rounded text-xs">DropdownMenu</code> com as opções &quot;Colaborador&quot; e &quot;Gestor&quot;.</p>
          <p>Ícone <code className="bg-muted px-1.5 py-0.5 rounded text-xs">Check</code> marca o papel ativo.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Acessibilidade</h2>
        <div className="h-px bg-border mb-6" />
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Dropdown acessível via teclado (Enter para abrir, setas para navegar)</li>
          <li>Label semântico &quot;Alternar papel&quot; no menu</li>
          <li>Check visual indica o papel atualmente selecionado</li>
        </ul>
      </section>
    </div>
  )
}

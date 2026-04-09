"use client"

import {
  LayoutDashboard,
  Brain,
  Target,
  Award,
  Users,
  MessageSquare,
  UsersRound,
} from "lucide-react"

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

export default function AppSidebarShowcase() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight">AppSidebar</h1>
      <p className="text-muted-foreground mt-1 mb-8">
        Sidebar principal da aplicação com navegação, toggle de papel e modo colapsável por ícone.
      </p>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Itens de menu — Colaborador</h2>
        <div className="h-px bg-border mb-6" />
        <p className="text-sm text-muted-foreground mb-4">
          Os 6 itens base visíveis para todos os usuários.
        </p>
        <div className="rounded-lg border divide-y">
          {menuItems.map((item) => (
            <div key={item.title} className="flex items-center gap-3 px-4 py-3">
              <item.icon className="size-4 text-muted-foreground" />
              <span className="text-sm">{item.title}</span>
              <code className="ml-auto text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{item.url}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Itens de menu — Gestor (adicional)</h2>
        <div className="h-px bg-border mb-6" />
        <p className="text-sm text-muted-foreground mb-4">
          Itens adicionais visíveis apenas quando o papel ativo é &quot;Gestor&quot;.
        </p>
        <div className="rounded-lg border divide-y">
          {managerMenuItems.map((item) => (
            <div key={item.title} className="flex items-center gap-3 px-4 py-3">
              <item.icon className="size-4 text-muted-foreground" />
              <span className="text-sm">{item.title}</span>
              <code className="ml-auto text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{item.url}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Comportamentos</h2>
        <div className="h-px bg-border mb-6" />
        <div className="text-sm space-y-3">
          <div className="rounded-lg border p-4 bg-muted/30">
            <p className="font-medium mb-1">collapsible=&quot;icon&quot;</p>
            <p className="text-muted-foreground">Quando colapsada, mostra apenas ícones (~3rem). Tooltip aparece ao hover sobre cada ícone.</p>
          </div>
          <div className="rounded-lg border p-4 bg-muted/30">
            <p className="font-medium mb-1">Mobile (drawer)</p>
            <p className="text-muted-foreground">No mobile, a sidebar vira Sheet (drawer). Fecha automaticamente ao navegar.</p>
          </div>
          <div className="rounded-lg border p-4 bg-muted/30">
            <p className="font-medium mb-1">SidebarRail</p>
            <p className="text-muted-foreground">Permite toggle entre expanded/collapsed clicando na borda da sidebar.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">API Reference</h2>
        <div className="h-px bg-border mb-6" />
        <div className="text-sm space-y-2">
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">AppSidebar</code> — Não recebe props. Consome <code className="bg-muted px-1.5 py-0.5 rounded text-xs">useRole()</code> para dados do usuário e papel ativo.</p>
          <p>Usa <code className="bg-muted px-1.5 py-0.5 rounded text-xs">collapsible=&quot;icon&quot;</code> — quando colapsada, mostra apenas ícones com tooltip no hover.</p>
          <p>No mobile, vira drawer (Sheet) automaticamente.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Acessibilidade</h2>
        <div className="h-px bg-border mb-6" />
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Atalho de teclado <kbd className="bg-muted px-1.5 py-0.5 rounded text-xs">B</kbd> para toggle da sidebar</li>
          <li>Tooltips nos ícones quando sidebar está colapsada</li>
          <li>Navegação via teclado nos itens do menu</li>
          <li>Item ativo destacado com <code className="bg-muted px-1.5 py-0.5 rounded text-xs">isActive</code></li>
        </ul>
      </section>
    </div>
  )
}

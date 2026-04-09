"use client"

import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { RoleProvider } from "@/contexts/role-context"
import { RoleSwitcher } from "@/components/role-switcher"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export default function AppHeaderShowcase() {
  return (
    <div className="p-8 max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight">AppHeader</h1>
      <p className="text-muted-foreground mt-1 mb-8">
        Header da aplicação com trigger da sidebar, breadcrumb, avatar do usuário e seletor de papel.
      </p>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Composição completa</h2>
        <div className="h-px bg-border mb-6" />
        <p className="text-sm text-muted-foreground mb-4">
          Visualização do header com seus sub-componentes. O SidebarTrigger é omitido pois depende do contexto de sidebar.
        </p>
        <RoleProvider>
          <div className="rounded-lg border overflow-hidden">
            <header className="flex h-14 items-center gap-4 border-b bg-background px-4 md:px-6">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-sm bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">☰</span>
                </div>
                <Separator orientation="vertical" className="mr-2 h-4" />
                <BreadcrumbNav />
              </div>
              <div className="ml-auto flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Avatar className="size-7">
                    <AvatarFallback className="text-xs">AS</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Ana Silva</span>
                </div>
                <RoleSwitcher />
              </div>
            </header>
            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                Conteúdo da página aqui. Use o RoleSwitcher no header para alternar entre papéis.
              </p>
            </div>
          </div>
        </RoleProvider>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Sub-componentes</h2>
        <div className="h-px bg-border mb-6" />
        <div className="text-sm space-y-3">
          <div className="rounded-lg border p-4 bg-muted/30">
            <p className="font-medium mb-1">SidebarTrigger</p>
            <p className="text-muted-foreground">Botão para abrir/fechar a sidebar. Integrado com SidebarProvider.</p>
          </div>
          <div className="rounded-lg border p-4 bg-muted/30">
            <p className="font-medium mb-1">BreadcrumbNav</p>
            <p className="text-muted-foreground">Breadcrumb dinâmico que reflete a rota atual.</p>
          </div>
          <div className="rounded-lg border p-4 bg-muted/30">
            <p className="font-medium mb-1">Avatar + Nome</p>
            <p className="text-muted-foreground">Avatar com fallback (iniciais) e nome do usuário mockado.</p>
          </div>
          <div className="rounded-lg border p-4 bg-muted/30">
            <p className="font-medium mb-1">RoleSwitcher</p>
            <p className="text-muted-foreground">Dropdown para alternar entre papéis Colaborador/Gestor.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">API Reference</h2>
        <div className="h-px bg-border mb-6" />
        <div className="text-sm space-y-2">
          <p><code className="bg-muted px-1.5 py-0.5 rounded text-xs">AppHeader</code> — Não recebe props. Compõe os seguintes sub-componentes:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">SidebarTrigger</code> — Toggle da sidebar</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">BreadcrumbNav</code> — Breadcrumb dinâmico</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">Avatar</code> — Foto/iniciais do usuário</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">RoleSwitcher</code> — Seletor de papel</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Acessibilidade</h2>
        <div className="h-px bg-border mb-6" />
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Usa elemento <code className="bg-muted px-1.5 py-0.5 rounded text-xs">&lt;header&gt;</code> semântico</li>
          <li>Sticky no topo da página (<code className="bg-muted px-1.5 py-0.5 rounded text-xs">sticky top-0</code>)</li>
          <li>Todos os sub-componentes são acessíveis via teclado</li>
        </ul>
      </section>
    </div>
  )
}

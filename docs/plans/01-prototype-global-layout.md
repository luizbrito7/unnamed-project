# Plano: 01 - Layout Global (AppSidebar, AppHeader, RoleSwitcher, Breadcrumb)

## Descricao detalhada

Implementar a estrutura de layout global da aplicacao autenticada do Unnamed. O layout envolve todas as paginas dentro do route group `(app)` e e composto por:

- **AppSidebar**: Sidebar com navegacao principal (Dashboard, Skills, PDI, Certificacoes, 1:1s, Feedback). O item "Time" aparece condicionalmente quando o papel ativo e gestor. Responsiva — vira drawer (Sheet) no mobile.
- **AppHeader**: Header com trigger da sidebar, breadcrumb contextual, avatar do usuario, nome e seletor de papel.
- **RoleSwitcher**: Dropdown no header para alternar entre visao "Colaborador" e "Gestor".
- **BreadcrumbNav**: Breadcrumb dinamico baseado na rota atual.

Todos os dados sao mockados/hardcoded — sem integracao com API.

### Por que
Esta e a fundacao visual da aplicacao. Todas as issues subsequentes de paginas autenticadas dependem deste layout estar funcional para exibir seus conteudos dentro da estrutura sidebar + header.

---

## Mapeamento de cenarios

### Happy path
1. Usuario acessa qualquer rota em `(app)/*` e ve o layout com sidebar a esquerda e conteudo a direita
2. Sidebar exibe os 6 itens base de menu (Dashboard, Skills, PDI, Certificacoes, 1:1s, Feedback)
3. Clicar em um item navega para a pagina correspondente
4. Header exibe breadcrumb atualizado conforme a rota
5. RoleSwitcher permite alternar para "Gestor" — item "Time" aparece na sidebar
6. Alternar de volta para "Colaborador" — item "Time" desaparece

### Edge cases
- Rota com segmentos dinamicos (ex: `/meetings/123`) — breadcrumb exibe "Reunioes > 123" (futuro refinamento com labels)
- Rota raiz `(app)` sem sub-rota — breadcrumb exibe apenas "Home"
- Mobile: sidebar fecha ao navegar (tap em item do menu)
- Estado do papel ativo persiste durante a sessao (via React state, sem persistencia em storage)

### Cenarios de erro
- Nenhum cenario de erro real nesta issue — dados sao 100% mockados
- Se contexto de role nao estiver disponivel (fora do provider), hook `useRole()` lanca erro explicativo

---

## Tabelas de banco necessarias

Nenhuma — todos os dados sao mockados/hardcoded nesta issue de prototipo.

---

## Dependencias externas

### Componentes shadcn a instalar
- `breadcrumb` — para BreadcrumbNav
- `dropdown-menu` — para RoleSwitcher
- `avatar` — para exibicao do avatar no header

```bash
cd frontend && npx shadcn@latest add breadcrumb dropdown-menu avatar
```

### Libs ja disponíveis (nao precisa instalar)
- `lucide-react` — icones para itens do menu
- `next/navigation` (`usePathname`) — para breadcrumb dinamico
- `next/link` — para navegacao no sidebar e breadcrumb
- shadcn: `sidebar`, `sheet`, `button`, `tooltip`, `separator` — ja instalados

---

## Verificacao do Styleguide

### Componentes existentes no styleguide
- O styleguide ja existe em `src/app/styleguide/` com layout e navigation
- `navigation.ts` tem secao "Components" vazia (placeholder)
- Nenhum componente customizado esta documentado ainda

### Componentes novos a documentar no styleguide
1. **AppSidebar** — showcase com variantes (colaborador vs gestor, expanded vs collapsed, desktop vs mobile)
2. **RoleSwitcher** — showcase com alternancia entre papeis
3. **BreadcrumbNav** — showcase com diferentes profundidades de rota
4. **AppHeader** — showcase com composicao completa (trigger + breadcrumb + avatar + role switcher)



---

## Arquivos exatos a criar ou modificar

### 1. Instalar componentes shadcn (CLI)

**Acao**: Executar CLI para adicionar `breadcrumb`, `dropdown-menu`, `avatar`

Arquivos criados automaticamente:
- `src/components/ui/breadcrumb.tsx` (CRIAR via CLI)
- `src/components/ui/dropdown-menu.tsx` (CRIAR via CLI)
- `src/components/ui/avatar.tsx` (CRIAR via CLI)

---

### 2. `src/contexts/role-context.tsx` (CRIAR)

Contexto React para gerenciar papel ativo do usuario.

- Tipo `Role = "collaborator" | "manager"`
- Interface `UserMock` com `name`, `email`, `avatarUrl`, `roles: Role[]`
- Constante `MOCK_USER` com dados hardcoded (ex: "Ana Silva", ambos papeis)
- `RoleContext` com `activeRole`, `setActiveRole`, `user`
- `RoleProvider` componente com estado interno (`useState`)
- `useRole()` hook que consome o contexto (throw se fora do provider)

---

### 3. `src/components/app-sidebar.tsx` (CRIAR)

Sidebar principal da aplicacao usando primitivos shadcn Sidebar (base-nova com `render` prop pattern).

**Comportamento collapsible="icon" (conforme referencia reference-03.png):**
- Quando colapsada, a sidebar mostra apenas os icones dos itens de menu (largura reduzida ~3rem)
- Ao passar o mouse sobre um icone, exibe tooltip com o nome do item (ex: "Settings")
- O `SidebarMenuButton` ja suporta isso nativamente via prop `tooltip` — basta passar `tooltip={item.title}` para cada item
- O componente `Sidebar` deve receber `collapsible="icon"` (nao "offcanvas")
- No mobile, continua virando drawer (Sheet) — comportamento automatico do componente

**Implementacao:**
- Importar: `Sidebar`, `SidebarContent`, `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupContent`, `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton`, `SidebarHeader`, `SidebarFooter`, `SidebarRail`
- Constante `menuItems` com: `{ title, url, icon }` para Dashboard (`/dashboard`), Skills (`/skills`), PDI (`/pdi`), Certificacoes (`/certifications`), 1:1s (`/meetings`), Feedback (`/feedback`)
- Constante `managerMenuItems` com: Time (`/team`)
- Icones lucide: `LayoutDashboard`, `Brain`, `Target`, `Award`, `Users`, `MessageSquare`, `UsersRound`
- Consumir `useRole()` para condicionar exibicao de `managerMenuItems`
- Usar `usePathname()` para marcar item ativo (`isActive` prop)
- Usar `render={<Link href={item.url} />}` no `SidebarMenuButton` (padrao base-nova)
- Passar `tooltip={item.title}` em cada `SidebarMenuButton` para tooltip no modo icon
- Adicionar `SidebarRail` ao final do `Sidebar` para permitir resize/toggle via drag na borda
- SidebarHeader com logo/nome do app (esconde texto quando colapsada, mostra apenas icone)
- SidebarFooter com info do usuario mockado (avatar + nome, esconde nome quando colapsada)

---

### 4. `src/components/role-switcher.tsx` (CRIAR)

Dropdown para alternar papel ativo.

- Importar: `DropdownMenu`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuTrigger`, `DropdownMenuLabel`
- Consumir `useRole()` para ler `activeRole` e `setActiveRole`
- Trigger: botao com icone `ChevronsUpDown` + label do papel ativo ("Colaborador" / "Gestor")
- Content: dois items ("Colaborador", "Gestor") com icone `Check` no item ativo
- Mapa de labels: `{ collaborator: "Colaborador", manager: "Gestor" }`

---

### 5. `src/components/breadcrumb-nav.tsx` (CRIAR)

Breadcrumb dinamico baseado na rota.

- Importar: `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbSeparator`, `BreadcrumbPage`
- Usar `usePathname()` do Next.js
- Mapa de labels legíveis: `{ dashboard: "Dashboard", skills: "Skills", pdi: "PDI", certifications: "Certificacoes", meetings: "Reunioes", feedback: "Feedback", team: "Time" }`
- Gerar segmentos a partir do pathname (split `/`, filtrar vazios)
- Primeiro item: link para `/dashboard` com label "Home"
- Itens intermediarios: `BreadcrumbLink` com `render={<Link href={...} />}`
- Ultimo item: `BreadcrumbPage` (nao clicavel)
- `BreadcrumbSeparator` entre cada item

---

### 6. `src/components/app-header.tsx` (CRIAR)

Header da aplicacao dentro do `SidebarInset`.

- Importar: `SidebarTrigger` do sidebar, `Separator`, `BreadcrumbNav`, `RoleSwitcher`, `Avatar`
- Estrutura flex: lado esquerdo (`SidebarTrigger` + `Separator` vertical + `BreadcrumbNav`) e lado direito (avatar + nome + `RoleSwitcher`)
- Consumir `useRole()` para exibir dados do usuario mockado
- Componente `Avatar` com fallback (iniciais do nome)
- Estilizacao: `border-b`, padding, `sticky top-0`, `z-10`, `bg-background`

---

### 7. `src/app/(app)/layout.tsx` (CRIAR)

Layout do route group `(app)` que envolve todas as paginas autenticadas.

- Importar: `SidebarProvider`, `SidebarInset` do sidebar
- Importar: `RoleProvider` do contexto
- Importar: `AppSidebar`, `AppHeader`
- Nota: `AppSidebar` internamente usa `collapsible="icon"` — quando colapsada mostra apenas icones com tooltip no hover (conforme reference-03.png)
- Estrutura:
  ```
  RoleProvider
    SidebarProvider
      AppSidebar
      SidebarInset
        AppHeader
        <main className="flex-1 p-4 md:p-6">{children}</main>
  ```
- Diretiva `"use client"` nao necessaria se todos os componentes filhos ja sao client components (verificar)

---

### 8. `src/app/(app)/dashboard/page.tsx` (CRIAR)

Pagina placeholder do Dashboard para validar o layout.

- Titulo: "Dashboard"
- Descricao: "Em construcao — conteudo sera adicionado na issue do Dashboard"
- Componente simples com heading e paragrafo

---

### 9. Paginas stub para validar navegacao (CRIAR)

Cada pagina com titulo e descricao placeholder:

- `src/app/(app)/skills/page.tsx` — "Skills"
- `src/app/(app)/pdi/page.tsx` — "PDI"
- `src/app/(app)/certifications/page.tsx` — "Certificacoes"
- `src/app/(app)/meetings/page.tsx` — "Reunioes 1:1"
- `src/app/(app)/feedback/page.tsx` — "Feedback"
- `src/app/(app)/team/page.tsx` — "Time"

Cada uma exporta um componente simples:
```tsx
export default function NomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Titulo</h1>
      <p className="text-muted-foreground">Em construcao</p>
    </div>
  )
}
```

---

### 10. Atualizacao do Styleguide

#### `src/app/styleguide/components/app-sidebar/page.tsx` (CRIAR)
- Showcase do AppSidebar com:
  - Exemplo em modo colaborador (sem item Time)
  - Exemplo em modo gestor (com item Time)
  - Notas sobre responsividade (drawer no mobile)

#### `src/app/styleguide/components/role-switcher/page.tsx` (CRIAR)
- Showcase do RoleSwitcher com:
  - Estado inicial (Colaborador)
  - Interacao de troca de papel

#### `src/app/styleguide/components/breadcrumb-nav/page.tsx` (CRIAR)
- Showcase do BreadcrumbNav com:
  - Rota simples (1 nivel)
  - Rota profunda (2+ niveis)

#### `src/app/styleguide/components/app-header/page.tsx` (CRIAR)
- Showcase do AppHeader completo com todos os sub-componentes

#### `src/app/styleguide/navigation.ts` (MODIFICAR)
- Adicionar 4 itens na secao "Components":
  - `{ name: "AppSidebar", href: "/styleguide/components/app-sidebar" }`
  - `{ name: "AppHeader", href: "/styleguide/components/app-header" }`
  - `{ name: "RoleSwitcher", href: "/styleguide/components/role-switcher" }`
  - `{ name: "BreadcrumbNav", href: "/styleguide/components/breadcrumb-nav" }`

---

### 11. Validacao

- `npm run lint` — zero erros
- `npm run build` — build bem-sucedido
- Verificar navegacao manual entre todas as rotas

---

## Notas tecnicas
- shadcn v4 usa `base-nova` style e `@base-ui/react` como primitivo (nao radix). Usar `render` prop em vez de `asChild`.
- **Sidebar usa `collapsible="icon"`** — quando colapsada, mostra apenas icones (largura ~3rem). Tooltip aparece ao hover sobre cada icone com o nome do item. No mobile, vira drawer (Sheet). Referencia visual: `reference/reference-03.png`
- `SidebarMenuButton` ja suporta tooltip nativamente via prop `tooltip={string}` — tooltip so aparece quando `state === "collapsed"` e nao e mobile
- `SidebarRail` permite ao usuario clicar na borda da sidebar para toggle entre expanded/collapsed
- AGENTS.md avisa que Next.js 16 pode ter breaking changes — consultar docs em `node_modules/next/dist/docs/` se necessario
- Dados 100% mockados/hardcoded — sem integracao com API
- Componentes ficam em `src/components/` (sem subpasta, seguindo padrao existente exceto UI)

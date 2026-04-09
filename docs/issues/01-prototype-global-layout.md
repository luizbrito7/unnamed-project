# 01 - Layout Global (AppSidebar, AppHeader, RoleSwitcher, Breadcrumb)

## Fase
Prototype

## Descricao
Construir a estrutura de layout global da aplicação autenticada. Inclui:
- `AppSidebar`: Sidebar com navegação principal (Dashboard, Skills, PDI, Certificações, 1:1s, Feedback, Time). Responsiva — vira drawer no mobile. Itens de menu do gestor (Time) aparecem condicionalmente.
- `AppHeader`: Header com avatar do usuário, nome e seletor de papel.
- `RoleSwitcher`: Dropdown no header para alternar entre visão colaborador e gestor.
- `BreadcrumbNav`: Breadcrumb para navegação contextual baseado na rota atual.

Todos os dados devem ser mockados/hardcoded. O layout deve envolver todas as páginas autenticadas via route group `(app)`.

## Criterios de aceite
- [x] AppSidebar exibe todos os itens de menu definidos na spec (Dashboard, Skills, PDI, Certificações, 1:1s, Feedback)
- [x] AppSidebar exibe item "Time" apenas quando papel ativo é gestor
- [x] AppSidebar é responsiva: vira drawer (Sheet) no mobile
- [x] AppHeader exibe avatar, nome do usuário e RoleSwitcher
- [x] RoleSwitcher permite alternar entre "Colaborador" e "Gestor" (mockado)
- [x] BreadcrumbNav exibe breadcrumb baseado na rota atual
- [x] Layout envolve todas as rotas do grupo `(app)`
- [x] Navegação entre páginas funciona corretamente via links da sidebar

## Dependencias
- Nenhuma

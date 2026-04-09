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
- [ ] AppSidebar exibe todos os itens de menu definidos na spec (Dashboard, Skills, PDI, Certificações, 1:1s, Feedback)
- [ ] AppSidebar exibe item "Time" apenas quando papel ativo é gestor
- [ ] AppSidebar é responsiva: vira drawer (Sheet) no mobile
- [ ] AppHeader exibe avatar, nome do usuário e RoleSwitcher
- [ ] RoleSwitcher permite alternar entre "Colaborador" e "Gestor" (mockado)
- [ ] BreadcrumbNav exibe breadcrumb baseado na rota atual
- [ ] Layout envolve todas as rotas do grupo `(app)`
- [ ] Navegação entre páginas funciona corretamente via links da sidebar

## Dependencias
- Nenhuma

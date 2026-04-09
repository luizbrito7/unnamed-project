# 16 - Página Meus Liderados (Gestor)

## Fase
Prototype

## Descricao
Criar a página de Meus Liderados (`/team`) exclusiva para gestores. Inclui:
- `TeamMembersList`: Lista/grid de liderados vinculados
- `TeamMemberCard`: Card com avatar, nome, cargo, mini radar preview, % PDI, ações pendentes
- `TeamFilters`: Filtros por departamento ou status do PDI

Dados mockados com 3-4 liderados com dados variados.

## Criterios de aceite
- [ ] Página acessível na rota `/team` dentro do layout autenticado (visão gestor)
- [ ] TeamMembersList exibe liderados mockados em grid/lista
- [ ] TeamMemberCard com avatar, nome, cargo, mini radar, % PDI e ações pendentes
- [ ] TeamFilters filtram localmente por departamento e status do PDI
- [ ] Cards clicáveis (navegam para `/team/:id`)
- [ ] Estado vazio com mensagem explicativa sobre convites
- [ ] Layout responsivo (grid 3→2→1 colunas)

## Dependencias
- 01-prototype-global-layout

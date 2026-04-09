# 09 - Página PDI (Plano de Desenvolvimento Individual)

## Fase
Prototype

## Descricao
Criar a página de PDI (`/pdi`) para criação e acompanhamento de metas. Inclui:
- `PdiHeader`: Título do PDI, período, status badge e barra de progresso geral
- `PdiStatusBadge`: Badge colorido (draft, active, completed, cancelled)
- `GoalsList`: Lista de metas do PDI
- `GoalCard`: Card de meta com título, descrição, prazo, prioridade badge, status badge, barra de progresso
- `GoalProgressSlider`: Slider de 0-100% para atualizar progresso
- `AddGoalDialog`: Modal para criar nova meta (título, descrição, prazo, prioridade, skill vinculada)
- `EditGoalDialog`: Modal para editar meta existente
- `CreatePdiDialog`: Modal para criar novo PDI (título, período)
- `PdiFilters`: Filtros por status e prioridade
- `LinkedSkillBadge`: Badge mostrando skill vinculada à meta

Dados mockados com PDI ativo e 4-5 metas em diferentes estados.

## Criterios de aceite
- [ ] Página acessível na rota `/pdi` dentro do layout autenticado
- [ ] PdiHeader com título, período e barra de progresso geral mockados
- [ ] PdiStatusBadge com cores distintas por status
- [ ] GoalsList exibe metas mockadas em diferentes estados
- [ ] GoalCard completo com todos os elementos visuais (título, descrição, prazo, prioridade, status, progresso)
- [ ] GoalProgressSlider funcional visualmente (arrasta e atualiza barra)
- [ ] AddGoalDialog abre via botão "Nova meta" com formulário completo
- [ ] EditGoalDialog abre via ícone de edição no GoalCard
- [ ] CreatePdiDialog abre via botão "Novo PDI"
- [ ] PdiFilters filtram metas localmente por status e prioridade
- [ ] LinkedSkillBadge clicável nas metas que possuem skill vinculada
- [ ] Menu de 3 pontos com opções: editar, excluir
- [ ] Botões "Ativar PDI", "Finalizar PDI", "Cancelar PDI" visíveis conforme status
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout

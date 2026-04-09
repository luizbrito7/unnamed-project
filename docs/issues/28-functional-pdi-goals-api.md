# 28 - PDI & Goals CRUD API

## Fase
Functional

## Descricao
Implementar API para gerenciamento de PDIs e metas:
- **PDI**: POST /pdi (criar), GET /pdi (ativo), GET /pdi/history (finalizados), PATCH /pdi/:id (atualizar status: draft→active→completed/cancelled)
- **Goals**: POST /pdi/:id/goals (criar meta), PATCH /pdi/:id/goals/:goalId (editar, atualizar progresso, mudar status), DELETE /pdi/:id/goals/:goalId (remover)
- Regras: só 1 PDI ativo por vez; prazo da meta não pode ser no passado; título obrigatório; pelo menos 1 meta para ativar; skill vinculada opcional.

## Criterios de aceite
- [ ] POST /pdi cria novo PDI com status `draft` (apenas se não há PDI ativo)
- [ ] GET /pdi retorna PDI ativo com suas metas
- [ ] GET /pdi/history retorna PDIs com status completed/cancelled
- [ ] PATCH /pdi/:id permite transições de status válidas (draft→active, active→completed/cancelled)
- [ ] POST /pdi/:id/goals cria meta com título, descrição, prazo, prioridade, skill vinculada
- [ ] PATCH /pdi/:id/goals/:goalId atualiza meta (progresso, status, campos editáveis)
- [ ] DELETE /pdi/:id/goals/:goalId remove meta
- [ ] Validações: prazo futuro, título obrigatório, mínimo 1 meta para ativar
- [ ] Barra de progresso geral calculada automaticamente
- [ ] Apenas o dono do PDI pode gerenciá-lo

## Dependencias
- 21-functional-api-boilerplate

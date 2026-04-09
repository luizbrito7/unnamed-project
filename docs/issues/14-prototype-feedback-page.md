# 14 - Página de Feedback

## Fase
Prototype

## Descricao
Criar a página de Feedback (`/feedback`) para visualização de feedbacks recebidos e enviados. Inclui:
- `FeedbackTabs`: Tabs "Recebidos" e "Enviados"
- `FeedbackCard`: Card com autor, tipo badge, skill vinculada, conteúdo e data
- `FeedbackTypeBadge`: Badge por tipo (skill_assessment, general, praise, improvement)
- `FeedbackFilters`: Filtros por tipo e skill

Dados mockados com 4-5 feedbacks de tipos variados.

## Criterios de aceite
- [ ] Página acessível na rota `/feedback` dentro do layout autenticado
- [ ] Tabs "Recebidos" e "Enviados" funcionais (alternância local)
- [ ] FeedbackCard exibe autor, tipo badge, skill vinculada (quando houver), conteúdo e data
- [ ] FeedbackTypeBadge com cores distintas por tipo
- [ ] FeedbackFilters filtram localmente por tipo e skill
- [ ] Estado vazio diferente para recebidos e enviados
- [ ] Feedbacks são read-only (sem edição)
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout

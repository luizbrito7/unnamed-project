# 05 - Página Dashboard

## Fase
Prototype

## Descricao
Criar a página de Dashboard (`/dashboard`) com visão geral do usuário. Inclui componentes com dados mockados:
- `WelcomeCard`: Card de boas-vindas com nome do usuário
- `SkillsSummaryCard`: Resumo de skills com mini radar preview ou CTA para cadastrar
- `PdiProgressCard`: Resumo do PDI ativo com barra de progresso ou CTA para criar
- `CertificationsCard`: Resumo de certificações em andamento
- `UpcomingMeetingCard`: Próxima reunião 1:1 ou última registrada
- `RecentFeedbackCard`: Últimos feedbacks recebidos
- `ManagerTeamSummaryCard`: (Visível apenas para gestor) Resumo do time

Deve exibir estados vazios com CTAs quando não há dados, e estados preenchidos com dados mockados.

## Criterios de aceite
- [ ] Página acessível na rota `/dashboard` dentro do layout autenticado
- [ ] WelcomeCard com saudação contextual e nome mockado
- [ ] SkillsSummaryCard com dados mockados (contagem, mini radar ou CTA)
- [ ] PdiProgressCard com barra de progresso mockada ou CTA
- [ ] CertificationsCard com certificações mockadas em andamento
- [ ] UpcomingMeetingCard com data de reunião mockada
- [ ] RecentFeedbackCard com feedbacks mockados
- [ ] ManagerTeamSummaryCard visível apenas em modo gestor
- [ ] Cards clicáveis com navegação para páginas correspondentes
- [ ] Layout responsivo (grid 3→2→1 colunas)
- [ ] Skeleton loaders mockados para estado de carregamento

## Dependencias
- 01-prototype-global-layout

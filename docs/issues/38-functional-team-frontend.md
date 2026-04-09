# 38 - Team + Assessment Frontend Integration (Gestor)

## Fase
Functional

## Descricao
Integrar as páginas de gestão de time (P16, P17, P18) com a API real:
- **Meus Liderados (P16)**: Carregar lista de liderados via API, TeamMemberCard com dados reais (mini radar, % PDI, ações)
- **Detalhe do Liderado (P17)**: Carregar dados completos do liderado via API. GiveFeedbackDialog envia feedback via API.
- **Avaliar Liderado (P18)**: Carregar skills do liderado, preencher sliders, submeter avaliações em lote via API.

## Criterios de aceite
- [ ] P16: Liderados carregados da API com dados resumidos
- [ ] P16: TeamFilters filtram localmente
- [ ] P16: Cards navegam para /team/:id
- [ ] P17: Dados completos do liderado carregados da API (radar, PDI, certificações, reuniões)
- [ ] P17: GiveFeedbackDialog envia feedback via API
- [ ] P17: Botão "Avaliar Skills" navega para /team/:id/assess
- [ ] P18: Skills do liderado carregadas com autoavaliação para comparação
- [ ] P18: SubmitAssessmentButton salva avaliações em lote via API
- [ ] P18: Botão cancelar volta sem salvar
- [ ] Skeleton loaders e toasts em todas as páginas

## Dependencias
- 16-prototype-team-list-page
- 17-prototype-team-member-detail-page
- 18-prototype-assess-team-member-page
- 37-functional-team-api

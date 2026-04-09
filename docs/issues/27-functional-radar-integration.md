# 27 - Radar Data API + Frontend Integration

## Fase
Functional

## Descricao
Implementar API para dados do radar e integrar com a página de Radar (P08):
- **API**: GET /skills/radar — retorna dados agregados para os gráficos de radar (skills agrupadas por tipo, último score de autoavaliação, último score do gestor, scores anteriores para comparação temporal)
- **Frontend**: Integrar gráficos de radar com dados reais. RadarComparisonToggle carrega camada do gestor. RadarTimelineSelector carrega comparação temporal. StrengthsWeaknessesSummary calculado a partir dos dados reais.

## Criterios de aceite
- [ ] GET /skills/radar retorna dados estruturados para montar o radar
- [ ] Dados incluem: skills por tipo, último score auto, último score gestor, scores anteriores
- [ ] Frontend: radares renderizam com dados reais da API
- [ ] RadarComparisonToggle exibe/oculta camada de avaliação do gestor
- [ ] RadarTimelineSelector carrega scores de avaliação anterior para comparação
- [ ] StrengthsWeaknessesSummary atualiza baseado em scores reais
- [ ] Mensagem orientativa quando menos de 3 skills avaliadas
- [ ] Loading states com skeleton

## Dependencias
- 08-prototype-radar-skills-page
- 26-functional-skill-assessments-api

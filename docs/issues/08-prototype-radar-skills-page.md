# 08 - Página Radar de Skills

## Fase
Prototype

## Descricao
Criar a página Radar de Skills (`/skills/radar`) com gráficos de radar para visualização de competências. Inclui:
- `HardskillsRadarChart`: Gráfico de radar com hardskills mockadas
- `SoftskillsRadarChart`: Gráfico de radar com softskills mockadas
- `RadarComparisonToggle`: Toggle para exibir camada de avaliação do gestor
- `RadarTimelineSelector`: Seletor de período para comparar radar atual vs. anterior
- `RadarLegend`: Legenda do gráfico (autoavaliação vs. gestor, atual vs. anterior)
- `StrengthsWeaknessesSummary`: Cards de "Pontos Fortes" e "Pontos a Melhorar"

Necessita de biblioteca de gráficos (recharts ou chart.js). Dados mockados com pelo menos 5 skills por tipo.

## Criterios de aceite
- [ ] Página acessível na rota `/skills/radar` dentro do layout autenticado
- [ ] Dois gráficos de radar lado a lado (hardskills e softskills)
- [ ] Gráficos renderizam com dados mockados (mínimo 5 skills cada)
- [ ] RadarComparisonToggle adiciona camada de avaliação do gestor (cor diferente)
- [ ] RadarTimelineSelector permite selecionar período (linha sólida vs. tracejada)
- [ ] RadarLegend exibe legendas corretas para camadas ativas
- [ ] Hover no radar mostra tooltip com nome da skill e score
- [ ] StrengthsWeaknessesSummary exibe top 3 fortes e top 3 a melhorar
- [ ] Mensagem orientativa quando menos de 3 skills avaliadas
- [ ] Responsivo: radares empilham verticalmente em telas pequenas

## Dependencias
- 01-prototype-global-layout

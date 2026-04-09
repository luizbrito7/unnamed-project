# 17 - Página Detalhe do Liderado (Gestor)

## Fase
Prototype

## Descricao
Criar a página de Detalhe do Liderado (`/team/:id`) para o gestor visualizar informações completas de um colaborador. Inclui:
- `CollaboratorHeader`: Nome, cargo e departamento do liderado
- `CollaboratorRadar`: Radar de skills do liderado (hardskills + softskills)
- `CollaboratorPdiSummary`: Resumo do PDI ativo com lista de metas
- `CollaboratorCertifications`: Lista de certificações do liderado
- `CollaboratorMeetingsHistory`: Últimas reuniões 1:1 com este liderado
- `GiveFeedbackButton`: Botão para abrir modal de feedback
- `GiveFeedbackDialog`: Modal para enviar feedback (tipo, skill opcional, conteúdo)

Visão read-only dos dados do liderado. Dados mockados.

## Criterios de aceite
- [ ] Página acessível na rota `/team/:id` dentro do layout autenticado (visão gestor)
- [ ] CollaboratorHeader com nome, cargo e departamento mockados
- [ ] CollaboratorRadar com gráficos de radar mockados (hardskills + softskills)
- [ ] CollaboratorPdiSummary com resumo do PDI e metas mockadas
- [ ] CollaboratorCertifications com certificações mockadas
- [ ] CollaboratorMeetingsHistory com reuniões mockadas
- [ ] GiveFeedbackButton abre GiveFeedbackDialog
- [ ] GiveFeedbackDialog com campos: tipo, skill (opcional), conteúdo
- [ ] Botão "Avaliar Skills" redireciona para `/team/:id/assess`
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout
- 08-prototype-radar-skills-page (reuso do componente de radar)

# Unnamed — Especificação Completa

Plataforma de gestão de PDI (Plano de Desenvolvimento Individual) para colaboradores e gestores.

---

## 1. Overview

### Objetivo Principal

O Unnamed é uma plataforma web para facilitar a gestão de Planos de Desenvolvimento Individual (PDI). Permite que colaboradores criem, acompanhem e atualizem seus planos de desenvolvimento profissional, enquanto gestores acompanham o progresso de seus liderados e fornecem feedback estruturado.

### Proposta de Valor

- **Visibilidade clara** dos pontos fortes e áreas de melhoria através de gráficos de radar (hardskills e softskills)
- **Gestão estruturada** de metas, prazos e progresso de desenvolvimento
- **Alinhamento contínuo** entre colaborador e gestor via registro de 1:1s e feedback
- **Acompanhamento de certificações** profissionais como parte do plano de carreira

### Público-alvo

- **Colaboradores**: profissionais que desejam estruturar e acompanhar seu desenvolvimento de carreira
- **Gestores**: líderes que acompanham e orientam o desenvolvimento de seus liderados

### Casos de Uso Principais

1. Colaborador cria seu PDI com metas e prazos, avalia suas skills e acompanha progresso
2. Gestor visualiza o radar de skills e o PDI dos liderados, fornece feedback e avaliações
3. Em reuniões 1:1, colaborador e gestor revisam o PDI, registram discussões e definem ações
4. Colaborador cadastra certificações desejadas e acompanha seu progresso de estudo/obtenção

### Arquitetura

- **Frontend**: Next.js 16, React 19, Tailwind v4, shadcn v4 (thin client)
- **API**: Express, TypeScript, Prisma, Zod, jose (fat server — toda lógica de negócio)
- **Infra**: Supabase (Auth JWT + PostgreSQL + Storage)

---

## 2. Pages (Páginas)

### 2.1 Páginas Públicas (sem autenticação)

| # | Página | Rota | Descrição | Propósito |
|---|--------|------|-----------|-----------|
| P01 | Login | `/login` | Tela de login com email/senha | Autenticação do usuário via Supabase Auth |
| P02 | Cadastro | `/register` | Tela de registro de novo usuário | Criação de conta com dados básicos |
| P03 | Recuperar Senha | `/forgot-password` | Formulário de recuperação de senha | Envio de email para reset de senha |
| P04 | Redefinir Senha | `/reset-password` | Formulário de nova senha (link do email) | Conclusão do fluxo de reset |

### 2.2 Páginas Autenticadas — Colaborador & Gestor

| # | Página | Rota | Descrição | Propósito |
|---|--------|------|-----------|-----------|
| P05 | Dashboard | `/dashboard` | Visão geral do usuário com resumos e CTAs | Ponto de entrada principal após login |
| P06 | Perfil | `/profile` | Dados pessoais e configurações do usuário | Edição de nome, avatar, cargo, departamento |
| P07 | Skills | `/skills` | Listagem e gerenciamento de habilidades | Cadastro, autoavaliação e visualização de skills |
| P08 | Radar de Skills | `/skills/radar` | Gráficos de radar para hardskills e softskills | Visualização de pontos fortes e áreas de melhoria |
| P09 | PDI | `/pdi` | Plano de Desenvolvimento Individual ativo | Criação, edição e acompanhamento de metas |
| P10 | Histórico de PDIs | `/pdi/history` | Lista de PDIs anteriores | Consulta a planos finalizados/cancelados |
| P11 | Certificações | `/certifications` | Gerenciamento de certificações | Cadastro e acompanhamento de certificações desejadas/obtidas |
| P12 | Reuniões 1:1 | `/meetings` | Lista e registro de reuniões 1:1 | Histórico de reuniões com o gestor |
| P13 | Detalhe da Reunião | `/meetings/:id` | Detalhes de uma reunião específica | Pauta, notas, ações definidas |
| P14 | Feedback | `/feedback` | Feedbacks recebidos e enviados | Visualização de feedbacks de skills e desempenho |
| P15 | Vínculo com Gestor | `/manager` | Definição e gerenciamento do vínculo com gestor | Convite, aceite e status do vínculo |

### 2.3 Páginas Exclusivas — Visão do Gestor

| # | Página | Rota | Descrição | Propósito |
|---|--------|------|-----------|-----------|
| P16 | Meus Liderados | `/team` | Lista de colaboradores vinculados | Visão geral do progresso de cada liderado |
| P17 | Detalhe do Liderado | `/team/:id` | Dashboard individual do liderado | Radar, PDI, certificações e histórico de 1:1 do colaborador |
| P18 | Avaliar Liderado | `/team/:id/assess` | Avaliação de skills do liderado | Avaliação do gestor para comparação no radar |

---

## 3. Components (Componentes)

### 3.1 Layout Global

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `AppSidebar` | Sidebar com navegação principal: Dashboard, Skills, PDI, Certificações, 1:1s, Feedback, Time (gestor). Responsivo: vira drawer no mobile | Itens de menu, papel do usuário (collaborator/manager) |
| `AppHeader` | Header com avatar do usuário, nome, e seletor de papel (para quem acumula papéis) | Dados do perfil, papel ativo |
| `RoleSwitcher` | Dropdown no header para alternar entre visão de colaborador e gestor | Papel atual, papéis disponíveis |
| `BreadcrumbNav` | Breadcrumb para navegação contextual | Rota atual |

### 3.2 P01 — Login

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `LoginForm` | Formulário com campos email e senha, botão de login | Email, senha |
| `ForgotPasswordLink` | Link para página de recuperação de senha | — |
| `RegisterLink` | Link para página de cadastro | — |

### 3.3 P02 — Cadastro

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `RegisterForm` | Formulário com nome completo, email, senha, confirmação de senha, cargo e departamento | Dados de cadastro |

### 3.4 P03 — Recuperar Senha

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `ForgotPasswordForm` | Campo de email e botão para enviar link de recuperação | Email |

### 3.5 P04 — Redefinir Senha

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `ResetPasswordForm` | Campos de nova senha e confirmação | Nova senha |

### 3.6 P05 — Dashboard

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `WelcomeCard` | Card de boas-vindas com nome do usuário e saudação contextual | Nome do usuário |
| `SkillsSummaryCard` | Resumo de skills cadastradas com mini radar preview ou CTA para cadastrar | Contagem de skills, scores |
| `PdiProgressCard` | Resumo do PDI ativo com barra de progresso geral ou CTA para criar | PDI ativo, % de conclusão |
| `CertificationsCard` | Resumo de certificações em andamento | Certificações com status `studying`/`scheduled` |
| `UpcomingMeetingCard` | Próxima reunião 1:1 agendada ou última reunião registrada | Data, participantes |
| `RecentFeedbackCard` | Últimos feedbacks recebidos | Lista de feedbacks recentes |
| `ManagerTeamSummaryCard` | (Gestor) Resumo do time: quantidade de liderados, PDIs ativos, ações pendentes | Dados agregados do time |

### 3.7 P06 — Perfil

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `ProfileForm` | Formulário de edição: nome, cargo, departamento | Dados do perfil |
| `AvatarUpload` | Upload e preview de foto de perfil | Avatar URL |
| `ManagerInfo` | Card mostrando gestor vinculado e status do vínculo | Dados do vínculo |

### 3.8 P07 — Skills

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `SkillsTabs` | Tabs para alternar entre "Hardskills" e "Softskills" | Tipo selecionado |
| `SkillCategoryGroup` | Agrupamento de skills por categoria (ex: Cloud, Backend, Comunicação) | Categoria, lista de skills |
| `SkillCard` | Card de uma skill individual com nome, descrição, score atual e indicador visual (1-5 estrelas ou barras) | Skill, último score |
| `SkillAssessmentSlider` | Slider/seletor de 1 a 5 para autoavaliação rápida inline | Score atual |
| `AddSkillDialog` | Modal para cadastrar nova skill: nome, tipo, categoria, descrição | Categorias disponíveis |
| `AddCategoryDialog` | Modal para criar categoria personalizada | Nome, tipo |
| `SkillSearchInput` | Campo de busca/filtro de skills | Query de busca |
| `AssessmentHistoryDrawer` | Drawer lateral mostrando histórico de avaliações de uma skill | Lista de assessments com data e score |

### 3.9 P08 — Radar de Skills

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `HardskillsRadarChart` | Gráfico de radar com hardskills do usuário | Skills hardskill com scores |
| `SoftskillsRadarChart` | Gráfico de radar com softskills do usuário | Skills softskill com scores |
| `RadarComparisonToggle` | Toggle para exibir camada de avaliação do gestor no radar | Flag de comparação |
| `RadarTimelineSelector` | Seletor de período para comparar radar atual vs. anterior | Datas de avaliações |
| `RadarLegend` | Legenda do gráfico (autoavaliação vs. gestor, atual vs. anterior) | Camadas ativas |
| `StrengthsWeaknessesSummary` | Cards de "Pontos Fortes" e "Pontos a Melhorar" derivados do radar | Skills com maiores e menores scores |

### 3.10 P09 — PDI

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `PdiHeader` | Título do PDI, período, status badge e barra de progresso geral | PDI ativo |
| `PdiStatusBadge` | Badge colorido com status do PDI (draft, active, completed, cancelled) | Status |
| `GoalsList` | Lista de metas do PDI | Lista de goals |
| `GoalCard` | Card de uma meta: título, descrição, prazo, prioridade badge, status badge, barra de progresso | Goal |
| `GoalProgressSlider` | Slider de 0-100% para atualizar progresso de uma meta | Progresso atual |
| `AddGoalDialog` | Modal para criar nova meta: título, descrição, prazo, prioridade, skill vinculada (opcional) | Skills disponíveis |
| `EditGoalDialog` | Modal para editar meta existente | Goal atual |
| `CreatePdiDialog` | Modal para criar novo PDI: título, período | — |
| `PdiFilters` | Filtros por status e prioridade das metas | Valores de filtro |
| `LinkedSkillBadge` | Badge mostrando skill vinculada à meta | Skill |

### 3.11 P10 — Histórico de PDIs

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `PdiHistoryList` | Lista de PDIs anteriores com título, período, status e % de conclusão | Lista de PDIs |
| `PdiHistoryCard` | Card resumo de cada PDI passado | PDI com resumo de metas |

### 3.12 P11 — Certificações

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `CertificationsTabs` | Tabs por status: Todas, Em Estudo, Agendadas, Obtidas | Status selecionado |
| `CertificationCard` | Card de certificação: nome, provedor, nível, status badge, data alvo/obtenção | User certification |
| `AddCertificationDialog` | Modal com busca autocomplete no catálogo + opção de cadastrar nova | Catálogo de certificações |
| `CertificationCatalogSearch` | Campo de busca com autocomplete no catálogo pré-populado | Query, resultados do catálogo |
| `EditCertificationDialog` | Modal para atualizar status, datas, link do certificado | User certification |
| `CertificationStatusBadge` | Badge colorido por status (planned, studying, scheduled, obtained, expired) | Status |

### 3.13 P12 — Reuniões 1:1

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `MeetingsTimeline` | Timeline cronológica de reuniões 1:1 | Lista de meetings |
| `MeetingCard` | Card resumo: data, participantes, quantidade de ações pendentes | Meeting |
| `NewMeetingDialog` | Modal para registrar nova reunião: data, pauta | — |
| `MeetingsDateFilter` | Filtro por intervalo de datas | Data início, data fim |

### 3.14 P13 — Detalhe da Reunião

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `MeetingHeader` | Data, participantes e status geral (ações pendentes) | Meeting |
| `MeetingAgenda` | Seção de pauta da reunião (editável) | Agenda text |
| `MeetingNotes` | Seção de notas/anotações da reunião (rich text editável) | Notes text |
| `ActionItemsList` | Lista de ações definidas na reunião | Action items |
| `ActionItemRow` | Linha de uma ação: descrição, responsável, prazo, checkbox de conclusão, meta vinculada (opcional) | Action item |
| `AddActionItemForm` | Formulário inline para adicionar nova ação | Goals disponíveis para vincular |

### 3.15 P14 — Feedback

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `FeedbackTabs` | Tabs: Recebidos, Enviados | Direção selecionada |
| `FeedbackCard` | Card de feedback: autor, tipo badge, skill vinculada (se houver), conteúdo, data | Feedback |
| `FeedbackTypeBadge` | Badge por tipo (skill_assessment, general, praise, improvement) | Tipo |
| `FeedbackFilters` | Filtros por tipo e skill | Valores de filtro |

### 3.16 P15 — Vínculo com Gestor

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `CurrentManagerCard` | Card com dados do gestor atual e status do vínculo | Manager assignment |
| `InviteManagerForm` | Formulário para convidar gestor por email ou buscar na plataforma | Email ou query de busca |
| `UserSearchInput` | Campo de busca de usuários na plataforma com autocomplete | Query, resultados |
| `PendingInvitesCard` | Card com convites pendentes (enviados e recebidos) | Lista de convites pending |
| `AcceptRejectButtons` | Botões para aceitar ou rejeitar convite de vínculo | Assignment ID |

### 3.17 P16 — Meus Liderados (Gestor)

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `TeamMembersList` | Lista/grid de liderados vinculados | Lista de collaborators |
| `TeamMemberCard` | Card de liderado: avatar, nome, cargo, mini radar preview, % PDI, ações pendentes 1:1 | Collaborator summary |
| `TeamFilters` | Filtros por departamento ou status do PDI | Valores de filtro |

### 3.18 P17 — Detalhe do Liderado (Gestor)

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `CollaboratorHeader` | Nome, cargo, departamento do liderado | Profile do liderado |
| `CollaboratorRadar` | Radar de skills do liderado (hardskills + softskills) | Skills e scores do liderado |
| `CollaboratorPdiSummary` | Resumo do PDI ativo do liderado com lista de metas | PDI e goals do liderado |
| `CollaboratorCertifications` | Lista de certificações do liderado | Certificações do liderado |
| `CollaboratorMeetingsHistory` | Últimas reuniões 1:1 com este liderado | Meetings do par |
| `GiveFeedbackButton` | Botão para abrir modal de feedback | — |
| `GiveFeedbackDialog` | Modal para enviar feedback textual (tipo, skill opcional, conteúdo) | Skills do liderado |

### 3.19 P18 — Avaliar Liderado (Gestor)

| Componente | Descrição | Dados |
|------------|-----------|-------|
| `AssessmentSkillsList` | Lista de skills do liderado agrupadas por categoria | User skills do liderado |
| `AssessmentSlider` | Slider 1-5 para cada skill com campo de notas opcional | Score, notes |
| `AssessmentComparisonIndicator` | Indicador mostrando autoavaliação do liderado ao lado da avaliação do gestor | Autoavaliação score |
| `SubmitAssessmentButton` | Botão para salvar todas as avaliações | — |

---

## 4. Behaviors (Comportamentos)

### 4.1 Auth & Sessão

#### Login (P01)
- **Submeter login**: Validação client-side (email válido, senha não vazia) → chamada à API → sucesso: redireciona para `/dashboard` | erro: exibe toast com mensagem ("Credenciais inválidas", "Erro de conexão")
- **Sessão expirada**: Redireciona automaticamente para `/login` com mensagem informativa
- **Loading**: Botão de login desabilitado com spinner durante requisição

#### Cadastro (P02)
- **Submeter cadastro**: Validações — nome obrigatório, email válido, senha mínima 8 caracteres, confirmação de senha igual → API cria conta → sucesso: redireciona para `/login` com toast de sucesso | erro: exibe mensagem (email já cadastrado, etc.)
- **Campos opcionais**: Cargo e departamento podem ser preenchidos depois no perfil

#### Recuperar Senha (P03)
- **Submeter email**: Validação de email → API envia link → exibe mensagem de sucesso independente de o email existir ou não (segurança)

#### Redefinir Senha (P04)
- **Submeter nova senha**: Validação (mínimo 8 chars, confirmação) → API atualiza → redireciona para `/login` com toast
- **Link expirado**: Exibe mensagem e link para solicitar novo reset

### 4.2 Dashboard (P05)

- **Estado vazio**: Cards de skills, PDI e certificações exibem CTAs ("Cadastrar suas skills", "Criar seu PDI") em vez de dados vazios
- **Cards clicáveis**: Cada card summary redireciona para a página correspondente ao ser clicado
- **Gestor**: Vê `ManagerTeamSummaryCard` com dados agregados do time, clicável para `/team`
- **Atualização**: Dados carregados no mount, com skeleton loaders durante carregamento

### 4.3 Perfil (P06)

- **Editar perfil**: Campos editáveis inline ou via formulário → botão "Salvar" → API PATCH → toast de sucesso/erro
- **Upload de avatar**: Abre file picker, preview da imagem antes de confirmar → upload para Supabase Storage → atualiza URL no perfil
- **Validação avatar**: Aceita apenas imagens (jpg, png, webp), máximo 2MB

### 4.4 Skills (P07)

- **Adicionar skill**: Clique no botão "+" → abre `AddSkillDialog` → preenche nome, seleciona tipo e categoria → salva → skill aparece na lista
- **Autoavaliação rápida**: Deslizar `SkillAssessmentSlider` no card → ao soltar, salva automaticamente (debounce de 500ms) → cria novo registro em `skill_assessments`
- **Ver histórico**: Clique no card da skill → abre `AssessmentHistoryDrawer` com lista cronológica de avaliações
- **Criar categoria**: Clique em "Nova categoria" → `AddCategoryDialog` → nome e tipo → salva
- **Busca/filtro**: Digitar no `SkillSearchInput` filtra skills em tempo real (client-side)
- **Deletar skill**: Ação disponível no card via menu de 3 pontos → confirmação → remove skill e avaliações associadas
- **Loading**: Skeleton cards durante carregamento inicial
- **Estado vazio**: Mensagem orientativa com CTA para adicionar primeira skill

### 4.5 Radar de Skills (P08)

- **Visualização padrão**: Dois radares lado a lado (hardskills e softskills) com scores de autoavaliação
- **Comparação com gestor**: Toggle `RadarComparisonToggle` ativa camada adicional no radar com scores do gestor (cor diferente)
- **Comparação temporal**: `RadarTimelineSelector` permite selecionar avaliação anterior → radar mostra duas camadas: atual vs. selecionada (linha sólida vs. tracejada)
- **Hover no radar**: Tooltip mostrando nome da skill, score exato e diferença em relação à comparação
- **Pontos fortes/fracos**: `StrengthsWeaknessesSummary` atualiza automaticamente baseado nos scores visíveis
- **Mínimo de skills**: Radar só é exibido com pelo menos 3 skills avaliadas; caso contrário, exibe mensagem orientativa
- **Responsivo**: Em telas pequenas, radares empilham verticalmente

### 4.6 PDI (P09)

- **Criar PDI**: Botão "Novo PDI" (disponível apenas se não há PDI ativo) → `CreatePdiDialog` → título e período → cria com status `draft`
- **Ativar PDI**: Botão "Ativar" no PDI em `draft` → muda status para `active`
- **Adicionar meta**: Botão "Nova meta" → `AddGoalDialog` → título, descrição, prazo, prioridade, skill vinculada (opcional) → salva → aparece na lista
- **Atualizar progresso**: Deslizar `GoalProgressSlider` → salva automaticamente (debounce) → atualiza barra de progresso geral do PDI
- **Mudar status da meta**: Dropdown no `GoalCard` → selecionar novo status → salva
- **Editar meta**: Clique no ícone de edição → `EditGoalDialog` com dados atuais → salva alterações
- **Deletar meta**: Menu de 3 pontos → confirmação → remove meta
- **Completar PDI**: Quando todas as metas estão completas ou canceladas, botão "Finalizar PDI" muda status para `completed`
- **Cancelar PDI**: Ação via menu → confirmação → muda status para `cancelled`
- **Filtros**: `PdiFilters` filtra metas por status e prioridade (client-side)
- **Skill vinculada**: `LinkedSkillBadge` clicável, redireciona para a skill na página de Skills
- **Validações**: Prazo não pode ser no passado; título obrigatório; pelo menos 1 meta para ativar

### 4.7 Histórico de PDIs (P10)

- **Listagem**: PDIs com status `completed` ou `cancelled` ordenados por data de atualização
- **Clique no card**: Abre o PDI em modo somente leitura (mesma página P09 com edição desabilitada)
- **Estado vazio**: Mensagem "Nenhum PDI finalizado ainda"

### 4.8 Certificações (P11)

- **Adicionar certificação**: Botão "+" → `AddCertificationDialog` → busca no catálogo via `CertificationCatalogSearch` (autocomplete com debounce de 300ms) → seleciona → define data alvo e status inicial → salva
- **Certificação não encontrada**: Link "Cadastrar nova" no dialog → formulário expandido para nome, provedor, nível, URL
- **Atualizar status**: Dropdown no `CertificationCard` → seleciona novo status → salva | se `obtained`: solicita data de obtenção e link do certificado via `EditCertificationDialog`
- **Editar certificação**: Clique no card → `EditCertificationDialog` → edita campos → salva
- **Remover certificação**: Menu de 3 pontos → confirmação → remove
- **Tabs**: Filtram por status (client-side)
- **Vencimento**: Certificações com status `obtained` e prazo de validade podem mudar para `expired` automaticamente (verificação no carregamento)

### 4.9 Reuniões 1:1 (P12)

- **Registrar reunião**: Botão "Nova Reunião" → `NewMeetingDialog` → data e pauta → salva → redireciona para detalhe (P13)
- **Pré-requisito**: Necessário ter gestor vinculado (status `active`) para registrar reunião
- **Timeline**: Reuniões listadas cronologicamente com `MeetingCard` mostrando resumo
- **Filtro por data**: `MeetingsDateFilter` filtra por intervalo
- **Clique no card**: Navega para `/meetings/:id`
- **Estado vazio**: Mensagem com CTA para registrar primeira reunião

### 4.10 Detalhe da Reunião (P13)

- **Editar pauta/notas**: Campos de texto editáveis com salvamento automático (debounce 1s) ou botão "Salvar"
- **Adicionar ação**: `AddActionItemForm` inline → descrição, responsável (colaborador ou gestor), prazo, meta vinculada (opcional) → salva → aparece na lista
- **Concluir ação**: Checkbox na `ActionItemRow` → muda status para `done` → salva
- **Desfazer conclusão**: Desmarcar checkbox → volta para `pending`
- **Meta vinculada**: Se ação vinculada a uma meta do PDI, mostra badge clicável
- **Deletar ação**: Ícone de lixeira → confirmação → remove
- **Permissão**: Ambos (colaborador e gestor do par) podem editar

### 4.11 Feedback (P14)

- **Visualização**: Tabs separam feedbacks recebidos e enviados
- **Filtros**: Por tipo de feedback e por skill
- **Card de feedback**: Mostra autor, tipo (badge colorido), skill vinculada, conteúdo e data
- **Feedback não editável**: Uma vez enviado, feedback não pode ser alterado (registro imutável)
- **Estado vazio**: Mensagem orientativa diferente para recebidos ("Nenhum feedback recebido ainda") e enviados

### 4.12 Vínculo com Gestor (P15)

- **Convidar gestor**: `InviteManagerForm` → busca por email ou nome (`UserSearchInput` com autocomplete) → envia convite → vínculo criado com status `pending`
- **Aceitar convite**: `AcceptRejectButtons` → aceita → status muda para `active`
- **Rejeitar convite**: Botão rejeitar → confirmação → status muda para `inactive`
- **Desvincular**: Ação no `CurrentManagerCard` → confirmação → status muda para `inactive`
- **Regra**: Apenas 1 gestor ativo por vez; convidar novo gestor desativa o anterior automaticamente
- **Notificação**: Convite pendente aparece como badge na sidebar/header do gestor convidado

### 4.13 Meus Liderados — Gestor (P16)

- **Listagem**: Grid/lista de liderados vinculados com `TeamMemberCard`
- **Card**: Mini radar preview, % de progresso do PDI, quantidade de ações pendentes
- **Clique no card**: Navega para `/team/:id`
- **Filtros**: Por departamento, status do PDI
- **Estado vazio**: "Nenhum liderado vinculado" com explicação de como colaboradores enviam convite

### 4.14 Detalhe do Liderado — Gestor (P17)

- **Visão read-only**: Gestor vê radar, PDI, certificações e histórico de 1:1s do liderado, mas não edita
- **Dar feedback**: `GiveFeedbackButton` → `GiveFeedbackDialog` → seleciona tipo, skill (opcional), escreve conteúdo → salva → aparece no feedback do liderado
- **Link para avaliar**: Botão "Avaliar Skills" redireciona para `/team/:id/assess`

### 4.15 Avaliar Liderado — Gestor (P18)

- **Lista de skills**: Skills do liderado agrupadas por categoria com `AssessmentSlider` para cada
- **Comparação inline**: `AssessmentComparisonIndicator` mostra a autoavaliação do liderado ao lado do slider do gestor
- **Notas opcionais**: Campo de texto abaixo de cada skill para justificar a nota
- **Submeter**: `SubmitAssessmentButton` salva todas as avaliações de uma vez → cria registros em `skill_assessments` com `assessed_by` = gestor → atualiza radar comparativo do liderado
- **Cancelar**: Botão cancelar descarta alterações e volta para o detalhe do liderado
- **Loading**: Botão desabilitado com spinner durante salvamento

### 4.16 Comportamentos Globais

- **Loading states**: Todos os carregamentos de dados exibem skeleton loaders nos componentes
- **Toasts**: Ações de sucesso e erro exibem toasts no canto superior direito (auto-dismiss em 5s)
- **Confirmação destrutiva**: Ações de exclusão e cancelamento exibem dialog de confirmação
- **Responsividade**: Sidebar vira drawer no mobile; grids adaptam de 3→2→1 coluna
- **Navegação por papel**: Itens de menu exclusivos do gestor (Time, Avaliar) aparecem apenas para usuários com role `manager`
- **404**: Página genérica para rotas inexistentes
- **403**: Tentativa de acesso a recurso não autorizado exibe página de acesso negado
- **Offline**: Não há suporte offline na v1; exibe mensagem de erro de conexão

---

## Resumo dos Modelos de Dados

Referência completa em `docs/produto/fases-do-projeto.md`:

- `profiles` — dados do usuário
- `manager_assignments` — vínculo colaborador↔gestor
- `skill_categories` — categorias de skills
- `skills` — catálogo de habilidades
- `user_skills` — skills do usuário
- `skill_assessments` — avaliações (auto e gestor)
- `development_plans` — PDIs
- `goals` — metas do PDI
- `certifications_catalog` — catálogo de certificações
- `user_certifications` — certificações do usuário
- `meetings` — reuniões 1:1
- `meeting_action_items` — ações das reuniões
- `feedback` — feedbacks textuais

# CresceRadar — Índice de Issues

## Fase 1: Prototype (Protótipo Visual)

| # | Issue | Status |
|---|-------|--------|
| 01 | [Layout Global (AppSidebar, AppHeader, RoleSwitcher, Breadcrumb)](01-prototype-global-layout.md) | pendente |
| 02 | [Página de Login](02-prototype-login-page.md) | pendente |
| 03 | [Página de Cadastro](03-prototype-register-page.md) | pendente |
| 04 | [Páginas de Recuperação e Redefinição de Senha](04-prototype-password-recovery-pages.md) | pendente |
| 05 | [Página Dashboard](05-prototype-dashboard-page.md) | pendente |
| 06 | [Página de Perfil](06-prototype-profile-page.md) | pendente |
| 07 | [Página de Skills](07-prototype-skills-page.md) | pendente |
| 08 | [Página Radar de Skills](08-prototype-radar-skills-page.md) | pendente |
| 09 | [Página PDI](09-prototype-pdi-page.md) | pendente |
| 10 | [Página Histórico de PDIs](10-prototype-pdi-history-page.md) | pendente |
| 11 | [Página de Certificações](11-prototype-certifications-page.md) | pendente |
| 12 | [Página de Reuniões 1:1](12-prototype-meetings-list-page.md) | pendente |
| 13 | [Página Detalhe da Reunião](13-prototype-meeting-detail-page.md) | pendente |
| 14 | [Página de Feedback](14-prototype-feedback-page.md) | pendente |
| 15 | [Página Vínculo com Gestor](15-prototype-manager-link-page.md) | pendente |
| 16 | [Página Meus Liderados (Gestor)](16-prototype-team-list-page.md) | pendente |
| 17 | [Página Detalhe do Liderado (Gestor)](17-prototype-team-member-detail-page.md) | pendente |
| 18 | [Página Avaliar Liderado (Gestor)](18-prototype-assess-team-member-page.md) | pendente |
| 19 | [Páginas de Erro (404, 403)](19-prototype-error-pages.md) | pendente |

## Fase 2: Functional (Funcionalidade)

| # | Issue | Status |
|---|-------|--------|
| 20 | [Schema do Banco de Dados (Prisma) e Seed](20-functional-database-schema.md) | pendente |
| 21 | [API Boilerplate (Express, TypeScript, Middleware)](21-functional-api-boilerplate.md) | pendente |
| 22 | [Autenticação (Supabase Auth + JWT + Frontend)](22-functional-auth-integration.md) | pendente |
| 23 | [Profile API + Frontend Integration](23-functional-profile-api.md) | pendente |
| 24 | [Skills & Categorias CRUD API](24-functional-skills-api.md) | pendente |
| 25 | [Skills Frontend Integration](25-functional-skills-frontend.md) | pendente |
| 26 | [Skill Assessments API](26-functional-skill-assessments-api.md) | pendente |
| 27 | [Radar Data API + Frontend Integration](27-functional-radar-integration.md) | pendente |
| 28 | [PDI & Goals CRUD API](28-functional-pdi-goals-api.md) | pendente |
| 29 | [PDI & Goals Frontend Integration](29-functional-pdi-frontend.md) | pendente |
| 30 | [Certificações API (Catálogo + User Certifications)](30-functional-certifications-api.md) | pendente |
| 31 | [Certificações Frontend Integration](31-functional-certifications-frontend.md) | pendente |
| 32 | [Manager Assignments API](32-functional-manager-assignments-api.md) | pendente |
| 33 | [Manager Link Frontend Integration](33-functional-manager-frontend.md) | pendente |
| 34 | [Meetings & Action Items API](34-functional-meetings-api.md) | pendente |
| 35 | [Meetings Frontend Integration](35-functional-meetings-frontend.md) | pendente |
| 36 | [Feedback API + Frontend Integration](36-functional-feedback-integration.md) | pendente |
| 37 | [Team Endpoints + Manager Assessment API](37-functional-team-api.md) | pendente |
| 38 | [Team + Assessment Frontend Integration (Gestor)](38-functional-team-frontend.md) | pendente |
| 39 | [Dashboard Aggregation API + Frontend Integration](39-functional-dashboard-integration.md) | pendente |
| 40 | [Comportamentos Globais (Loading, Toasts, Responsividade, Roles)](40-functional-global-behaviors.md) | pendente |

---

## Grafo de Dependências

```
FASE 1 — PROTOTYPE
═══════════════════

(sem dependências)          (dependem de 01-layout)
┌──────────────┐            ┌──────────────────────────────────────────┐
│ 02-login     │            │ 05-dashboard                             │
│ 03-register  │            │ 06-profile                               │
│ 04-password  │            │ 07-skills                                │
│ 19-errors    │            │ 08-radar ─────────────┐                  │
└──────────────┘            │ 09-pdi ──► 10-history  │                  │
                            │ 11-certifications      │                  │
      01-layout ◄───────────│ 12-meetings ──► 13-detail                │
                            │ 14-feedback            │                  │
                            │ 15-manager             │                  │
                            │ 16-team                │                  │
                            │ 17-team-detail ◄───────┘  (reuso radar)  │
                            │    └──► 18-assess                        │
                            └──────────────────────────────────────────┘

FASE 2 — FUNCTIONAL
════════════════════

20-database
    └──► 21-api-boilerplate
              ├──► 22-auth ──► 23-profile
              │         └──► 40-global-behaviors
              ├──► 24-skills-api ──► 25-skills-frontend
              │         └──► 26-assessments-api ──► 27-radar-integration
              │                        └──► 37-team-api ──► 38-team-frontend
              ├──► 28-pdi-api ──► 29-pdi-frontend
              ├──► 30-certifications-api ──► 31-certifications-frontend
              ├──► 32-manager-api ──► 33-manager-frontend
              │         └──► 34-meetings-api ──► 35-meetings-frontend
              │         └──► 37-team-api
              └──► 36-feedback-integration

39-dashboard-integration ◄── 22 + 24 + 28 + 30 + 34 (depende de múltiplas APIs)
```

---

## Resumo

| Fase | Quantidade |
|------|------------|
| Prototype | 19 issues |
| Functional | 21 issues |
| **Total** | **40 issues** |

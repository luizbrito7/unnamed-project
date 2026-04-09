# 20 - Schema do Banco de Dados (Prisma) e Seed

## Fase
Functional

## Descricao
Configurar o Prisma ORM com o schema completo do banco de dados PostgreSQL (Supabase). Criar todos os modelos conforme a spec:

- `profiles` — dados do usuário (id, name, email, role, avatar_url, job_title, department)
- `manager_assignments` — vínculo colaborador↔gestor (status: pending, active, inactive)
- `skill_categories` — categorias de skills (type: hardskill/softskill)
- `skills` — catálogo de habilidades
- `user_skills` — skills do usuário
- `skill_assessments` — avaliações (auto e gestor, score 1-5, assessed_by)
- `development_plans` — PDIs (status: draft, active, completed, cancelled)
- `goals` — metas do PDI (status, priority, progress 0-100, skill vinculada opcional)
- `certifications_catalog` — catálogo de certificações (nome, provedor, nível, URL)
- `user_certifications` — certificações do usuário (status: planned, studying, scheduled, obtained, expired)
- `meetings` — reuniões 1:1 (data, agenda, notes, participantes)
- `meeting_action_items` — ações das reuniões (status: pending, done, meta vinculada opcional)
- `feedback` — feedbacks textuais (type: skill_assessment, general, praise, improvement)

Criar seed com dados de exemplo para desenvolvimento.

## Criterios de aceite
- [ ] Prisma configurado com conexão ao PostgreSQL (Supabase)
- [ ] Todos os modelos definidos no schema.prisma
- [ ] Relacionamentos entre modelos corretos (foreign keys, cascading)
- [ ] Enums definidos para status, tipos, roles, prioridades
- [ ] Migrations geradas e aplicáveis
- [ ] Seed script populando dados de exemplo para desenvolvimento
- [ ] Script npm para rodar migrations e seed

## Dependencias
- Nenhuma

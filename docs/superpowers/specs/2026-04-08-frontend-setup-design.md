# Frontend Setup — Next.js 15 + Tailwind v4 + shadcn/ui

**Date:** 2026-04-08

## Context

Setup de um projeto frontend limpo em `frontend/` no diretório raiz do monorepo. O objetivo é ter uma base moderna, sem boilerplate desnecessário, pronta para desenvolvimento com Next.js 15, Tailwind CSS v4 e shadcn/ui.

## Versões

| Ferramenta    | Versão      |
|---------------|-------------|
| Next.js       | 15 (LTS)    |
| Tailwind CSS  | v4          |
| shadcn/ui     | latest      |
| TypeScript    | incluído via create-next-app |
| Node.js       | 20 ou 22 (LTS ativo) |
| Package manager | npm       |

## Abordagem

Opção A: `create-next-app` com Tailwind integrado + `shadcn init`.

Caminho oficial com versões testadas em conjunto. A flag `--empty` garante projeto limpo sem boilerplate de UI.

## Estrutura Esperada

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── lib/
│       └── utils.ts           ← cn helper (criado pelo shadcn)
├── components/                ← criado pelo shadcn
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── components.json            ← config do shadcn
```

## Passos de Execução

1. **Scaffold** — `npx create-next-app@latest frontend --empty --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
2. **shadcn init** — `cd frontend && npx shadcn@latest init` com:
   - Estilo: `default`
   - Base color: a escolher no prompt interativo (ex: neutral, slate, zinc)
   - CSS variables: yes
3. **Verificação** — `npm run dev` deve subir sem erros na porta 3000

## Fora de Escopo

- Componentes shadcn pré-instalados
- Prettier, lint-staged, ou configurações extras de ESLint
- CI/CD ou Docker

# 21 - API Boilerplate (Express, TypeScript, Middleware)

## Fase
Functional

## Descricao
Configurar o servidor API Express com TypeScript. Inclui:
- Setup do projeto Express com TypeScript
- Middleware de error handling global (erros conhecidos e desconhecidos)
- Middleware de validação com Zod (request body, params, query)
- Middleware de autenticação JWT (verificação do token Supabase via jose)
- Middleware de autorização por role (collaborator, manager)
- Middleware de CORS
- Estrutura de rotas organizada por domínio (auth, profile, skills, pdi, certifications, meetings, feedback, team)
- Logger básico
- Health check endpoint

## Criterios de aceite
- [ ] Projeto Express + TypeScript configurado e buildável
- [ ] Middleware de error handling retorna respostas JSON padronizadas
- [ ] Middleware Zod valida body, params e query com mensagens de erro claras
- [ ] Middleware JWT verifica e decodifica token Supabase
- [ ] Middleware de role verifica papel do usuário
- [ ] CORS configurado para o frontend
- [ ] Estrutura de rotas por domínio
- [ ] Endpoint GET /health retorna 200
- [ ] Scripts npm: dev, build, start

## Dependencias
- 20-functional-database-schema

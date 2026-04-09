# 30 - Certificações API (Catálogo + User Certifications)

## Fase
Functional

## Descricao
Implementar API para gerenciamento de certificações:
- **Catálogo**: GET /certifications/catalog (busca com autocomplete), POST /certifications/catalog (cadastrar nova certificação no catálogo)
- **User Certifications**: GET /certifications (listar do usuário, filtráveis por status), POST /certifications (vincular certificação do catálogo ao usuário), PATCH /certifications/:id (atualizar status, datas, link), DELETE /certifications/:id (remover)
- Status: planned, studying, scheduled, obtained, expired
- Verificação automática de expiração no carregamento

## Criterios de aceite
- [ ] GET /certifications/catalog retorna resultados de busca por nome (autocomplete)
- [ ] POST /certifications/catalog cadastra nova certificação no catálogo
- [ ] GET /certifications retorna certificações do usuário com filtro por status
- [ ] POST /certifications vincula certificação do catálogo ao usuário
- [ ] PATCH /certifications/:id atualiza status, data alvo, data obtenção, link
- [ ] DELETE /certifications/:id remove certificação do usuário
- [ ] Verificação automática: obtained com validade expirada → expired
- [ ] Validações Zod em todos os endpoints

## Dependencias
- 21-functional-api-boilerplate

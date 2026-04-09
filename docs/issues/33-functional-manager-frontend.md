# 33 - Manager Link Frontend Integration

## Fase
Functional

## Descricao
Integrar a página de Vínculo com Gestor (P15) com a API real:
- Carregar dados do vínculo atual e convites pendentes via API
- InviteManagerForm busca usuários via API (autocomplete) e envia convite
- AcceptRejectButtons aceitam/rejeitam convites via API
- Desvincular gestor via API com confirmação
- Atualizar estado da página após cada operação

## Criterios de aceite
- [ ] Dados do vínculo e convites carregados da API ao montar
- [ ] UserSearchInput busca usuários via GET /users/search (autocomplete)
- [ ] InviteManagerForm envia convite via API
- [ ] AcceptRejectButtons aceitam/rejeitam via API
- [ ] Desvincular gestor via API com confirmação
- [ ] Badge de convite pendente na sidebar/header do gestor convidado
- [ ] Toasts de sucesso/erro em todas as operações
- [ ] Estado atualizado após cada operação sem reload

## Dependencias
- 15-prototype-manager-link-page
- 32-functional-manager-assignments-api

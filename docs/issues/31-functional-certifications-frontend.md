# 31 - Certificações Frontend Integration

## Fase
Functional

## Descricao
Integrar a página de Certificações (P11) com a API real:
- Carregar certificações do usuário via API
- AddCertificationDialog busca no catálogo via API (autocomplete com debounce 300ms)
- Cadastrar nova certificação no catálogo quando não encontrada
- Atualizar status via dropdown com chamada à API
- EditCertificationDialog salva alterações via API
- Remover certificação via API com confirmação
- Tabs filtram localmente por status

## Criterios de aceite
- [ ] Certificações carregadas da API ao montar a página
- [ ] CertificationCatalogSearch busca no catálogo via API (debounce 300ms)
- [ ] AddCertificationDialog vincula certificação ao usuário via API
- [ ] Cadastrar nova certificação no catálogo quando não encontrada
- [ ] Atualização de status via API com validações
- [ ] Ao marcar "obtained": solicita data de obtenção e link via EditCertificationDialog
- [ ] EditCertificationDialog salva alterações via API
- [ ] Remover certificação via API com confirmação
- [ ] Tabs filtram localmente
- [ ] Skeleton loaders e toasts

## Dependencias
- 11-prototype-certifications-page
- 30-functional-certifications-api

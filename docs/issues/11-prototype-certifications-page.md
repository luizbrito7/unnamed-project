# 11 - Página de Certificações

## Fase
Prototype

## Descricao
Criar a página de Certificações (`/certifications`) para gerenciamento de certificações profissionais. Inclui:
- `CertificationsTabs`: Tabs por status (Todas, Em Estudo, Agendadas, Obtidas)
- `CertificationCard`: Card com nome, provedor, nível, status badge, data alvo/obtenção
- `AddCertificationDialog`: Modal com busca autocomplete no catálogo + opção de cadastrar nova
- `CertificationCatalogSearch`: Campo de busca com autocomplete mockado
- `EditCertificationDialog`: Modal para atualizar status, datas, link do certificado
- `CertificationStatusBadge`: Badge colorido por status (planned, studying, scheduled, obtained, expired)

Dados mockados com 4-5 certificações em diferentes status.

## Criterios de aceite
- [ ] Página acessível na rota `/certifications` dentro do layout autenticado
- [ ] Tabs funcionais: Todas, Em Estudo, Agendadas, Obtidas (filtro local)
- [ ] CertificationCard exibe todos os dados visuais (nome, provedor, nível, badge, data)
- [ ] CertificationStatusBadge com cores distintas por status
- [ ] AddCertificationDialog abre via botão "+"
- [ ] CertificationCatalogSearch com autocomplete mockado
- [ ] Link "Cadastrar nova" no dialog quando certificação não encontrada
- [ ] EditCertificationDialog abre ao clicar no card
- [ ] Menu de 3 pontos com opção "Remover" (com confirmação)
- [ ] Estado vazio com CTA
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout

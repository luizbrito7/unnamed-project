# 10 - Página Histórico de PDIs

## Fase
Prototype

## Descricao
Criar a página de Histórico de PDIs (`/pdi/history`) para consulta a planos finalizados ou cancelados. Inclui:
- `PdiHistoryList`: Lista de PDIs anteriores
- `PdiHistoryCard`: Card resumo com título, período, status e % de conclusão

Dados mockados com 2-3 PDIs passados.

## Criterios de aceite
- [ ] Página acessível na rota `/pdi/history` dentro do layout autenticado
- [ ] PdiHistoryList exibe PDIs mockados com status `completed` e `cancelled`
- [ ] PdiHistoryCard exibe título, período, status badge e % de conclusão
- [ ] Cards clicáveis (navegam para visualização read-only do PDI)
- [ ] Ordenação por data de atualização (mais recente primeiro)
- [ ] Estado vazio com mensagem "Nenhum PDI finalizado ainda"
- [ ] Layout responsivo

## Dependencias
- 01-prototype-global-layout
- 09-prototype-pdi-page

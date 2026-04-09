# 29 - PDI & Goals Frontend Integration

## Fase
Functional

## Descricao
Integrar as páginas de PDI (P09) e Histórico de PDIs (P10) com a API real:
- Carregar PDI ativo e metas via API
- CreatePdiDialog cria PDI via API
- AddGoalDialog/EditGoalDialog salva metas via API
- GoalProgressSlider atualiza progresso via API (debounce)
- Transições de status do PDI (ativar, finalizar, cancelar) via API
- Mudança de status de metas via API
- Deletar meta via API com confirmação
- Histórico de PDIs carregado via API
- Visualização read-only de PDIs finalizados

## Criterios de aceite
- [ ] PDI ativo carregado da API ao montar a página
- [ ] CreatePdiDialog cria PDI via API
- [ ] AddGoalDialog cria meta via API
- [ ] EditGoalDialog edita meta via API
- [ ] GoalProgressSlider atualiza progresso via API (debounce)
- [ ] Botões de status (ativar, finalizar, cancelar) chamam API
- [ ] Deletar meta via API com confirmação
- [ ] Página de histórico carrega PDIs finalizados da API
- [ ] PDIs do histórico abrem em modo read-only
- [ ] PdiFilters filtram localmente
- [ ] Skeleton loaders e toasts

## Dependencias
- 09-prototype-pdi-page
- 10-prototype-pdi-history-page
- 28-functional-pdi-goals-api

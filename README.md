# Workspace One Personal — Premium 1.0

Aplicativo pessoal mobile-first, separado do Workspace One Corporativo. Sem login. Dados salvos em `localStorage` neste navegador, sem backend.

## Funcionalidades

- Dashboard Meu Dia, calendário mensal, registros e tarefas, finanças básicas, 14 categorias, pesquisa, temas claro/escuro/automático.
- Cadastro, edição, conclusão, exclusão, notas, datas, valores e preferências.
- Exportação e importação de backup JSON.
- PWA com cache offline após primeira abertura em HTTPS.

## Publicar com GitHub Pages

1. Crie um repositório **separado** para o Workspace One Personal.
2. Envie o conteúdo desta pasta para a raiz do repositório (`index.html`, `app.js`, `sw.js`, `icon.svg`, `manifest.webmanifest`).
3. Em Settings > Pages, selecione Deploy from a branch, `main` e `/ (root)`.
4. Abra o endereço HTTPS do GitHub Pages no Safari do iPhone. Compartilhar > Adicionar à Tela de Início.

**Avisos importantes:** O GitHub Pages publica o código-fonte e os arquivos estáticos. Não armazene senhas ou dados pessoais nos arquivos do repositório. Os registros digitados ficam apenas no navegador do dispositivo. Faça backups periódicos. Limpar dados do Safari pode excluir registros. Não há sincronização entre dispositivos nem autenticação.

**Notificações:** Os avisos dentro do app funcionam quando ele é aberto. Não há push em segundo plano nem agendamento real de alertas. Para iOS web push é preciso PWA instalado, permissão e infraestrutura de envio; GitHub Pages sozinho não fornece backend. A seleção de antecedência é salva para futura implementação, mas ainda não dispara notificações.

**Limitações:** Controle financeiro é manual e não conectado a bancos. As categorias de hábitos, saúde, etc. usam registros genéricos; funcionalidades específicas poderão ser ampliadas. Para privacidade sensível e dados de saúde, planeje criptografia, bloqueio local e testes antes de armazenar informações críticas.

## Testar localmente

Execute um servidor HTTP estático (por exemplo, `python -m http.server 8000`) na pasta e abra `http://localhost:8000`. O modo offline exige a primeira visita com rede e service worker ativo.

## Ajustes 2.1
- Saudação na tela inicial com o nome salvo em Personalização.
- Campos com fonte mínima de 16px no iPhone para evitar zoom automático do Safari.
- Cache offline atualizado.


## Atualização 2.3
- Listas de compras: marcar itens não finaliza automaticamente a lista.
- Botão Finalizar abre confirmação da data real da compra (editável, padrão hoje).
- Histórico mantém lista, itens marcados e data de conclusão.
- Demais registros também pedem data de conclusão.
- Registros recorrentes preservam ocorrências futuras ao concluir.
- A data planejada é independente da data de conclusão.


## Versão 2.4 — Refinamento visual
- Visual premium refinado: hierarquia, cartões, espaços, cores, botões e módulos.
- Formulários com foco mais claro, campos maiores e acessíveis no iPhone.
- Removido foco automático ao abrir novo registro para evitar abertura inesperada do teclado.
- Textos da página inicial simplificados.
- Mesma chave de armazenamento da versão anterior: não apaga intencionalmente os registros.
- A versão 2.4 é um refinamento de interface, não uma implementação de notificações push ou de sincronização.


## Versão 2.5 — Home com futuro completo
- Meu dia mostra registros de hoje.
- Próximos 7 dias mostra registros com prazo dentro da próxima semana.
- Próximos compromissos exibe os cinco eventos futuros mais próximos, mesmo de outros meses.
- Ver todos abre uma lista completa de registros futuros.
- Atualizado cache do service worker para carregar a nova versão.


## Versão 2.6
- Indicadores da Home clicáveis e filtrados (hoje, semana, eventos).
- Tela dedicada a cada lista de compras, com adição rápida, checklist e finalização com data.
- Ajustes de interação e toque no iPhone.
- Dados locais e chave de armazenamento preservados.

Workspace One Personal — GitHub Pages

Este pacote contém apenas os arquivos compilados do site estático e estas instruções.

Atualização manual:
1. Extraia o conteúdo do ZIP na raiz do repositório publicado em
   https://bsosilveira-ai.github.io/workspace-one-personal/.
2. Substitua index.html, 404.html, sw.js, manifest.webmanifest, os arquivos de
   ícone e a pasta assets pelos arquivos deste pacote.
3. Envie as alterações pelo fluxo normal do GitHub. Nada foi publicado ou enviado
   automaticamente por este pacote.
4. Em Settings → Pages, mantenha a fonte de publicação configurada para a raiz
   da branch/pasta onde colocou os arquivos.
5. Abra https://bsosilveira-ai.github.io/workspace-one-personal/ e navegue até
   Agenda, Módulos e Ajustes. Para rotas internas compartilhadas, o 404.html
   restaura a rota dentro do escopo do app.

O manifesto define id, start_url e scope como /workspace-one-personal/ e display
standalone. O service worker e os caminhos de assets foram compilados para essa
mesma base. Os registros locais não são incluídos no ZIP.

Se já houver um atalho antigo no iPhone, remova-o e adicione novamente pela
versão atualizada do site para o iOS reler o manifesto e o ícone.

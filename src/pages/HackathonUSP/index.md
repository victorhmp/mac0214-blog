---
title: HackathonUSP 2018.2 (Site)
date: "2018-11-30"
---

Antes de criar a nova página no site do HackathonUSP para a edição 2018.2, iniciei no dia 22 de setembro a refatoração do código-fonte dos componentes que compõem o site, após reunião com meu orientador sobre qual seria a melhor abordagem de refatoração, onde decidimos que o melhor caminho era fazer com que os componentes recebessem de arquivos externos as informações que deveriam ser renderizadas nos respectivos componentes. O repositório Git com o código-fonte do site pode ser encontrado em https://gitlab.com/ uspcodelab/sites/hackathonusp

O site do HackathonUSP possui os componentes: About.vue, Countdown.vue, Judges.vue, JudgingCriteria.vue, Navbar.vue, Prizes.vue, Promoters.vue, TheFooter.vue e TheHeader.vue. Esses componentes são então rende- rizados para construir uma página.

Comecei o trabalho refatorando o componente "TheHeader", onde fiz que o componente esperasse receber um objeto através de props com informações que deveriam ser renderizadas no cabeçalho da página, como: nome do evento, data, local, tema e até um logo. Além dessas informações também fiz com que o componente seja dinâmico de tal forma que, recebe uma data em que as inscrições do evento se abrem e uma data na qual elas se fecham, e baseado nessas datas renderiza ou não os links para o formulário de inscrições e o regulamento do evento.

Ao avançar para a generalização dos demais componentes, feita de forma similar à do cabeçalho, o principal problema que precisava resolver era como definir a paleta de cores de cada página de maneira dinâmica, que permitisse que cores fossem passadas por props aos componentes, assim até mesmo as cores dos itens renderizados poderiam ser modificadas. Esse talvez tenha sido o problema mais desafiador desta refatoração, pois consegui chegar em várias alternativas, mas todas tinham seus respectivos trade-offs. Por fim, decidi que a melhor opção seria fazer com que o componente esperasse receber um objeto em que a paleta de cores a ser usada seria passada pelo programador e seria interpretada utilizando styles aplicados in-line com auxílio do diretório v-bind, disponível na API do Vue.js. Talvez não tenha sido a solução mais elegante em termos do código-fonte, mas com certeza era a mais prática e natural para o programador criando uma nova página.

Outros componentes que necessitaram de mudanças e escolhas mais específicas foram os de "Promoters"e "Judges", pois esses componentes iriam renderizar um número variável de componentes filho, o que gerou problemas com a definição de estilo da página com CSS. Novamente dei preferência à solução mais prática e intuitiva do ponto de vista do criador de uma nova página, e fiz com o CSS desses componentes padronizasse a distribuição de espaço independentemente do número de componentes filho a serem renderizados.

Para essa etapa do trabalho que precisava ser completa rapidamente devido à necessidade de divulgação da edição 2018.2 do evento, trabalhei todos os dias durante o período de 22 de setembro até 30 de setembro, até q a refatoração estava completa, tornando a criação da nova página possível e bem rápida de ser feita. Essa etapa de refatoração teve um total de 30 horas de trabalho.

Após a refatoração, criar a página da nova edição ficou muito mais fácil, a maior parte do tempo de trabalho foi para escrever os textos que deveriam ser renderizados, encontrar imagens e convertê-las para o formato svg e acertar a paleta de cores para a nova edição do evento baseado no novo logo. Para a criação da primeira versão da página que foi ao ar no dia 02 de outubro, foram necessárias apenas 03 horas de trabalho.

Uma vez criada a página, eventualmente era necessária a adição de algum novo patrocinador, ou alguma nova função, como uma nova instância do "Countdown"para ser renderizada enquanto o evento estava acontecendo para marcar o tempo que os participantes teriam para submeter seus projetos. Essas pequenas alterações foram feitas ao longo do mês de outubro até a data do evento no dia 10 de novembro, totalizando 2 horas de trabalho.

A distribuição final das horas de trabalho no site do HackathonUSP foi a seguinte:

| Refatoração            | 30 horas |
|------------------------|----------|
| Criação da nova página | 03 horas |
| Manutenção             | 02 horas |
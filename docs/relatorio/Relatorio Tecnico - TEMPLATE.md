# Informações do Projeto
`TÍTULO DO PROJETO`  

Falta de Educação Financeira no Brasil

`CURSO` 

Ciências da Computação 

## Participantes

Socorro - Brainwriting

> Inclua a lista dos membros da equipe com seus nomes completos.
>
> Os membros do grupo são: 
> - Fulano da Silva
> - Ciclano Albuquerque

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

As pessoas não sabem lidar com dinheiro, em geral, há um grande problema financeiro no Brasil. Estamos atrasados nesse quesito. 
“Desconhecimento" respondeu o autor Gustavo Cerbasi após ser perguntado sobre qual era a maior armadilha financeira no país. A maioria do povo brasileiro não sabe viver de acordo com a sua situação financeira, não tendo um planejamento financeiro, gerando falta de dinheiro, dívidas, ou então ficando com dinheiro parado na conta.
Por que coisas como essas acontecem? O brasileiro não sabe cuidar das suas finanças, ou a ele nada foi ensinado sobre isso? Realmente, o desconhecimento é a maior barreira do brasileiro neste tema, e isso afeta todos os brasileiros presentes em diversos contextos da sociedade.

> Nesse momento você deve apresentar o problema que a sua aplicação deve
> resolver. No entanto, não é a hora de comentar sobre a aplicação.
> Descreva também o contexto em que essa aplicação será usada, se
> houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de
> fato existir, pois ainda não é a hora de apresentar requisitos
> detalhados ou projetos.
>
> Nesse momento, o grupo pode optar por fazer uso
> de ferramentas como Design Thinking, que permite um olhar de ponta a
> ponta para o problema.
>
> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

O objetivo principal do nosso projeto é criar um site que possui diversas ferramentas de simplificação de acesso, gerenciamento de contas bancárias, um portal de notícias econômicas e outros recursos. Essas ferramentas vão ajudar pessoas que não tiveram uma boa base na educação financeira, possibilitando elas a ter uma vida financeira melhor de acordo com suas condições.
Pessoas que estão com dívidas, esperamos que acabem com este endividamento. Aquelas que estão com dificuldades com seus gastos, esperamos que ajudemos no seu controle financeiro, e aqueles que têm dinheiro parado na conta, esperamos que comecem a fazer algum investimento, nem que seja em renda fixa.

> Aqui você deve descrever os objetivos do trabalho indicando que o
> objetivo geral é desenvolver um software para solucionar o problema
> apresentado acima. Apresente também alguns (pelo menos 2) objetivos
> específicos dependendo de onde você vai querer concentrar a sua
> prática investigativa, ou como você vai aprofundar no seu trabalho.
> 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

De acordo com a Serasa, mais de 40% da população adulta brasileira estava endividada em janeiro de 2022. Muitos dos que não estão endividados, não guardam dinheiro algum, e dos que guardam a maioria usa a poupança, que não é o mais recomendado. Tanto que no início de 2021 o Fundo Garantidor de Créditos (FGC) divulgou a marca de 235 milhões de contas ativas na poupança, um número que surpreende bastante os economistas.
Em 2020 foi divulgado pelo SPC (Serviço de Proteção ao Crédito) que 45% dos brasileiros não fazem um controle financeiro, e dentre os que fazem 20% utilizam da própria memória para gerir suas finanças.
De acordo com esses dados e os das entrevistas realizadas pelo grupo, a desinformação é algo muito presente quando se fala de educação financeira. Logo, nosso portal de notícias tentará amenizar esse problema promovendo o acesso de notícias e outras informações para nossos clientes.
Além disso, diversas brasileiros que sofrem com a falta de aptidão em gerenciar suas finanças têm dificuldade em acessar sites, ferramentas e tutoriais que explicam o jeito de guardar, selecionar e controlar seus dados financeiros e suas compras. Por isso nosso site também busca disponibilizar recursos intuitivos que permitam mais pessoas a administrarem suas finanças efetivamente.

> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

Apesar do tópico educação financeira abranger a população como um todo, já que a grande maioria do país apresenta uma necessidade de obter um maior conhecimento sobre o tema, o foco do trabalho está no público que ainda não teve muito contato com finanças, não chegou ou está chegando ao mercado de trabalho, portanto, o público jovem, entre 17 a 25 anos aproximadamente.
Ademais, outro motivo para escolha deste público é que estes estão muito ligados no mundo virtual. Logo, como não tem experiência com finanças, provavelmente vão buscar na internet, por algo que os ajude, dê dicas ou informações específicas sobre as suas dúvidas e desconhecimentos.
Embora tenham menos relevância, bancos, empresas e outras instituições financeiras também serão agentes úteis e fazem parte do público-alvo, seja por causa de parceiras ou pelo fato dessas instituições também poderem atuarem como clientes. 

> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feito pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas e Mapas de Empatia

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

![image](https://user-images.githubusercontent.com/103436793/163735648-86536f67-c3f9-42a4-88e1-fa3bd39a3453.png)

![image](https://user-images.githubusercontent.com/103436793/163735653-2e998a0e-8af0-4a69-bec4-edd439e37d3c.png)

![image](https://user-images.githubusercontent.com/103436793/163735662-eba63585-79f6-43db-9dc4-5875b4302454.png)


> Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que 
> você deve ser enumerar e descrever precisamente e de forma
> personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](imaages/../images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rafael Alencar      | Ter meu próprio negócio            | Acompanhar a situação do mercado atual |
|Marcelo Soares      | Ter estabilidade financeira        | Comprar uma casa                       |
|Amanda Teixeira     | Ter maior liberdade.               | Comprar uma moto.                      |
|Rafael Alencar      | Ter meu próprio negócio            | Investir em renda variável             |
|Marcelo Soares      | Melhorar meus dispositivos         | Encontrar uma nova fonte de renda      |
|Amanda Teixeira     | Poder viajar                       | Uma nova fonte de renda                |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                          |  Prioridade  |
|------|-----------------------------------------------------------|-----|
|RF-001 |Permitir que o usuário cadastre tarefas	                 |ALTA |
|RF-002 |Emitir um relatório de tarefas no mês	                   |MÉDIA|
|RF-003 |FACILIDADE EM INVESTIMENTOS                               |ALTA |
|RF-004 |INTEGRAÇÃO DE TODAS AS SUAS FINANÇAS EM SÓ UMA PLATAFORMA |ALTA |
|RF-005 |CARTEIRA VIRTUAL                                          |MÉDIA|
|RF-006 |CALCULADORA DE FINANÇAS                                   |BAIXA|
|RF-007 |ENTREVISTAS COM ESPECIALISTAS                             |BAIXA|
|RF-008 |PORTAL DE NOTÍCIAS                                        |BAIXA|

### Requisitos não Funcionais

|ID     | Descrição do Requisito                                      |Prioridade |
|-------|--------------------------------------------------------------------|-----|
|RNF-001 |O sistema deve ser responsivo para rodar em um dispositivos móvel  |MÉDIA|
|RNF-002 |Deve processar requisições do usuário em no máximo 3s	             |BAIXA|
|RNF-003 |INTERFACE SIMPLES E LIMPA                                          |ALTA |
|RNF-004 |O site/app deverá ser executado em celulares e computadores.       |BAIXA|
|RNF-005 |NOTÍCIAS ATUALIZADAS                                               |BAIXA|

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto todo deverá ser desenvolvido pelo grupo     |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

Dentre as preocupações para a montagem da interface do sistema, estamos estabelecendo foco em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

O diagrama apresentado na Figura X mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o ambiente Figma do projeto. (link Figma: https://www.figma.com/file/710vYjBs92LW2KNOvmDzvk/Falta-de-Educa%C3%A7%C3%A3o-Financeira-no-Brasil-team-library?node-id=465%3A53)

![image](https://user-images.githubusercontent.com/103436793/163736442-951ee018-01cb-4d15-a03a-7852b915a89e.png)
Figura 1 - Fluxo de telas do usuário.

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura comum que é apresentada na Figura 1. Nesta estrutura, existem 2 grandes blocos, descritos a seguir. São eles:

Cabeçalho - local onde estão a logo e navegação principal do site;
Conteúdo - apresenta o conteúdo da tela em questão;

![image](https://user-images.githubusercontent.com/103436793/163736470-f22868d2-03f1-4a2e-bcf0-7f151716a1a9.png)
Figura 2 - Estrutura padrão do site.

Tela - Login
A tela de login é onde o usuário se conecta ao seu perfil, para isso, precisa informar o seu login e a sua senha.

![image](https://user-images.githubusercontent.com/103436793/163736492-0f9a18d6-5dde-44e7-9aae-a1ad062b7375.png)
Figura 3 - Login.

Tela - Página Inicial
Na página inicial é onde o usuário vê as principais informações de suas transações e de investimentos.

![image](https://user-images.githubusercontent.com/103436793/163736512-e918e85d-0a66-403c-83f7-057f824fd0e7.png)
Figura 4 - Página Inicial.

Tela - Carteira Virtual
Na carteira virtual será possível ver e adicionar algumas informações financeiras, colocando alguns bancos e retornando o saldo total, por exemplo.

![image](https://user-images.githubusercontent.com/103436793/163736534-5ba4a3d3-65d1-4eac-b490-0628dc763606.png)
Figura 5 - Carteira Virtual.

Tela - Notícias
Nesta tela, aparecem as notícias principais do dia para o mundo econômica/financeiro.

![image](https://user-images.githubusercontent.com/103436793/163736603-025f378d-a0f2-45bf-a57b-e12caa450fcd.png)
Figura 6 - Notícias.

Tela - Perfil do Usuário
É onde o usuário encontra e adiciona as suas informações básicas.

![image](https://user-images.githubusercontent.com/103436793/163736625-b6acf047-f9d9-4ffc-aed3-4f55d7e9ecae.png)
Figura 7- Perfil.

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

Gerenciamento do projeto:
A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.
Equipe de Desenvolvimento
*Caio Ronan Horta
*Eishila Beatriz dos Santos
*Lucas Andrade Feres
*Brayan Mendes de Carvalho
*Fabiano Queiroz Guimarães Almeida
*João Gabriel Dias

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Trello estruturado com as seguintes listas: 

Recursos: esta lista mantém um template de tarefas recorrentes com as configurações padronizadas que todos devem seguir. O objetivo é permitir a cópia destes templates para agilizar a criação de novos cartões.
Backlog: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.
To Do: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.
Doing: Quando uma tarefa tiver sido iniciada, ela é movida para cá.
Test: Checagem de Qualidade. Quando as tarefas são concluídas, eles são movidos para o “CQ”. No final da semana, eu revejo essa lista para garantir que tudo saiu perfeito.
Done: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para serem entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.
Locked: Quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista juntamente com um comentário sobre o que está travando a tarefa.

LINK Trello: 

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

Relação de Ambientes de Trabalho
Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue. 

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVOB3GZRM=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20221-g2-falta-de-educacao-financeira | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://www.figma.com/file/710vYjBs92LW2KNOvmDzvk/?node-id=460%3A2 | 
|Documentos do projeto | Google Drive |https://docs.google.com/document/d/1Qq4spkE8Qmq87UHJmsmSB_6CzHm5ivGbjNsJmCa2DeA/edit?usp=sharing
|Gerenciamento do Projeto | Trello | https://trello.com/b/54hoxzqp/tiaw-falta-de-educacao-financeira-no-brasil




>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

Documentação do projeto: Salva na branch 'Master'
versão 0.0.1

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

A lista a seguir traz as referências utilizadas nesse trabalho. são elas:
*PENA, Rodolfo F. Alves. "O que é Capitalismo?"; Brasil Escola. Disponível em: https://brasilescola.uol.com.br/o-que-e/geografia/o-que-e-capitalismo.htm. Acesso em 16/04/22.
*Vexter. Educação financeira do Brasil. 2021. Disponível em: https://blog.vexter.com.br/educacao-financeira-do-brasil/. Acessado em 16/04/2022.
*Buss, Gabriel. 40,3% da população adulta estava inadiplente em janeiro.  2022. Disponível em: https://www.poder360.com.br/economia/403-da-populacao-adulta-estava-inadimplente-em-janeiro/. Acessado em 16/04/2022.
*Exemplo de Projeto. 2020. Disponível em: https://docs.google.com/document/d/1xE9t6zD78VnVkeOSghXc0Ze2QWe85ogqYpx9x-tuG24/edit#. Acessado em 17/04/2022.

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)

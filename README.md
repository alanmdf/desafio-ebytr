# Desafio Técnico Ebytr

## Contexto

A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.

Na Ebytr o time de desenvolvimento utiliza a Stack MERN para criar suas aplicações. Foi combinado com a Ebytr que deverá ser utilizada essa mesma Stack para resolver o problema de organização e produtividade da empresa.

## Funcionalidades implementadas

* Visualizar a lista de tarefas;
    * Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
* Inserir uma nova tarefa na lista;
* Remover uma tarefa da lista;
* Atualizar uma tarefa da lista;
* A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

## Tecnologias utilizadas

Conforme indicado, foi utilizada a Stack MERN para desenvolvimento da aplicação.

#### **Front-End**

* Framework: React.JS
* Dependências adicionais: ESLint

#### **Back-End**

* Framework: Node.JS
* Arquitetura: MSC
* Dependências adicionais:
    * ESLint
    * Cors
    * Dotenv
    * Express.JS
    * MongoDB
* Dependências para desenvolvimento/testes:
    * Nodemon
    * Chai
    * Mocha
    * Mongodb-memory-server
    * Nyc
    * Proxyquire
    * Sinon

#### **Banco de Dados**

* MongoDB Atlas

## Aplicação em produção

Para visualizar a aplicação em funcionamento, acesse o seguinte link: https://desafio-ebytr-front.herokuapp.com/

## Roteiro para execução local do projeto

Requisitos necessários para funcionamento adequado da aplicação:

    - Versão LTS do Node: v16.14.0
    - Versão do GIT: 2.25.1

1. Clone o repositório no seu ambiente:

   - Se possuir chave SSH configurada: `git clone git@github.com:alanmdf/desafio-ebytr.git`

   - Se preferir utilizar o protocolo HTTPS: `git clone https://github.com/alanmdf/desafio-ebytr.git`

2. Acesse o diretório do projeto:

   - `cd desafio-ebytr`

3. Acesse a pasta `back-end` e instale as dependências do back-end do projeto:

   - `cd back-end && npm install`

4. Crie um arquivo para configurar as variáveis de ambiente da aplicação:

   - `touch config.env`

5. Abra o arquivo `config.env` e insira as seguintes variávies de ambiente:

```
ATLAS_URI=mongodb+srv://desafio:ebytr@alancluster.m3qll.mongodb.net/desafioEbytr?retryWrites=true&w=majority
PORT=3001
```

6. Inicie a aplicação do back-end:

   - `npm start`

7. Volte para a pasta raiz do projeto e acesse a pasta `front-end`

   - `cd .. && cd front-end`

8. Instale as dependências do front-end do projeto e inicie a aplicação

   - `npm install && npm start`

## Testes

Caso deseje visualizar os testes unitários desenvolvidos para a API (Back-end), basta estar na pasta `back-end` e executar o comando `npm test`. Caso deseje visualizar a cobertura dos testes, execute o comando `npm run test:coverage`

O comando `npm test` lhe retornará o seguinte resultado no terminal:

![npm test](.media/npm_test.jpeg)

O comando `npm run test:coverage` também executará os testes e exibirá o resultado de cobertura dos testes:

![npm run test:coverage](.media/npm_test_coverage.jpeg)

## Desafios & Aprendizados

Durante o desenvolvimento da aplicação, tive a oportunidade de pesquisar e conhecer algumas tecnologias que me ajudaram a solcionar problemas que foram surgindo:

- Proxyquire: Biblioteca utilizada para conseguir realizar o "stub" de algumas funções nos Testes Unitários.
- Fetch: Utilização de segundo parâmetro para realizar requests de diferentes métodos HTTP.
- Commits: Padronização e maior frequência dos commits. Acredito que ainda seja um ponto de melhoria.
- TDD: Metodologia que tentei aplicar quando estava desenvolvendo o Back-end. Muito interessante as possibilidades que oferece.
- Deploy com Heroku: Tive que encontrar uma solução para poder realizar o deploy de duas aplicações (front e back) que estão no mesmo repositório git. Após muita pesquisa consegui resolver este problema. Também tive que pesquisar sobre como liberar o acesso do Heroku ao MongoDB Atlas.

## Próximos passos

- Desenvolvimento de Testes de Integração da API
- Desenvolvimento de Testes Unitários e de Integração do Front-End
- Conteinerização da aplicação (Docker) para facilitar a utilização em ambientes diversos
- Estilização com CSS

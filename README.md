## Description

Repositório direcionado a aprendizagem do NestJS

## Installation

```bash
$ npx -p @nestjs/cli nest new NestJS-Learn
$ yarn add @nestjs/graphql apollo-server-express graphql-tools graphql
```

or

```bash
$ git clone https://rchagas@bitbucket.org/rchagas/nestjs-learn.git
```

## Dependencies

```bash
# npm
$ npm install -g npx

# yarn (for clone)
$ yarn install

# nodemailer
$ npm install nodemailer

# rxjs
$ npm install rxjs

# moment
$ yarn add moment

#Repositorie Image Docker
https://hub.docker.com/repository/docker/rodrigorrchagas/nestjs-learn
```

## Running the app

```bash
# development
$ docker-compose up

# production
$ docker-compose up
```

<!--
Criar arquivo init.dev.sh na raiz
$ chmod 777 init.dev.sh

Configurar arquivos .env | dockerfile
Buildar/Criar imagem do projeto
$ docker build --tag=nestjs_api .

Rodar projeto
$ docker run -ti nestjs_api

Docker-Compose
Configurar arquivo docker-compose.yml
$docker-compose up
 -->

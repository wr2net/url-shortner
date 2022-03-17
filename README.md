# Encurtador de URL
Desafio criar um encurdatdor de URL com NodeJs

[![NODEJS](https://img.shields.io/badge/nodejs-green?style=for-the-badge)](#)
[![EXPRESS](https://img.shields.io/badge/express-white?style=for-the-badge)](#)
[![MONGODB](https://img.shields.io/badge/mongodb-olive?style=for-the-badge)](#)

## Pré-requisito
Banco de dados MongoDB Cloud

[https://cloud.mongodb.com](https://cloud.mongodb.com)

## Como iniciar o Servidor:

1. Clone do repositório

`$ git clone git@github.com:wr2net/url-shortner.git`

2. Instalando dependências

`$ npm i`

3. Variaveis de ambiente

`$ cp .env.example .env` 

4. Gerando build

`$ npm run build`

5. Subindo servidor

`$ npm run dev`


[![GET](https://img.shields.io/badge/get-purple?style=for-the-badge)](#)

[http://localhost:5000](http://localhost:5000)

## Como usar:

### Verificando status da API
[![GET](https://img.shields.io/badge/get-purple?style=for-the-badge)](#)

[http://localhost:5000/status](http://localhost:5000/status)


### Encurtando URL
[![POST](https://img.shields.io/badge/post-green?style=for-the-badge)](#)

[http://localhost:5000/shorten](http://localhost:5000/shorten)

[![REQUEST](https://img.shields.io/badge/request-green?style=for-the-badge)](#)
```
{
	"originURL": "https://www.google.com/search?client=firefox-b-d&q=uma+url+grande"
}
```

[![RESPONSE](https://img.shields.io/badge/response-blue?style=for-the-badge)](#)
```
{
	"_id": "623327c879e582176996059a",
	"hash": "is0ObeSBd",
	"shortURL": "http://localhost:5000/is0ObeSBd",
	"originURL": "https://www.google.com/search?client=firefox-b-d&q=uma+url+grande",
	"__v": 0
}
```

## Insomnia
No diretório [Insomnia](Insomnia/) está disponível para testes as collections e o environment para utilização no [Insomnia](Insomnia/).

## Postman
No diretório [Postman](Postman/) está disponível para testes as collections e o environment para utilização no [Postman](Postman/).

## Servidor em produção

[https://short.fawacom.com.br](https://short.fawacom.com.br)

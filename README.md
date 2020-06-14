<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.bombril.com.br/media/img/upload/f992f40a-f9c7-4415-af7c-77671c15a645.png" alt="Bot logo"></a>
</p>

<h3 align="center">Bombril bot - Mil e uma utilidades</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/tiago154/discord-bot-guilda-nodejs.svg)](https://github.com/tiago154/discord-bot-guilda-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/tiago154/discord-bot-guilda-nodejs.svg)](https://github.com/tiago154/discord-bot-guilda-nodejs/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 🤖 - Bot desenvolvido na Guilda de Nodejs exemplificando alguns recursos na plataforma do Discord
    <br>
</p>

## 📝 - Conteúdo

- [Sobre](#about)
- [Demonstração](#demo)
- [Como funciona](#working)
- [Uso](#usage)
- [Utilizando](#getting_started)
- [Construído usando](#built_using)
- [Contrubuindo](../CONTRIBUTING.md)
- [Autores](#authors)

## 🧐- Sobre <a name = "about"></a>

Bombril bot é responsável por ajudar seus usuários em diversas tarefas (mil e uma utilidade).<br/>
Atualmente possui as funcionalidades:

- Informações de localidade pelo CEP
- Dados relacionados ao COVID-19 por país

## 🎥 - Demonstração <a name = "demo"></a>

![demo-bombril](https://user-images.githubusercontent.com/10531605/84601614-df4d6300-ae57-11ea-8f81-64de81080ac7.gif)

## 💭 - Como funciona <a name = "working"></a>

- CEP: <br/>
O bot consulta uma API publica de CEP (https://docs.awesomeapi.com.br/api-cep), filtra os dados relevantes e monta uma mensagem amigável para o usuário. Também é montado a URL do Google Maps com a localidade aproximada.

- COVID: <br/>
O bot consulta uma API publica do COVID-19 (https://github.com/NOVELCOVID/API), filtra os dados relevantes e monta uma mensagem amigável para o usuário. Também é montado a URL da busca do Google onde é mostrado alguns dados do país

O Bot inteiro é escrito em Nodejs 12

## 🎈 - Uso <a name = "usage"></a>

Para usar o bot digite:

- CEP: <br/>

```
!bombril cep:<cep>
```
O cep pode ser escrito com 8 digitos ou 5 digitos + 3 digitos separados por `-`


- Covid: <br/>

Para usar o bot digite:

```
!bombril covid:<pais>
```

O país tem que ser escrito em ingles exemplo: `Brazil` ou utilizar o padrão `ISO 3166-1` com o código de 2 (`BR`) ou 3 (`BRA`) caracteres.


## 🏁 - Utilizando <a name = "getting_started"></a>

### Pré-requisitos

Para rodar o bot será necessário:

- Ser administrador em um servidor discord
- Ter o Nodejs 12 instalado

### Instalando

Clone o repositório

```sh
git clone git@github.com:tiago154/discord-bot-guilda-nodejs.git

cd discord-bot-guilda-nodejs
```

Agora instale as dependências

```sh
npm install
```

Não esqueça de preencher o arquivo `.env` com o token do BOT (https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token) e outras variaveis de ambiente. O exemplo de quais valores deve ser preenchido está disponivel no arquivo `.env_example`.

Autorize o bot a ser utilizado em seu servidor.<br/>
A URL para integração pode ser gerada no link `https://discord.com/developers/applications/{CLIENT_ID}/oauth2`.

Para iniciar o bot, digite:

```js
npm start
```

ou para auto reload

```js
npm run dev
```

## ⛏️ - Construído usando <a name = "built_using"></a>

- [Discord.js](https://discord.js.org/#/) - O Discord.js é um poderoso módulo node.js que permite interagir com a API do Discord com muita facilidade
- [Axios](https://www.npmjs.com/package/axios) - Cliente HTTP baseado em Promise para o navegador e node.js

## ✍️ - Autores <a name = "authors"></a>

- [@tiago154](https://github.com/tiago154) - Construção da ideia e trabalho inicial

Veja também a lista de [contribuidores](https://github.com/tiago154/discord-bot-guilda-nodejs/contributors) que participaram deste projeto.

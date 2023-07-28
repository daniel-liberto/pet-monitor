# Sistemas de monitoramento de animais PetMonitor

![petMonitorLogo](readme-logo.png)

Sistema criado para a empresa PetMonitor para ajudar na monitoração de animais urbanos e rurais.

## Características

As principais caracteristicas do projeto são:

### Figma

- Foi utilizado [Figma](https://www.figma.com) para criar o design inicial de cada etapa antes de proceder para o processo de construção em React.

### ReactJS

- Utilizando a biblioteca do [ReactJS](https://react.dev) em conjunto com os pacotes do [ViteJS](https://vitejs.dev), foi possível realizar o processo de transformar os desenhos do Figma, em uma estrutura front end web funcional e responsiva.

### Python

- O app web será desenvolvido utilizando a linguagem Python como backend para resolver os problemas de localização global em tempo real com a ajuda do pacote pip de [Haversine](https://pypi.org/project/haversine).

- Também será utilizado o [Postman](https://www.postman.com) em conjunto com o python para facilitar no processo de APIs REST com o ReactJS.

### MySQL

- Será utilizado como banco relacional para armazenar dados dos usuários e animais cadastrados, como também a sua última localização registrada.

## Requisitos para rodar o projeto

### Softwares/modules necessários

- [Node Latest](https://nodejs.org/en):

  - Para rodar o ReactJS.

- Uma IDE de sua preferência ou [VS Code](https://code.visualstudio.com/download):
  - Para executar o servidor interno.

### Rodando o código na máquina

- Clone o projeto usando: `git clone https://github.com/daniel-liberto/pet-monitor.git`
  - Rode `npm install` para verificar dependencies.
  - Rode `npm start` para iniciar o projeto com port em :5000.
    - Se queira alterar o port vá até `package.json` e em `"scripts": {"start": "vite --port 5000"}` altere para o port do seu gosto.
  - Acesse através do `http://localhost:5000/pet-monitor`.
  - Pronto, tudo deve estar rodando normalmente.

### Pacotes instalados no projeto

- [Vite Latest](https://vitejs.dev): foi utilizado porque é mais leve e mais rápido que o CRA padrão do facebook.
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): é uma extensão do Vite para rodar babel e esbuild.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): para utilizar melhor o conceito de SPA.
- [history](https://www.npmjs.com/package/history): para facilitar na manipulação de páginas de sessões do navegador.

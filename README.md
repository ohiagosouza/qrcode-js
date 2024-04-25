## QR CODE GENERATOR

API para gerar QR Codes através de textos simples.

## Instalação

1. Clone o Repositório

   ```
   git clone https://github.com/ohiagosouza/qrcode-js.git
   ```

2. Navegue até a pasta e instale as dependências

   ```
   cd qrcode-js
   npm install
   ```

## Inicializando

1. Inicie o servidor com o comando
   ```
   npm run dev
   ```
2. Faça solicitação `POST` para `localhost:3000/generateQR` com o seguinte corpo:

   ```
   {
     "data": "Texto a ser convertido para QR"
   }
   ```

3. A requisição irá gerar um arquivo PNG para a pasta `qrcode-png`

## Estrutura de pastas

```

qrcode-js/
├── node_modules/
├── src/
│ ├── controllers/
│ │ └── qrController.js
│ ├── routes/
│ │ └── qrRoutes.js
│ ├── services/
│ │ └── qrService.js
│ ├── utils/
│ │ └── qrUtils.js
│ └── server.js
├── .gitignore
├── package.json
└── README.md

```

- `qr-code-api/` é a pasta raiz do projeto.
- `node_modules/` é onde as dependências do projeto são armazenadas pelo npm.
- `src/` é onde todo o código-fonte da aplicação está localizado.
  - `controllers/` contém os controladores.
  - `routes/` contém os arquivos de definição de rotas.
  - `services/` contém a lógica de negócio da aplicação.
  - `utils/` contém funções auxiliares.
  - `server.js` é o arquivo principal que inicializa o servidor.
- `.gitignore` especifica quais arquivos/diretórios devem ser ignorados pelo Git.
- `package.json` é o arquivo de manifesto do projeto.
- `README.md` é o arquivo de documentação.

### Author

Desenvolvido por [Hiago Souza](https://linkedin.com/in/ohiagosouza)

```markdown
# O tunel do tempo(Front)

Uma breve descrição do projeto está sendo criada

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado no seu computador:

- **Node.js** (versão 14.x ou superior)
  - Você pode baixar a versão mais recente [aqui](https://nodejs.org/).
- **npm** (Node Package Manager) ou **Yarn**
  - npm geralmente é instalado automaticamente com o Node.js.
  - Você pode instalar o Yarn globalmente com o comando: `npm install --global yarn`.
- **Visual Studio Code** (VS Code)
  - Editor de código recomendado para este projeto. Você pode baixá-lo [aqui](https://code.visualstudio.com/).
  - Recomenda-se também instalar as seguintes extensões no VS Code:
    - **ESLint**: Para suporte a linting e formatação.
    - **Prettier**: Para formatação de código.
    - **VSCode React Refactor**: Facilita a refatoração de componentes React.

## Instalação

Siga as etapas abaixo para configurar o ambiente de desenvolvimento:

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Old-21th-Century-Boys/tunel_do_tempo_front_2.git
   cd tunel_do_tempo_front_2
   ```

2. **Instale as dependências**

   Se você está usando npm:

   ```bash
   npm install
   ```

   Ou, se preferir usar Yarn:

   ```bash
   yarn install
   ```

## Executando o Projeto

Para rodar o projeto em modo de desenvolvimento, execute:

Se você está usando npm:

```bash
npm start
```

Ou, se preferir usar Yarn:

```bash
yarn start
```

Isso abrirá automaticamente uma nova aba no seu navegador apontando para `http://localhost:3000/`, onde você poderá ver sua aplicação React rodando.


## Dependências Utilizadas

Este projeto utiliza diversas bibliotecas e frameworks para fornecer funcionalidades e componentes prontos. Abaixo está uma lista das principais dependências e uma breve descrição de cada uma:

### Dependências Principais

- **@emotion/react** e **@emotion/styled**: Biblioteca para estilização de componentes no React, oferecendo poderosas ferramentas CSS-in-JS.
- **@fortawesome/free-brands-svg-icons**, **@fortawesome/free-regular-svg-icons**, **@fortawesome/free-solid-svg-icons** e **@fortawesome/react-fontawesome**: Conjunto de ícones e componentes de ícones para o React, fornecidos pelo Font Awesome.
- **@mui/icons-material** e **@mui/material**: Conjunto de componentes e ícones da biblioteca Material-UI, para a construção de interfaces de usuário elegantes e responsivas.
- **@testing-library/jest-dom**, **@testing-library/react**, **@testing-library/user-event**: Ferramentas para testes unitários em componentes React.
- **axios**: Biblioteca para fazer requisições HTTP.
- **classnames**: Utilitário para manipulação de classes CSS com facilidade.
- **express**: Framework para construção de servidores web no Node.js.
- **framer-motion**: Biblioteca para animações no React, permitindo criar animações complexas e responsivas.
- **multer**: Middleware para o gerenciamento de uploads de arquivos no Express.
- **prop-types**: Ferramenta para validação de tipos de propriedades nos componentes React.
- **react**, **react-dom**: Core do React, utilizado para a construção de interfaces de usuário.
- **react-hot-toast**: Biblioteca para exibição de notificações (toasts) no React.
- **react-router-dom**: Biblioteca para roteamento e navegação no React.
- **react-scripts**: Scripts e configuração do Create React App.
- **reactflow**: Biblioteca para criação de diagramas e fluxogramas no React.
- **web-vitals**: Biblioteca para medição das principais métricas de performance de web.
- **workbox** (várias sub-bibliotecas): Conjunto de ferramentas para facilitar o uso de Service Workers e otimizar o desempenho do aplicativo em produção.

### Dependências de Desenvolvimento

- **autoprefixer**: Plugin para PostCSS que adiciona prefixos de navegadores automaticamente.
- **postcss**: Ferramenta para transformar CSS com plugins JavaScript.
- **tailwindcss**: Framework de CSS utilitário que permite criar layouts modernos de forma rápida e responsiva.



## Estrutura do Projeto (até o momento)

Abaixo está a estrutura atual do projeto, incluindo diretórios e arquivos importantes:

```plaintext
src/
├── assets/
│   └── videos/
│       ├── Abertura.mp4
│       └── LoginLooping.mp4
│
├── components/
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── SettingEstilo.css
│   │   ├── SettingPerfil.css
│   │   └── VideoIntro.css
│   ├── Navbar.jsx
│   ├── PhotoUploadModal.jsx
│   ├── SettingEstilo.jsx
│   ├── SettingPerfil.jsx
│   ├── VideoIntro.jsx
│   └── VideoUploadModal.jsx
│
├── fitis/
│   └── pages/
│       ├── styles/
│       │   ├── LoginPage.css
│       │   ├── SettingsPage.css
│       │   └── HomePage.jsx
│       ├── LoginPage.jsx
│       └── SettingsPage.jsx
│
├── pages/
│   ├── styles/
│   │   ├── LoginPage.css
│   │   └── SettingsPage.css
│   ├── FotosEVideosPage.jsx
│   ├── HistoriasPage.jsx
│   ├── HistoriasParalelasPage.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── PessoasPage.jsx
│   ├── RaizPage.jsx
│   ├── SettingsPage.jsx
│   ├── UploadHistoriasPage.jsx
│   ├── UploadHistoriasParalelasPage.jsx
│   └── UploadPessoasPage.jsx
│
├── services/
│   ├── endpoints.js
│   ├── fotosService.js
│   ├── historiasParalelasService.js
│   ├── historiasService.js
│   ├── membrosService.js
│   ├── referenciasService.js
│   ├── usuariosService.js
│   └── videosService.js
│
├── App.css
├── App.jsx
├── App.test.js
├── index.css
├── index.jsx
├── logo.svg
├── reportWebVitals.js
├── service-worker.js
├── serviceWorkerRegistration.js
├── setupTests.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── Raiz.jsxExemplo
├── Readme.md
└── tailwind.config.js

```
## Scripts Disponíveis

Além do comando `start`, aqui estão outros scripts úteis:

- **`npm run build`** ou **`yarn build`**: Compila o aplicativo para produção na pasta `build`.
- **`npm run test`** ou **`yarn test`**: Inicia o executador de testes em modo interativo.
- **`npm run eject`** ou **`yarn eject`**: Ejecta o projeto, revelando a configuração oculta do React.

## Contribuindo

Se você quiser contribuir com este projeto, siga as instruções abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch com suas alterações: `git checkout -b minha-branch`.
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`.
4. Faça push para a branch: `git push origin minha-branch`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato.

```
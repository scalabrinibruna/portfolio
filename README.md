# Portfólio - Bruna Scalabrini

Meu portfólio pessoal, feito para o Laboratório 01 de DIAW. Ele tem uma parte sobre mim em português e inglês, uma linha do tempo com meus projetos, minhas experiências e um formulário de contato que manda e-mail de verdade.

🌐 **Site:** https://portfolio-phi-wine-aqetk97dkd.vercel.app/
📦 **Repositório:** https://github.com/scalabrinibruna/portfolio
🎨 **Figma:** https://www.figma.com/design/8vgfzSYJEbT3jdQDp3eGq2/portfolio-wireframe?node-id=0-1&t=ZfSS4YHKJVKHFFIt-1

## Como ficou

| | | |
| --- | --- | --- |
| ![print 1](docs/print1.png) | ![print 2](docs/print2.png) | ![print 3](docs/print3.png) |

**Wireframes (desktop e mobile):**

| Desktop | Mobile |
| --- | --- |
| ![wireframe desktop](docs/print4.png) | ![wireframe mobile](docs/print5.png) |


## O que tem no site

- **Sobre mim** em português e inglês, com um botão PT/EN para trocar
- **Projetos** em linha do tempo, do mais antigo para o mais recente, cada um com descrição, tecnologias, imagem, link do repositório e link do site no ar
- **Experiências** com instituição, atividade, período e descrição
- **Contato** com ícones (e-mail, WhatsApp, LinkedIn e GitHub) e um formulário com validação que envia o e-mail pelo EmailJS
- Menu que funciona no celular, tema claro/escuro automático e navegação pelo teclado

## Tecnologias

- React 18
- Vite 5
- CSS puro
- EmailJS (`@emailjs/browser`)
- Git e GitHub
- Vercel para hospedar
- Figma para os wireframes

**Dependências:** `react`, `react-dom`, `@emailjs/browser`. Para desenvolvimento: `vite` e `@vitejs/plugin-react`.

## Por que não tem back-end

O site só mostra conteúdo e manda e-mail, então não precisei de servidor. O EmailJS envia a mensagem direto do navegador, usando só chaves públicas, e nenhuma chave secreta fica no código.

## Como rodar na sua máquina

Precisa do Node.js 18 ou mais novo.

```bash
git clone https://github.com/scalabrinibruna/portfolio.git
cd portfolio
npm install
npm run dev
```

Depois é só abrir http://localhost:5173.

### Configurar o formulário

O formulário só envia e-mail se você configurar o EmailJS. Sem isso, ele valida os campos e avisa que o envio não está configurado.

1. Crie uma conta em https://www.emailjs.com/
2. Em **Email Services**, conecte o Gmail (marque todas as permissões que o Google mostrar, senão dá erro 412)
3. Em **Email Templates**, crie um template com `{{from_name}}`, `{{reply_to}}` e `{{message}}` no conteúdo e `{{reply_to}}` no campo Reply To
4. Copie `.env.example` para `.env.local` e preencha, sem espaço depois do `=`:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Se mudar o `.env.local`, reinicie o `npm run dev`. Esse arquivo não vai pro GitHub.

## Mudando o conteúdo

Tudo está em `src/data/profile.js`: meus dados, projetos e experiências. Para adicionar um projeto é só copiar um item da lista `projects` e trocar os campos. As imagens ficam em `public/projetos/`.

## Deploy

Publiquei na Vercel:

1. Subi o código pro GitHub
2. Na Vercel: Add New, Project, e importei o repositório
3. Build: `npm run build` / Output: `dist`
4. Cadastrei as 3 variáveis `VITE_EMAILJS_*` em Environment Variables
5. Deploy

Cada `git push` na `main` atualiza o site sozinho.

## Estrutura

```
portfolio/
├── docs/              # prints e wireframes
├── public/            # favicon e imagens dos projetos
├── src/
│   ├── data/profile.js
│   ├── App.jsx
│   ├── styles.css
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

## Testes

Não fiz testes automatizados. O que conferi foi que o `npm run build` roda sem erro, que o formulário envia e-mail de verdade rodando local, e que o site está no ar na Vercel.

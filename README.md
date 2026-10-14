# 💜 Portfólio Profissional – Bruna Scalabrini

> Portfólio pessoal de uma estudante de Engenharia de Software da PUC Minas: sobre mim (PT/EN), linha do tempo de projetos, experiências e contato com envio real de e-mail.
> Projeto do **Laboratório 01 – DIAW** (Prof. João Paulo Carneiro Aramuni).

## 🚧 Status do Projeto

- [x] Sprint 01 – Planejamento, layout e navegação
- [x] Sprint 02 – Funcionalidades principais (código pronto)
- [ ] Sprint 03 – Deploy, imagens/GIFs reais, README final

## 🔗 Links Úteis

- 🌐 **Site publicado:** [LINK DO SITE APÓS O DEPLOY]
- 📦 **Repositório:** [LINK DO REPOSITÓRIO GITHUB]
- 🎨 **Wireframes (Figma):** [LINK DO FIGMA]

## 📝 Sobre o Projeto

Site pessoal para apresentar trajetória, tecnologias, projetos e formas de contato de maneira moderna e acessível.
Todo o conteúdo vem de **um único arquivo**, `src/data/profile.js`. Campos `null` não aparecem como texto no site: viram estados vazios discretos.

## ✨ Funcionalidades Principais

- 🌐 Sobre mim em português e inglês (alternância PT/EN)
- 🕒 Linha do tempo de projetos ordenada do mais antigo ao mais recente (campo `start`, formato `AAAA-MM`; sem data vai ao fim)
- 💼 Experiências com instituição, atividade, período e descrição
- 📨 Formulário com validação e envio real via EmailJS (sem simular sucesso se não estiver configurado)
- 📱 Responsivo, menu mobile, foco visível, navegação por teclado, `prefers-reduced-motion`, tema claro/escuro automático

## 🛠 Tecnologias Utilizadas

| Camada | Tecnologia |
| --- | --- |
| Interface | React 18, JavaScript (ES6+) |
| Build | Vite 5 |
| Estilização | CSS puro (variáveis, grid/flex), ícones SVG inline |
| E-mail | `@emailjs/browser` |
| Versionamento / Hospedagem | Git, GitHub, Vercel (plano gratuito) |

**Dependências:** `react`, `react-dom`, `@emailjs/browser` · **Dev:** `vite`, `@vitejs/plugin-react`.

## 🏗 Arquitetura

SPA estática, **sem back-end próprio**: o EmailJS envia o e-mail direto do navegador e usa só chaves públicas (a chave privada do EmailJS nunca entra no projeto). Isso reduz custo, manutenção e superfície de ataque, e atende o requisito de envio por e-mail. Limitação: para reforçar a proteção contra spam, ative as restrições de domínio no painel do EmailJS.

Identidade visual: roxo (`#8b5cf6`) e azul (`#3b82f6`), fonte do sistema (carrega rápido e não depende de serviço externo).

## 🔧 Instalação e Execução

**Pré-requisitos:** Node.js 18+ e npm.

```bash
git clone [LINK DO REPOSITÓRIO GITHUB]
cd portfolio
npm install
cp .env.example .env.local   # preencha as 3 variáveis
npm run dev                  # http://localhost:5173
```

### 🔑 Variáveis de ambiente

| Variável | Onde obter |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS → Email Services |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS → Email Templates |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS → Account → API Keys |

No template do EmailJS use as variáveis `{{from_name}}`, `{{reply_to}}` e `{{message}}`. Sem essas variáveis, o formulário valida os campos e informa que o envio não está configurado.

## 🚀 Deploy (Vercel)

1. Crie o repositório no GitHub e envie o código (`git init`, `git add .`, `git commit`, `git push`).
2. Em vercel.com, **Add New → Project** e importe o repositório.
3. Framework: Vite · Install: `npm install` · Build: `npm run build` · Output: `dist`.
4. Em **Settings → Environment Variables**, cadastre as 3 variáveis `VITE_EMAILJS_*` e faça **Redeploy**.
5. Abra a URL, teste menu, troca PT/EN, responsividade e envie uma mensagem real.
6. Cole a URL no topo deste README.

## 📂 Estrutura de Pastas

```
.
├── index.html            # título, descrição (SEO) e favicon
├── public/favicon.svg
├── .env.example          # modelo das variáveis (sem segredos)
├── src/
│   ├── data/profile.js   # TODOS os dados pessoais, projetos e experiências
│   ├── App.jsx           # Header, Sobre, Projetos, Experiências, Contato
│   ├── styles.css
│   └── main.jsx
├── docs/wireframes.md    # especificação para o Figma
└── package.json
```

## 🎥 Demonstração

[IMAGENS DOS WIREFRAMES E PRINTS DO SITE: adicionar em `docs/` e referenciar aqui]

## 🧪 Testes

Não há testes automatizados. Verificação feita: `npm run build` sem erros. Verificação manual pendente: formulário real, responsividade em dispositivos e site publicado.

## 👥 Autora

| Nome | GitHub | E-mail |
| --- | --- | --- |
| Bruna Batista Scalabrini | [scalabrinibruna](https://github.com/scalabrinibruna) | scalabrinibruna0@gmail.com |

## 🙏 Agradecimentos

Engenharia de Software PUC Minas e Prof. Dr. João Paulo Aramuni.

## 📄 Licença

MIT.

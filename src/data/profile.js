export const profile = {
  displayName: 'Bruna Scalabrini',
  fullName: 'Bruna Batista Scalabrini',
  course: 'Engenharia de Software',
  school: 'PUC Minas',
  semester: '2º',
  city: 'Belo Horizonte - MG',
  level: { pt: 'Estudante iniciante, em formação', en: 'Beginner student, in training' },
  known: ['Python', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
  learning: ['Java'],
  goals: {
  pt: 'Aprender e evoluir como desenvolvedora de software, conquistar uma vaga de estágio na área e participar de projetos que unam boas práticas de engenharia e resolução de problemas reais.',
  en: 'To grow as a software developer, land an internship in the field, and take part in projects that combine good engineering practices with solving real problems.',
  },
  interests: {
    pt: 'Desenvolvimento web, programação, análise de dados e boas práticas de engenharia de software.',
    en: 'Web development, programming, data analysis, and software engineering best practices.',
  },
  avatar: null,                       // TODO: ex. '/avatar.jpg' (arquivo em /public)
}

export const contacts = {
  email: 'scalabrinibruna0@gmail.com',
  github: 'https://github.com/scalabrinibruna',
  whatsapp: '5531988528008',          
  linkedin: 'https://www.linkedin.com/in/bruna-scalabrini-7b58913a0/',                    
}

export const projects = [
  {
    name: 'Pedalaki',
    start: '2026-03',
    period: 'Mar 2026 - Jun 2026',
    description: 'Plataforma web que conecta ciclistas e prefeitura para melhorar as ciclovias da cidade. Reúne fóruns de discussão, registro de reclamações e cálculo da melhor rota para pedalar pelas ciclovias.',
    tech: ['HTML', 'CSS', 'JavaScript', 'JSON Server', 'APIs'],
    repo: null,
    demo: 'https://pedalaki.onrender.com',
    image: '/projetos/pedalaki.png',                     
    highlight: 'Melhor trabalho de TI1',
  },
  {
    name: 'Marvel Universe',
    start: '2026-06',  
    period: 'Jun 2026 - Jul 2026',
    description: 'Aplicação web sobre o universo cinematográfico da Marvel (MCU), com catálogo de filmes e séries, busca, favoritos, avaliação por estrelas, gráficos, quiz e painel administrativo.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Chart.js', 'JSON Server'],
    repo: 'https://github.com/scalabrinibruna/marvel-universe',
    demo: 'https://marvel-universe-dqub.onrender.com',
    image: '/projetos/marvel.png',
    highlight: null,
},
]

export const experiences = [
  {
    org: 'PUC Minas',
    role: 'Monitoria de Computabilidade',
    start: '2026-09',
    period: 'Atual',
    description: 'Apoio aos colegas no estudo da disciplina, esclarecendo dúvidas e auxiliando na resolução de exercícios, o que reforça meu próprio aprendizado dos conceitos de computabilidade.',
  },
]

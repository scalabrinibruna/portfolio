import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile, contacts, projects, experiences } from './data/profile'

const T = {
  pt: { hello: 'Olá, eu sou', role: 'Estudante de Engenharia de Software', about: 'Sobre mim', projects: 'Projetos', exp: 'Experiências', contact: 'Contato', menu: 'Menu' },
}
const SECTIONS = [['sobre', 'Sobre mim'], ['projetos', 'Projetos'], ['experiencias', 'Experiências'], ['contato', 'Contato']]

const ICONS = {
  email: 'M3 5h18v14H3zM3 6l9 7 9-7',
  github: 'M9 19c-4 1-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  whatsapp: 'M3 21l1.7-5A8.500 8.500 0 1 1 8 19.300zM9 10c0 3 3 6 6 6l1.500-1.500-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1-1-2z',
}
const Icon = ({ name }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={ICONS[name]} /></svg>
)

const byStart = (a, b) => (a.start ?? '9999') .localeCompare(b.start ?? '9999')

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <a className="brand" href="#sobre" aria-label="Início">{profile.displayName}</a>
      <button className="burger" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'}</button>
      <nav id="nav" aria-label="Principal" className={open ? 'open' : ''}>
        {SECTIONS.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  )
}

function About() {
  const [lang, setLang] = useState('pt')
  const t = lang === 'pt'
  const goals = profile.goals[lang], interests = profile.interests[lang]
  return (
    <section id="sobre" aria-labelledby="h-sobre" className="hero">
      <div className="hero-text">
        <div className="lang" role="group" aria-label="Idioma / Language">
          <button aria-pressed={t} onClick={() => setLang('pt')}>PT</button>
          <button aria-pressed={!t} onClick={() => setLang('en')}>EN</button>
        </div>
        <p className="hello" lang={lang}>{t ? 'Olá, eu sou' : "Hi, I'm"}</p>
        <h1 id="h-sobre">{profile.displayName}</h1>
        <div lang={lang} className="about-body">
          <p>{t
            ? `Estudante de ${profile.course} no ${profile.school}, cursando o ${profile.semester} semestre, em ${profile.city}. ${profile.level.pt}.`
            : `${profile.course === 'Engenharia de Software' ? 'Software Engineering' : profile.course} student at ${profile.school}, currently in the ${profile.semester.replace('º', 'nd')} semester, based in ${profile.city}. ${profile.level.en}.`}</p>
          {goals && <p><strong>{t ? 'Objetivos: ' : 'Goals: '}</strong>{goals}</p>}
          {interests && <p><strong>{t ? 'Interesses: ' : 'Interests: '}</strong>{interests}</p>}
          <p className="stack-label">{t ? 'Tecnologias que conheço' : 'Technologies I know'}</p>
          <ul className="chips">{profile.known.map((k) => <li key={k}>{k}</li>)}</ul>
          {profile.learning.length > 0 && <>
            <p className="stack-label">{t ? 'Estou aprendendo' : 'Currently learning'}</p>
            <ul className="chips alt">{profile.learning.map((k) => <li key={k}>{k}</li>)}</ul>
          </>}
        </div>
        <a className="btn" href="#contato">{t ? 'Fale comigo' : 'Get in touch'}</a>
      </div>
      <div className="avatar" aria-hidden={!profile.avatar}>
        {profile.avatar ? <img src={profile.avatar} alt={`Foto de ${profile.displayName}`} /> : <span>BS</span>}
      </div>
    </section>
  )
}

function Projects() {
  const list = useMemo(() => [...projects].sort(byStart), [])
  return (
    <section id="projetos" aria-labelledby="h-proj">
      <h2 id="h-proj">Projetos</h2>
      {list.length === 0 && <p className="empty">Nenhum projeto cadastrado ainda. Adicione itens em <code>src/data/profile.js</code>.</p>}
      <ol className="timeline">
        {list.map((p) => (
          <li key={p.name}>
            <article className="card">
              <div className={`shot ${p.image ? '' : 'empty-shot'}`}>
                {p.image ? <img src={p.image} alt={`Captura de tela do projeto ${p.name}`} loading="lazy" /> : <span>Imagem do projeto em breve</span>}
              </div>
              <div className="card-body">
                <h3>{p.name}</h3>
                {p.period && <p className="meta">{p.period}</p>}
                {p.highlight && <p className="badge">{p.highlight}</p>}
                <p>{p.description || <span className="muted">Descrição em breve.</span>}</p>
                {p.tech.length > 0 && <ul className="chips">{p.tech.map((x) => <li key={x}>{x}</li>)}</ul>}
                <div className="links">
                  {p.repo
                    ? <a className="link" href={p.repo} target="_blank" rel="noopener noreferrer">Ver repositório no GitHub</a>
                    : <span className="muted">Repositório não disponível</span>}
                  {p.demo && <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer">Ver online</a>}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Experiences() {
  const list = useMemo(() => [...experiences].sort(byStart), [])
  return (
    <section id="experiencias" aria-labelledby="h-exp">
      <h2 id="h-exp">Experiências</h2>
      {list.length === 0 && <p className="empty">Nenhuma experiência cadastrada ainda.</p>}
      <ol className="timeline">
        {list.map((e) => (
          <li key={e.org + e.role}>
            <article className="card pad">
              <h3>{e.role}</h3>
              <p className="meta">{e.org}{e.period ? ` • ${e.period}` : ''}</p>
              <p>{e.description || <span className="muted">Descrição das atividades em breve.</span>}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

const env = import.meta.env
const configured = env.VITE_EMAILJS_SERVICE_ID && env.VITE_EMAILJS_TEMPLATE_ID && env.VITE_EMAILJS_PUBLIC_KEY

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Informe seu nome (mínimo 2 letras).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Informe um e-mail válido, como nome@dominio.com.'
  if (v.message.trim().length < 10) e.message = 'Escreva uma mensagem com pelo menos 10 caracteres.'
  return e
}

function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') 
  const set = (k) => (ev) => setV({ ...v, [k]: ev.target.value })

  async function submit(ev) {
    ev.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) return
    if (!configured) return setStatus('unconfigured')
    setStatus('sending')
    try {
      await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: v.name, reply_to: v.email, message: v.message }, { publicKey: env.VITE_EMAILJS_PUBLIC_KEY })
      setStatus('success'); setV({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
  }

  const links = [
    ['email', 'E-mail', contacts.email && `https://mail.google.com/mail/?view=cm&to=${contacts.email}`],
    ['whatsapp', 'WhatsApp', contacts.whatsapp && `https://wa.me/${contacts.whatsapp}`],
    ['linkedin', 'LinkedIn', contacts.linkedin],
    ['github', 'GitHub', contacts.github],
  ].filter((l) => l[2])

  const field = (k, label, props = {}) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {k === 'message'
        ? <textarea id={k} rows="5" value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} />
        : <input id={k} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} {...props} />}
      <p id={`${k}-err`} className="err" role={errors[k] ? 'alert' : undefined}>{errors[k]}</p>
    </div>
  )

  return (
    <section id="contato" aria-labelledby="h-contato">
      <h2 id="h-contato">Contato</h2>
      <ul className="icons">
        {links.map(([n, label, href]) => (
          <li key={n}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon name={n} /></a></li>
        ))}
      </ul>
      <form onSubmit={submit} noValidate className="form">
        {field('name', 'Nome', { autoComplete: 'name' })}
        {field('email', 'E-mail', { type: 'email', autoComplete: 'email' })}
        {field('message', 'Mensagem')}
        <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}</button>
        <p className={`status ${status}`} role="status">
          {status === 'success' && 'Mensagem enviada. Obrigada pelo contato!'}
          {status === 'error' && 'Não foi possível enviar agora. Tente novamente ou use um dos ícones acima.'}
          {status === 'unconfigured' && 'O envio ainda não está configurado neste site. Use os ícones acima para entrar em contato.'}
        </p>
      </form>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo"><About /><Projects /><Experiences /><Contact /></main>
      <footer className="footer">© {new Date().getFullYear()} {profile.fullName} • {profile.course}, {profile.school}</footer>
    </>
  )
}

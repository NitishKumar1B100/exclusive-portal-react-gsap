import type { ComponentType, FormEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Send, Sparkles } from 'lucide-react'
import { events, partners } from '../data'

type IconType = ComponentType<{ size?: number; className?: string }>

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string
  title: string
  copy?: string
  image: string
}) {
  return (
    <section className="relative flex min-h-[68svh] items-end overflow-hidden px-5 pb-14 pt-36 sm:px-8 sm:pb-18 sm:pt-40">
      <img className="absolute inset-0 h-[112%] w-full object-cover" src={image} alt="" data-parallax />
      <div className="absolute inset-0 bg-[#0b0a09]/58" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0b0a09] via-[#0b0a09]/35 to-[#0b0a09]/45" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#c6a15b]/60 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-7 lg:grid-cols-[1.05fr_0.7fr]" data-hero-motion>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.05] text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>
        </div>
        {copy && (
          <p className="self-end border-l border-[#d9b76f]/50 pl-5 text-lg leading-8 text-stone-200">
            {copy}
          </p>
        )}
      </div>
    </section>
  )
}

export function Section({ eyebrow, title, children, tone = 'dark' }: { eyebrow: string; title: string; children: ReactNode; tone?: 'dark' | 'light' }) {
  const light = tone === 'light'

  return (
    <section className={`${light ? 'bg-[#f4efe4] text-[#17100b]' : 'text-stone-100'} py-18 sm:py-24`} data-reveal>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className={`eyebrow ${light ? 'text-[#8c6c32]' : ''}`}>{eyebrow}</p>
          <h2 className={`mt-4 font-serif text-4xl leading-tight sm:text-5xl ${light ? 'text-[#17100b]' : 'text-white'}`}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

export function SplitImage({ image, alt, children, reverse = false }: { image: string; alt: string; children: ReactNode; reverse?: boolean }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.85fr]" data-reveal>
      <img className={`aspect-[4/3] w-full object-cover ${reverse ? 'lg:order-2' : ''}`} src={image} alt={alt} />
      <div className="self-center text-xl leading-9 text-stone-200 [&>p+p]:mt-6">{children}</div>
    </section>
  )
}

export function IconPanel({ title, copy, icon: Icon }: { title: string; copy: string; icon: IconType }) {
  return (
    <article className="group border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#c6a15b]/60 hover:bg-white/[0.07]">
      <Icon className="text-[#d9b76f]" size={28} />
      <h3 className="mt-8 font-serif text-3xl text-white">{title}</h3>
      <p className="mt-4 leading-7 text-stone-300">{copy}</p>
    </article>
  )
}

export function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <article className="group overflow-hidden border border-white/10 bg-white/[0.04]">
      <div className="overflow-hidden">
        <img className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" src={event.image} alt={event.title} />
      </div>
      <div className="p-6">
        <p className="text-sm uppercase tracking-[0.18em] text-[#d9b76f]">{event.type}</p>
        <h2 className="mt-4 font-serif text-3xl text-white">{event.title}</h2>
        <p className="mt-4 leading-7 text-stone-300">{event.summary}</p>
        <Link className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[#f4dfab]" to={`/events/${event.slug}`}>
          View details <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}

export function EventRow({ event }: { event: (typeof events)[number] }) {
  return (
    <Link to={`/events/${event.slug}`} className="grid gap-4 border border-[#d2bd8a] bg-white p-4 transition hover:border-[#6d141b] md:grid-cols-[0.38fr_1fr_auto] md:items-center">
      <img className="aspect-[5/3] w-full object-cover" src={event.image} alt="" />
      <div>
        <p className="text-sm uppercase tracking-[0.16em] text-[#8c6c32]">{event.date} | {event.city}</p>
        <h3 className="mt-2 font-serif text-3xl">{event.title}</h3>
        <p className="mt-2 text-[#5c534b]">{event.summary}</p>
      </div>
      <ArrowRight className="text-[#6d141b]" />
    </Link>
  )
}

export function PartnerBand() {
  return (
    <section className="border-y border-white/10 py-10" data-reveal>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-5 text-center sm:px-8">
        {partners.map((partner) => (
          <span key={partner} className="font-serif text-2xl text-stone-300">{partner}</span>
        ))}
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="bg-[#6d141b] py-18 text-white" data-reveal>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Begin with a conversation, then enter the right room.</h2>
        <ButtonLink to="/contact" variant="light">Contact the house</ButtonLink>
      </div>
    </section>
  )
}

export function InquiryForm({ title, compact = false }: { title: string; compact?: boolean }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={`${compact ? '' : 'mx-auto max-w-7xl px-5 pb-24 sm:px-8'}`}>
      <div className="border border-[#c6a15b]/40 bg-[#f4efe4] p-6 text-[#17100b] sm:p-8" data-reveal>
        <h2 className="font-serif text-4xl">{title}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <input className="field" placeholder="Full name" required />
          <input className="field" placeholder="Email address" type="email" required />
          <input className="field" placeholder="City" />
          <input className="field" placeholder="Enquiry type" />
        </div>
        <textarea className="field mt-5 min-h-36 w-full py-4" placeholder="How may the membership team assist?" />
        <button className="mt-6 inline-flex h-13 items-center justify-center gap-2 bg-[#17100b] px-6 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-[#6d141b]" type="submit">
          Send enquiry <Send size={16} />
        </button>
      </div>
    </form>
  )
}

export function ButtonLink({ to, children, variant = 'default' }: { to: string; children: ReactNode; variant?: 'default' | 'quiet' | 'light' }) {
  const classes = {
    default: 'border-[#c6a15b] bg-[#c6a15b] text-[#17100b] hover:bg-[#f4dfab]',
    quiet: 'border-white/25 bg-transparent text-white hover:border-[#c6a15b] hover:text-[#f4dfab]',
    light: 'border-white bg-white text-[#6d141b] hover:bg-[#f4efe4]',
  }

  return (
    <Link to={to} className={`inline-flex min-h-12 items-center justify-center gap-2 border px-5 text-sm uppercase tracking-[0.16em] transition ${classes[variant]}`}>
      {children} <ArrowRight size={16} />
    </Link>
  )
}

export function Meta({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-stone-200">
      <span className="text-[#d9b76f]">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

export function StatStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-3 px-5 py-8 sm:px-8 md:grid-cols-3" data-stagger>
      {stats.map((stat) => (
        <div key={stat.label} className="border border-white/10 bg-white/[0.04] p-5">
          <p className="font-serif text-4xl text-[#d9b76f]">{stat.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-stone-400">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export function LuxuryNote({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8" data-reveal>
      <div className="border-y border-[#c6a15b]/40 py-12">
        <Sparkles className="mb-8 text-[#d9b76f]" />
        <div className="max-w-5xl font-serif text-3xl leading-snug text-white sm:text-5xl">{children}</div>
      </div>
    </div>
  )
}

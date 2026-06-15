import { useEffect, useMemo, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'
import {
  benefits,
  events,
  heroImage,
  highlights,
  membershipTiers,
  navItems,
  news,
  partners,
  values,
} from './data'

gsap.registerPlugin(ScrollTrigger)

function usePageMotion() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.page-shell',
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      )
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 86%' },
          },
        )
      })
    })
    return () => ctx.revert()
  }, [location.pathname])
}

function App() {
  usePageMotion()

  return (
    <div className="min-h-screen bg-[#0b0a09] text-stone-100">
      <Header />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0a09]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="Aurum House home">
          <span className="grid size-10 place-items-center border border-[#c6a15b]/60 bg-[#14100d] text-[#d9b76f]">
            <Sparkles size={18} />
          </span>
          <span>
            <span className="block font-serif text-xl uppercase text-white">Aurum House</span>
            <span className="block text-xs uppercase tracking-[0.28em] text-[#d9b76f]">Private members</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm uppercase tracking-[0.14em] transition ${
                  isActive ? 'text-[#d9b76f]' : 'text-stone-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/membership" className="hidden items-center gap-2 border border-[#c6a15b]/50 px-4 py-3 text-sm uppercase tracking-[0.14em] text-[#f4dfab] transition hover:bg-[#c6a15b] hover:text-[#17100b] md:flex">
          Apply <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="grid size-11 place-items-center border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#100f0e] px-5 py-5 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between border border-white/10 px-4 py-3 text-sm uppercase tracking-[0.16em] ${
                    isActive ? 'bg-[#c6a15b] text-[#17100b]' : 'text-stone-200'
                  }`
                }
              >
                {item.label} <ChevronRight size={16} />
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-copy > *', { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 })
      gsap.to('.hero-image', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={heroRef} className="relative flex min-h-[92svh] items-end overflow-hidden pt-28">
        <img className="hero-image absolute inset-0 h-[112%] w-full object-cover" src={heroImage} alt="An elegant private dinner event in a grand hall" />
        <div className="absolute inset-0 bg-[#0b0a09]/55" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b0a09] via-[#0b0a09]/20 to-[#0b0a09]/45" />
        <div className="hero-copy relative mx-auto grid w-full max-w-7xl gap-8 px-5 pb-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
          <div>
            <p className="eyebrow">International private membership</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.03] text-white sm:text-6xl lg:text-8xl">
              Where exceptional rooms become lasting circles.
            </h1>
          </div>
          <div className="self-end border-l border-[#d9b76f]/50 pl-5">
            <p className="max-w-xl text-lg leading-8 text-stone-200">
              Aurum House convenes members across dining, culture, enterprise, and seasonal travel with discretion, beauty, and extraordinary attention to arrival.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink to="/events">Explore events</ButtonLink>
              <ButtonLink to="/membership" variant="quiet">Membership</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="House privileges" title="Designed for trust, intimacy, and rare access.">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <IconPanel key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <section className="bg-[#f4efe4] py-20 text-[#17100b] sm:py-28" data-reveal>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-[#8c6c32]">Featured calendar</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Forthcoming gatherings</h2>
          </div>
          <div className="grid gap-5">
            {events.slice(0, 3).map((event) => (
              <EventRow key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Member voice" title="A house shaped by people who value depth over spectacle.">
        <blockquote className="max-w-5xl font-serif text-3xl leading-snug text-stone-100 sm:text-5xl">
          “The most valuable moments are the ones that feel unforced: a perfect table, the right introduction, and the quiet sense that everyone belongs in the room.”
        </blockquote>
        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-[#d9b76f]">Founding resident member</p>
      </Section>

      <PartnerBand />
      <CtaBand />
    </>
  )
}

function About() {
  return (
    <PageFrame eyebrow="About Aurum House" title="A modern private house with old-world standards.">
      <SplitImage
        image="https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?auto=format&fit=crop&w=1600&q=85"
        alt="Historic interior prepared for an intimate reception"
      >
        <p>
          Aurum House was created for members who move between cities, industries, and cultures, yet still value rooms where introductions are considered and time is treated with respect.
        </p>
        <p>
          The organization curates dining experiences, cultural salons, founder gatherings, seasonal journeys, and partner privileges for a tightly held international community.
        </p>
      </SplitImage>
      <Section eyebrow="Mission and values" title="A house code for every gathering.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <IconPanel key={item.title} {...item} />
          ))}
        </div>
      </Section>
      <Section eyebrow="Leadership" title="Stewarded by hosts, curators, and membership advisors.">
        <div className="grid gap-4 md:grid-cols-3">
          {['Elena Voss', 'Marcus Adebayo', 'Claire Montrose'].map((name, index) => (
            <article key={name} className="border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[#d9b76f]">Council {String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-5 font-serif text-3xl text-white">{name}</h3>
              <p className="mt-4 leading-7 text-stone-300">
                {['Global partnerships and member relations', 'Cultural programming and founder salons', 'Hospitality standards and private dining'][index]}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </PageFrame>
  )
}

function Membership() {
  return (
    <PageFrame eyebrow="Membership" title="Selective by design, generous once inside.">
      <Section eyebrow="Categories" title="Three paths into the house.">
        <div className="grid gap-5 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <article key={tier.name} className="flex flex-col border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-serif text-4xl text-white">{tier.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#d9b76f]">{tier.price}</p>
              <p className="mt-6 leading-7 text-stone-300">{tier.description}</p>
              <ul className="mt-8 grid gap-3 text-stone-200">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <Sparkles className="mt-1 shrink-0 text-[#d9b76f]" size={16} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Benefits" title="The practical luxuries members return for.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <IconPanel key={item.title} {...item} />
          ))}
        </div>
      </Section>
      <InquiryForm title="Begin a membership conversation" />
    </PageFrame>
  )
}

function Events() {
  return (
    <PageFrame eyebrow="Events" title="A calendar of private tables, salons, and seasonal moments.">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 sm:px-8 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </PageFrame>
  )
}

function EventDetail() {
  const { slug } = useParams()
  const event = useMemo(() => events.find((item) => item.slug === slug), [slug])

  if (!event) {
    return (
      <PageFrame eyebrow="Events" title="This event is no longer listed.">
        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <ButtonLink to="/events">Return to events</ButtonLink>
        </div>
      </PageFrame>
    )
  }

  return (
    <PageFrame eyebrow={event.type} title={event.title}>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <img className="aspect-[4/3] w-full object-cover" src={event.image} alt={event.title} />
        <div className="self-center">
          <div className="grid gap-4 border border-white/10 bg-white/[0.04] p-6">
            <Meta icon={<CalendarDays size={18} />} label={event.date} />
            <Meta icon={<MapPin size={18} />} label={event.city} />
            <Meta icon={<UserRound size={18} />} label={event.capacity} />
          </div>
          <p className="mt-8 text-xl leading-8 text-stone-200">{event.detail}</p>
          <div className="mt-8">
            <ButtonLink to="/contact">Register interest</ButtonLink>
          </div>
        </div>
      </div>
      <Section eyebrow="Gallery" title="Atmosphere for the evening.">
        <div className="grid gap-4 md:grid-cols-3">
          {[event.image, 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85'].map((image) => (
            <img key={image} className="aspect-[4/5] w-full object-cover" src={image} alt="" />
          ))}
        </div>
      </Section>
    </PageFrame>
  )
}

function News() {
  return (
    <PageFrame eyebrow="News and updates" title="Notes from the house calendar.">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 pb-20 sm:px-8">
        {news.map((item) => (
          <article key={item.slug} className="grid gap-6 border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[0.32fr_1fr_auto] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#d9b76f]">{item.category}</p>
              <p className="mt-2 text-stone-400">{item.date}</p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-white">{item.title}</h2>
              <p className="mt-3 leading-7 text-stone-300">{item.excerpt}</p>
            </div>
            <ChevronRight className="hidden text-[#d9b76f] md:block" />
          </article>
        ))}
      </div>
    </PageFrame>
  )
}

function Portal() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <PageFrame eyebrow="Member portal" title="A secure arrival point for members.">
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border border-white/10 bg-white/[0.04] p-7">
          <LockKeyhole className="text-[#d9b76f]" size={34} />
          <h2 className="mt-8 font-serif text-4xl text-white">Authentication-ready interface</h2>
          <p className="mt-5 leading-8 text-stone-300">
            The form exposes a clean frontend integration point for the future member management API while keeping the public experience fully polished.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-5 border border-[#c6a15b]/40 bg-[#f4efe4] p-6 text-[#17100b] sm:p-8">
          <label className="grid gap-2">
            <span className="text-sm uppercase tracking-[0.18em] text-[#7c5e2d]">Email</span>
            <input className="h-13 border border-[#d2bd8a] bg-white px-4 outline-hidden transition focus:border-[#6d141b]" type="email" placeholder="member@aurum.house" required />
          </label>
          <label className="grid gap-2">
            <span className="text-sm uppercase tracking-[0.18em] text-[#7c5e2d]">Password</span>
            <input className="h-13 border border-[#d2bd8a] bg-white px-4 outline-hidden transition focus:border-[#6d141b]" type="password" placeholder="••••••••" required />
          </label>
          <button className="mt-2 flex h-13 items-center justify-center gap-2 bg-[#6d141b] px-5 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-[#17100b]" type="submit">
            Sign in <ArrowRight size={16} />
          </button>
        </form>
      </section>
    </PageFrame>
  )
}

function Contact() {
  return (
    <PageFrame eyebrow="Contact" title="For membership, partnerships, and private event enquiries.">
      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          <Meta icon={<Mail />} label="membership@aurum.house" />
          <Meta icon={<Phone />} label="+44 20 7946 0188" />
          <Meta icon={<MapPin />} label="Mayfair, London | By appointment" />
        </div>
        <InquiryForm title="Send an enquiry" compact />
      </section>
    </PageFrame>
  )
}

function PageFrame({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <>
      <section className="px-5 pb-12 pt-36 sm:px-8 sm:pb-16 sm:pt-44">
        <div className="mx-auto max-w-7xl" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-white sm:text-7xl">{title}</h1>
        </div>
      </section>
      {children}
    </>
  )
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="py-20 sm:py-28" data-reveal>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function SplitImage({ image, alt, children }: { image: string; alt: string; children: ReactNode }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
      <img className="aspect-[4/3] w-full object-cover" src={image} alt={alt} />
      <div className="self-center text-xl leading-9 text-stone-200 [&>p+p]:mt-6">{children}</div>
    </section>
  )
}

function IconPanel({ title, copy, icon: Icon }: { title: string; copy: string; icon: React.ComponentType<{ size?: number; className?: string }> }) {
  return (
    <article className="group border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c6a15b]/60 hover:bg-white/[0.07]">
      <Icon className="text-[#d9b76f]" size={28} />
      <h3 className="mt-8 font-serif text-3xl text-white">{title}</h3>
      <p className="mt-4 leading-7 text-stone-300">{copy}</p>
    </article>
  )
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <article className="group overflow-hidden border border-white/10 bg-white/[0.04]">
      <img className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" src={event.image} alt={event.title} />
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

function EventRow({ event }: { event: (typeof events)[number] }) {
  return (
    <Link to={`/events/${event.slug}`} className="grid gap-4 border border-[#d2bd8a] bg-white p-4 transition hover:border-[#6d141b] md:grid-cols-[0.38fr_1fr_auto] md:items-center">
      <img className="aspect-[5/3] w-full object-cover" src={event.image} alt="" />
      <div>
        <p className="text-sm uppercase tracking-[0.16em] text-[#8c6c32]">{event.date} · {event.city}</p>
        <h3 className="mt-2 font-serif text-3xl">{event.title}</h3>
        <p className="mt-2 text-[#5c534b]">{event.summary}</p>
      </div>
      <ArrowRight className="text-[#6d141b]" />
    </Link>
  )
}

function PartnerBand() {
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

function CtaBand() {
  return (
    <section className="bg-[#6d141b] py-18 text-white" data-reveal>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Begin with a conversation, then enter the right room.</h2>
        <ButtonLink to="/contact" variant="light">Contact the house</ButtonLink>
      </div>
    </section>
  )
}

function InquiryForm({ title, compact = false }: { title: string; compact?: boolean }) {
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

function ButtonLink({ to, children, variant = 'default' }: { to: string; children: ReactNode; variant?: 'default' | 'quiet' | 'light' }) {
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

function Meta({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-stone-200">
      <span className="text-[#d9b76f]">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080706] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-2xl text-white">Aurum House</p>
        <p>Frontend prepared for CMS, events, membership, and portal API integration.</p>
      </div>
    </footer>
  )
}

export default App

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ButtonLink, CtaBand, EventRow, IconPanel, LuxuryNote, PartnerBand, Section } from '../components/ui'
import { events, heroImage, highlights } from '../data'

gsap.registerPlugin(ScrollTrigger)

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-copy > *',
        { autoAlpha: 0, y: 28, filter: 'blur(8px)' },
        { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 },
      )
      gsap.to('.hero-image', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 0.7 },
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
        <div className="grid gap-4 md:grid-cols-3" data-stagger>
          {highlights.map((item) => (
            <IconPanel key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured calendar" title="Forthcoming gatherings" tone="light">
        <div className="grid gap-5" data-stagger>
          {events.slice(0, 3).map((event) => (
            <EventRow key={event.slug} event={event} />
          ))}
        </div>
      </Section>

      <LuxuryNote>
        "The most valuable moments are the ones that feel unforced: a perfect table, the right introduction, and the quiet sense that everyone belongs in the room."
      </LuxuryNote>

      <PartnerBand />
      <CtaBand />
    </>
  )
}

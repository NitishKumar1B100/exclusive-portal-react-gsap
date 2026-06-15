import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { CalendarDays, MapPin, UserRound } from 'lucide-react'
import { ButtonLink, Meta, PageHero, Section } from '../components/ui'
import { events } from '../data'

export function EventDetail() {
  const { slug } = useParams()
  const event = useMemo(() => events.find((item) => item.slug === slug), [slug])

  if (!event) {
    return (
      <>
        <PageHero
          eyebrow="Events"
          title="This event is no longer listed."
          copy="Return to the current calendar to review upcoming member experiences."
          image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=85"
        />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <ButtonLink to="/events">Return to events</ButtonLink>
        </div>
      </>
    )
  }

  return (
    <>
      <PageHero eyebrow={event.type} title={event.title} copy={event.summary} image={event.image} />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]" data-reveal>
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
      </section>
      <Section eyebrow="Gallery" title="Atmosphere for the evening.">
        <div className="grid gap-4 md:grid-cols-3" data-stagger>
          {[event.image, 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85'].map((image) => (
            <img key={image} className="aspect-[4/5] w-full object-cover" src={image} alt="" />
          ))}
        </div>
      </Section>
    </>
  )
}

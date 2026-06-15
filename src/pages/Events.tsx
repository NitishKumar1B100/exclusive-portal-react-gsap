import { EventCard, PageHero, Section } from '../components/ui'
import { events, pageHeroImages } from '../data'

export function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Private tables, salons, and seasonal moments."
        copy="A high-touch event calendar built for cultural depth, careful hosting, and international member connection."
        image={pageHeroImages.events}
      />
      <Section eyebrow="Calendar" title="Upcoming member experiences.">
        <div className="grid gap-6 lg:grid-cols-3" data-stagger>
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </Section>
    </>
  )
}

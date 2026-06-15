import { IconPanel, LuxuryNote, PageHero, Section, SplitImage, StatStrip } from '../components/ui'
import { pageHeroImages, values } from '../data'

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Aurum House"
        title="A modern private house with old-world standards."
        copy="Aurum House is built for members who move between cities, industries, and cultures while still valuing thoughtful introductions and private rooms."
        image={pageHeroImages.about}
      />
      <StatStrip
        stats={[
          { value: '12', label: 'host cities' },
          { value: '48', label: 'annual gatherings' },
          { value: '1', label: 'private house standard' },
        ]}
      />
      <SplitImage
        image="https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?auto=format&fit=crop&w=1600&q=85"
        alt="Historic interior prepared for an intimate reception"
      >
        <p>
          The organization curates dining experiences, cultural salons, founder gatherings, seasonal journeys, and partner privileges for a tightly held international community.
        </p>
        <p>
          The work is quiet but exacting: the right room, the right host, the right mix of people, and a rhythm that allows conversation to become relationship.
        </p>
      </SplitImage>
      <Section eyebrow="Mission and values" title="A house code for every gathering.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" data-stagger>
          {values.map((item) => (
            <IconPanel key={item.title} {...item} />
          ))}
        </div>
      </Section>
      <LuxuryNote>
        Membership is not designed around scale. It is designed around fit, continuity, discretion, and the kind of access that only works when trust has already been earned.
      </LuxuryNote>
      <Section eyebrow="Leadership" title="Stewarded by hosts, curators, and membership advisors.">
        <div className="grid gap-4 md:grid-cols-3" data-stagger>
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
    </>
  )
}

import { ChevronRight } from 'lucide-react'
import { PageHero, Section } from '../components/ui'
import { news, pageHeroImages } from '../data'

export function News() {
  return (
    <>
      <PageHero
        eyebrow="News and updates"
        title="Notes from the house calendar."
        copy="Announcements, seasonal openings, partner news, and selected dispatches from the membership team."
        image={pageHeroImages.news}
      />
      <Section eyebrow="Journal" title="Latest from Aurum House.">
        <div className="grid gap-5" data-stagger>
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
      </Section>
    </>
  )
}

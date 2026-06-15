import { Sparkles } from 'lucide-react'
import { InquiryForm, PageHero, Section, StatStrip } from '../components/ui'
import { benefits, membershipTiers, pageHeroImages } from '../data'

export function Membership() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Selective by design, generous once inside."
        copy="A considered application journey for people who value privacy, cultural depth, elegant hospitality, and purposeful connection."
        image={pageHeroImages.membership}
      />
      <StatStrip
        stats={[
          { value: '3', label: 'membership paths' },
          { value: '28', label: 'small-table capacity' },
          { value: '24h', label: 'concierge response target' },
        ]}
      />
      <Section eyebrow="Categories" title="Three paths into the house.">
        <div className="grid gap-5 lg:grid-cols-3" data-stagger>
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
      <Section eyebrow="Benefits" title="The practical luxuries members return for." tone="light">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-stagger>
          {benefits.map((item) => (
            <div key={item.title} className="border border-[#d2bd8a] bg-white p-6">
              <item.icon className="text-[#8c6c32]" size={28} />
              <h3 className="mt-8 font-serif text-3xl text-[#17100b]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#5c534b]">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>
      <InquiryForm title="Begin a membership conversation" />
    </>
  )
}

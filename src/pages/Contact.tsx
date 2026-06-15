import { Mail, MapPin, Phone } from 'lucide-react'
import { InquiryForm, Meta, PageHero } from '../components/ui'
import { pageHeroImages } from '../data'

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="For membership, partnerships, and private event enquiries."
        copy="The membership team reviews each enquiry with discretion and responds with the appropriate next step."
        image={pageHeroImages.contact}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]" data-reveal>
        <div className="grid gap-4 self-start border border-white/10 bg-white/[0.04] p-7">
          <Meta icon={<Mail />} label="membership@aurum.house" />
          <Meta icon={<Phone />} label="+44 20 7946 0188" />
          <Meta icon={<MapPin />} label="Mayfair, London | By appointment" />
        </div>
        <InquiryForm title="Send an enquiry" compact />
      </section>
    </>
  )
}

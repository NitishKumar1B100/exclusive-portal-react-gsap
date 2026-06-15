import type { FormEvent } from 'react'
import { ArrowRight, LockKeyhole } from 'lucide-react'
import { PageHero } from '../components/ui'
import { pageHeroImages } from '../data'

export function Portal() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <>
      <PageHero
        eyebrow="Member portal"
        title="A secure arrival point for members."
        copy="A polished authentication-ready interface for the future member management platform."
        image={pageHeroImages.portal}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]" data-reveal>
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
            <input className="h-13 border border-[#d2bd8a] bg-white px-4 outline-hidden transition focus:border-[#6d141b]" type="password" placeholder="Password" required />
          </label>
          <button className="mt-2 flex h-13 items-center justify-center gap-2 bg-[#6d141b] px-5 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-[#17100b]" type="submit">
            Sign in <ArrowRight size={16} />
          </button>
        </form>
      </section>
    </>
  )
}

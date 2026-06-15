import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronRight, Menu, Sparkles, X } from 'lucide-react'
import { navItems } from '../data'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0a09]/82 backdrop-blur-xl">
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

        <Link
          to="/membership"
          className="hidden items-center gap-2 border border-[#c6a15b]/50 px-4 py-3 text-sm uppercase tracking-[0.14em] text-[#f4dfab] transition hover:bg-[#c6a15b] hover:text-[#17100b] md:flex"
        >
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

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080706] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-2xl text-white">Aurum House</p>
        <p>Frontend prepared for CMS, events, membership, and portal API integration.</p>
      </div>
    </footer>
  )
}

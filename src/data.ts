import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  CalendarCheck,
  Crown,
  Gem,
  Globe2,
  Handshake,
  Landmark,
  Martini,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
} from 'lucide-react'

export type NavItem = {
  label: string
  path: string
}

export type EventItem = {
  slug: string
  title: string
  date: string
  city: string
  type: string
  summary: string
  detail: string
  capacity: string
  image: string
}

export type NewsItem = {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
}

export type MembershipTier = {
  name: string
  price: string
  description: string
  benefits: string[]
}

export type IconBlock = {
  title: string
  copy: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Membership', path: '/membership' },
  { label: 'Events', path: '/events' },
  { label: 'News', path: '/news' },
  { label: 'Portal', path: '/portal' },
  { label: 'Contact', path: '/contact' },
]

export const heroImage =
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85'

export const events: EventItem[] = [
  {
    slug: 'winter-salon-at-the-embassy',
    title: 'Winter Salon at the Embassy',
    date: 'January 18, 2027',
    city: 'London',
    type: 'Cultural Salon',
    summary: 'An evening of chamber music, private collecting, and fireside dining.',
    detail:
      'Members gather inside a restored diplomatic residence for a private recital, a guided conversation with a contemporary art curator, and a five-course winter menu.',
    capacity: '72 members',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'founders-table-kyoto',
    title: 'Founders Table Kyoto',
    date: 'March 6, 2027',
    city: 'Kyoto',
    type: 'Dining Journey',
    summary: 'A private kaiseki dinner hosted by hospitality founders and collectors.',
    detail:
      'A small-format dinner with guided introductions, paired sake, and a quiet discussion on craft, permanence, and family enterprises.',
    capacity: '28 members',
    image:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'monaco-summer-regatta',
    title: 'Monaco Summer Regatta',
    date: 'June 21, 2027',
    city: 'Monaco',
    type: 'Signature Event',
    summary: 'A marina-side reception, private viewing deck, and late supper by invitation.',
    detail:
      'A full-day program built around the regatta, including a partner showcase, relaxed introductions, and a celebratory supper overlooking the harbour.',
    capacity: '120 members',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85',
  },
]

export const news: NewsItem[] = [
  {
    slug: 'new-partner-residences',
    title: 'New partner residences announced across five cities',
    category: 'Partners',
    date: 'December 12, 2026',
    excerpt:
      'Aurum House expands its private hospitality network with residences in Paris, Singapore, New York, Milan, and Dubai.',
  },
  {
    slug: 'membership-council',
    title: 'The 2027 membership council is formed',
    category: 'Community',
    date: 'November 24, 2026',
    excerpt:
      'A rotating council of founders, patrons, and cultural leaders will guide annual programming and member introductions.',
  },
  {
    slug: 'seasonal-dining-calendar',
    title: 'Seasonal dining calendar opens for founding members',
    category: 'Dining',
    date: 'October 30, 2026',
    excerpt:
      'Members may now register interest for closed-table dinners, cellar evenings, and chef-led salons across the winter calendar.',
  },
]

export const membershipTiers: MembershipTier[] = [
  {
    name: 'Associate',
    price: 'By application',
    description: 'For emerging leaders seeking meaningful access to private cultural programming.',
    benefits: ['Monthly salons', 'Partner dining privileges', 'Member concierge introductions'],
  },
  {
    name: 'Resident',
    price: 'Limited intake',
    description: 'For established members who attend frequently and host within the community.',
    benefits: ['Priority event access', 'Guest invitations', 'Private table requests'],
  },
  {
    name: 'Patron',
    price: 'Invitation only',
    description: 'For members shaping the house calendar, partnerships, and legacy programs.',
    benefits: ['Council access', 'Bespoke journeys', 'Founders circle events'],
  },
]

export const highlights: IconBlock[] = [
  {
    title: 'Private access',
    copy: 'Curated rooms, closed-table dinners, and hosted introductions across global cities.',
    icon: Crown,
  },
  {
    title: 'Cultural depth',
    copy: 'Programming across art, design, gastronomy, enterprise, philanthropy, and heritage.',
    icon: Landmark,
  },
  {
    title: 'Trusted community',
    copy: 'Every gathering is designed around discretion, relevance, and thoughtful membership fit.',
    icon: ShieldCheck,
  },
]

export const benefits: IconBlock[] = [
  { title: 'Hosted introductions', copy: 'Purposeful connection before, during, and after events.', icon: Handshake },
  { title: 'Dining privileges', copy: 'Priority access to partner tables, chefs, and private rooms.', icon: Utensils },
  { title: 'Global calendar', copy: 'Member experiences across cultural capitals and seasonal destinations.', icon: Globe2 },
  { title: 'Guest access', copy: 'Invite selected guests to qualifying salons and signature occasions.', icon: Users },
  { title: 'Concierge support', copy: 'A dedicated membership team for applications, requests, and arrivals.', icon: BadgeCheck },
  { title: 'Collectors circle', copy: 'Curator-led previews, acquisitions conversations, and private viewings.', icon: Gem },
]

export const values: IconBlock[] = [
  { title: 'Discretion', copy: 'Privacy and trust sit at the center of every member interaction.', icon: ShieldCheck },
  { title: 'Craft', copy: 'Every touchpoint is considered, from invitations to arrival rituals.', icon: Sparkles },
  { title: 'Belonging', copy: 'The house is intimate by design, with quality of presence over scale.', icon: Martini },
  { title: 'Continuity', copy: 'Relationships are cultivated over seasons, not single transactions.', icon: CalendarCheck },
]

export const partners = ['Maison Vellum', 'Atelier Nocturne', 'The Sterling Rooms', 'Astra Cellars', 'Benedict & Co.']

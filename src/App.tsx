import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components/Layout'
import { usePageMotion } from './hooks/usePageMotion'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { EventDetail } from './pages/EventDetail'
import { Events } from './pages/Events'
import { Home } from './pages/Home'
import { Membership } from './pages/Membership'
import { News } from './pages/News'
import { Portal } from './pages/Portal'

function App() {
  usePageMotion()

  return (
    <div className="min-h-screen bg-[#0b0a09] text-stone-100">
      <Header />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

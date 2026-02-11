import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Logo from './assets/FF-logo.avif'
import Home from './assets/gallery/gallery-8.jpg'

// Program page hero/illustration images (swap to whatever files you want)
import ProgramSleepImg from './assets/gallery/gallery-8.jpg'
import ProgramStemImg from './assets/gallery/gallery-2.jpg'
import ProgramDreamerImg from './assets/gallery/gallery-10.jpg'

// ---------------------------
// Utils
// ---------------------------
function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// ---------------------------
// Navbar (needs router hooks)
// ---------------------------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e, id) => {
    e.preventDefault()

    // If not on home, go home first, then scroll
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToId(id), 60)
    } else {
      scrollToId(id)
    }

    setIsOpen(false)
  }

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded overflow-hidden flex items-center justify-center">
            <img src={Logo} alt="Floorless Foundation Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-display text-xl">Floorless Foundation</h1>
            <p className="text-xs opacity-80">Good night's sleep • STEM for all</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm items-center">
          {['about', 'programs', 'gallery', 'contact'].map((id) => (
            <button
              key={id}
              onClick={(e) => handleNavClick(e, id)}
              className="hover:underline"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button className="ml-2 bg-accent text-primary px-4 py-2 rounded font-semibold hover:brightness-95">
            Donate
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="bg-accent text-primary p-2 rounded">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary text-white px-4 pb-4 flex flex-col gap-3">
          {['about', 'programs', 'gallery', 'contact'].map((id) => (
            <button
              key={id}
              onClick={(e) => handleNavClick(e, id)}
              className="hover:underline text-left"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button className="bg-accent text-primary px-4 py-2 rounded font-semibold hover:brightness-95">
            Donate
          </button>
        </div>
      )}
    </header>
  )
}

// ---------------------------
// Fade helper
// ---------------------------
const useFadeIn = (delay = 0) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])
  return visible ? 'opacity-100 translate-y-0 transition-all duration-700' : 'opacity-0 translate-y-4'
}

// ---------------------------
// Hero
// ---------------------------
const Hero = () => {
  const fade = useFadeIn(100)

  return (
    <section id="about" className="bg-gradient-to-b from-primary/90 to-primary/80 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className={`flex-1 text-center md:text-left ${fade}`}>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">
            A place to sleep, a chance to learn
          </h2>
          <p className="mt-4 text-lg opacity-90">
            The Floorless Foundation provides sleeping kits and STEM experiences for people experiencing homelessness — powered by passionate students and campus partners.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <button
              onClick={() => scrollToId('programs')}
              className="bg-accent text-primary px-5 py-3 rounded-md font-semibold shadow"
            >
              Learn More
            </button>
            <button
              onClick={() => scrollToId('contact')}
              className="border border-white/20 px-5 py-3 rounded-md mt-2 sm:mt-0"
            >
              Contact Us
            </button>
          </div>

          <div className="mt-8 text-sm opacity-90">
            <strong>Campus-friendly:</strong> Volunteer hours, student chapters, service-learning credits.
          </div>
        </div>

        <div className={`flex-1 ${fade}`}>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img alt="sleep kit" src={Home} className="w-full h-64 md:h-80 object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------
// Stats
// ---------------------------
const StatCard = ({ num, label }) => {
  const fade = useFadeIn(200)
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md text-center ${fade}`}>
      <div className="text-3xl font-bold text-primary">{num}</div>
      <div className="mt-1 text-sm opacity-80">{label}</div>
    </div>
  )
}

// ---------------------------
// Programs (navigate to pages)
// ---------------------------
const Programs = () => {
  const fade = useFadeIn(400)
  const navigate = useNavigate()

  const programs = [
    {
      title: "Good Night's Sleep",
      desc: "We distribute sleeping kits and educate volunteers on compassionate outreach.",
      cta: 'Learn More →',
      path: '/programs/good-nights-sleep',
    },
    {
      title: 'STEM WARS',
      desc: 'Hands-on STEM experiences for youth and community centers—run by student teams.',
      cta: 'Learn More →',
      path: '/programs/stem-wars',
    },
    {
      title: 'The DREAMER Scholarship',
      desc: 'Scholarship fund for Savannah State University Mathematic Students.',
      cta: 'Learn More →',
      path: '/programs/dreamer-scholarship',
    },
  ]

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className={`text-2xl font-bold text-primary text-center md:text-left ${fade}`}>Programs</h3>
        <p className={`mt-2 text-sm opacity-90 text-center md:text-left ${fade}`}>
          Student-friendly programs designed for impact and learning.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105 duration-500 flex flex-col justify-between"
            >
              <div>
                <h4 className="font-semibold text-primary mb-2">{program.title}</h4>
                <p className="text-sm opacity-90">{program.desc}</p>
              </div>

              <button
                onClick={() => navigate(program.path)}
                className="mt-4 text-accent font-semibold text-sm self-start"
              >
                {program.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard num="5k+" label="Sleeping kits distributed" />
          <StatCard num="120+" label="Campus volunteers" />
          <StatCard num="30" label="Community events" />
        </div>
      </div>
    </section>
  )
}

// ---------------------------
// Gallery (CRA/Webpack)
// ---------------------------
function importAll(r) {
  return r.keys().map(r)
}
const galleryList = importAll(require.context('./assets/gallery', false, /\.(png|jpe?g|svg|avif)$/))

const Gallery = () => {
  return (
    <section id="gallery" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-primary text-center md:text-left">Gallery</h3>
        <p className="mt-2 text-sm opacity-90 text-center md:text-left">
          Moments from our outreach and STEM events.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryList.map((src, i) => (
            <div
              key={i}
              className="rounded overflow-hidden shadow-sm transform hover:scale-105 transition-transform duration-300"
            >
              <img src={src} alt={`gallery-${i}`} className="w-full h-40 sm:h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------
// Contact
// ---------------------------
const Contact = () => {
  const fade = useFadeIn(800)
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className={`text-2xl font-bold text-primary text-center md:text-left ${fade}`}>Contact Us</h3>
        <p className={`mt-2 text-sm opacity-90 text-center md:text-left ${fade}`}>
          Have questions or want to start a campus chapter? Reach out.
        </p>

        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 rounded border w-full" placeholder="Name" />
          <input className="p-3 rounded border w-full" placeholder="Email" />
          <input className="p-3 rounded border md:col-span-2 w-full" placeholder="Subject" />
          <textarea className="p-3 rounded border md:col-span-2 w-full" rows={5} placeholder="Message" />
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <button className="bg-primary text-white px-5 py-3 rounded font-semibold w-full md:w-auto">
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-6 text-sm opacity-90 text-center md:text-left">
          Email:{' '}
          <a className="underline" href="mailto:FloorlessFoundation@gmail.com">
            FloorlessFoundation@gmail.com
          </a>{' '}
          • Phone: 478-588-7288
        </div>
      </div>
    </section>
  )
}

// ---------------------------
// Footer
// ---------------------------
const Footer = () => (
  <footer className="bg-primary text-white py-6">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm text-center md:text-left">
        © {new Date().getFullYear()} The Floorless Foundation. Created by Render Forge Inc
      </div>
      <div className="flex gap-4 text-sm justify-center md:justify-end">
        <button>Privacy</button>
        <button>Terms</button>
        <button>Instagram</button>
      </div>
    </div>
  </footer>
)

// ---------------------------
// Program detail page (with images)
// ---------------------------
const ProgramDetail = ({ title, subtitle, bullets, heroImg, illustrationImgs }) => {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-16 bg-gray-50 min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-6">
        <button
          onClick={() => {
            navigate('/')
            setTimeout(() => scrollToId('programs'), 60)
          }}
          className="text-sm underline text-primary"
        >
          ← Back to Programs
        </button>

        <div className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          {/* HERO */}
          <div className="relative">
            <img src={heroImg} alt={title} className="w-full h-56 sm:h-72 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white">
                {title}
              </h2>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="mt-1 text-sm md:text-base opacity-90">{subtitle}</p>

            {/* bullets */}
            <div className="mt-6 grid gap-3">
              {bullets.map((b, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-sm opacity-90">{b}</p>
                </div>
              ))}
            </div>

            {/* illustrations */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-primary mb-3">In Action</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {illustrationImgs.slice(0, 3).map((src, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden shadow-sm bg-gray-100 transform hover:scale-[1.02] transition"
                  >
                    <img src={src} alt={`${title} illustration ${i + 1}`} className="w-full h-36 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  navigate('/')
                  setTimeout(() => scrollToId('contact'), 60)
                }}
                className="bg-primary text-white px-5 py-3 rounded-xl font-semibold"
              >
                Get Involved
              </button>

              <button
                onClick={() => {
                  navigate('/')
                  setTimeout(() => scrollToId('contact'), 60)
                }}
                className="border border-primary/20 px-5 py-3 rounded-xl font-semibold text-primary"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const GoodNightsSleepPage = () => (
  <ProgramDetail
    title="Good Night's Sleep"
    subtitle="We provide essential sleeping kits and support compassionate outreach that meets people where they are."
    heroImg={ProgramSleepImg}
    illustrationImgs={[ProgramSleepImg, ProgramStemImg, ProgramDreamerImg]}
    bullets={[
      'Sleeping kits assembled and distributed through community outreach events.',
      'Volunteer training focused on dignity-first engagement and resource awareness.',
      'Campus-friendly service projects and group volunteer opportunities.',
      'Ways to help: donation drives, packing events, and outreach participation.',
    ]}
  />
)

const StemWarsPage = () => (
  <ProgramDetail
    title="STEM WARS"
    subtitle="Student-powered STEM experiences that make learning hands-on, high-energy, and accessible."
    heroImg={ProgramStemImg}
    illustrationImgs={[ProgramStemImg, ProgramSleepImg, ProgramDreamerImg]}
    bullets={[
      'Interactive STEM stations and challenges built for youth and community centers.',
      'Student teams lead demos in coding, engineering, robotics, and applied science.',
      'Supports service-learning hours and campus partnerships.',
      'Ways to help: volunteer facilitation, sponsor supplies, host an event.',
    ]}
  />
)

const DreamerScholarshipPage = () => (
  <ProgramDetail
    title="The DREAMER Scholarship"
    subtitle="A scholarship initiative supporting Savannah State University mathematics students pursuing academic excellence."
    heroImg={ProgramDreamerImg}
    illustrationImgs={[ProgramDreamerImg, ProgramStemImg, ProgramSleepImg]}
    bullets={[
      'Scholarship funds reduce financial barriers for eligible students.',
      'Encourages persistence and achievement in STEM pathways.',
      'Powered by donors, partners, and community advocates.',
      'Ways to help: donate, sponsor a scholar, partner for internship opportunities.',
    ]}
  />
)

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // ensures user lands at the top of the new page
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

// ---------------------------
// Home page
// ---------------------------
const HomePage = () => (
  <>
    <Hero />
    <Programs />
    <Gallery />
    <Contact />
  </>
)

// ---------------------------
// App
// ---------------------------
const AppLayout = () => {
  // Navbar uses router hooks, so keep it inside Router context
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs/good-nights-sleep" element={<GoodNightsSleepPage />} />
          <Route path="/programs/stem-wars" element={<StemWarsPage />} />
          <Route path="/programs/dreamer-scholarship" element={<DreamerScholarshipPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

// export default function App() {
//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   )
// }

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  )
}
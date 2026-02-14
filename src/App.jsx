import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import Logo from './assets/FF-logo.avif'
import Home from './assets/gallery/gallery-8.jpg'
import AboutFounderImg from './assets/gallery/IMG_3324.JPEG'

// Program page hero images
import ProgramStemImg from './assets/gallery/gallery-2.jpg'
import ProgramDreamerImg from './assets/gallery/DreamerScholarship.jpg'

// Program "In Action" images
import DreamerAction1 from './assets/gallery/gallery-6.jpg'
import DreamerAction2 from './assets/gallery/gallery-9.jpg'
import StemAction1 from './assets/gallery/gallery-4.jpg'
import StemAction2 from './assets/gallery/gallery-13.jpg'

// Good Night's Sleep page images (hero + in action)
import GoodNightsMain from './assets/gallery/gallery-15.jpg'
import GoodNightsAction1 from './assets/gallery/gallery-17.jpg'
import GoodNightsAction2 from './assets/gallery/gallery-19.jpg'

// ---------------------------
// Utils
// ---------------------------
function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Ensure route changes land at top
    window.scrollTo(0, 0)
  }, [pathname])

  return null
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
// Navbar
// ---------------------------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e, id) => {
    e.preventDefault()

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
        <button
          type="button"
          onClick={() => {
            if (location.pathname !== '/') navigate('/')
            setTimeout(() => scrollToId('about'), 60)
          }}
          className="flex items-center gap-3 text-left"
          aria-label="Go to home"
        >
          <div className="w-10 h-10 rounded overflow-hidden flex items-center justify-center">
            <img src={Logo} alt="Floorless Foundation Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-display text-xl">Floorless Foundation</h1>
            <p className="text-xs opacity-80">Good night's sleep • STEM for all</p>
          </div>
        </button>

        <nav className="hidden md:flex gap-6 text-sm items-center">
          {['about', 'programs', 'gallery', 'contact'].map((id) => (
            <button key={id} onClick={(e) => handleNavClick(e, id)} className="hover:underline">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button type="button" onClick={() => navigate('/about')} className="hover:underline">
            Our Story
          </button>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeg-ZA4ttHqb9mhUkBxkgMG96lFOaMNJlgJJyMECQNq5vjpEg/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-accent text-primary px-4 py-2 rounded font-semibold hover:brightness-95 inline-block text-center"
          >
            Donate
          </a>
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
            <button key={id} onClick={(e) => handleNavClick(e, id)} className="hover:underline text-left">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              navigate('/about')
              setIsOpen(false)
            }}
            className="hover:underline text-left"
          >
            Our Story
          </button>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeg-ZA4ttHqb9mhUkBxkgMG96lFOaMNJlgJJyMECQNq5vjpEg/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-primary px-4 py-2 rounded font-semibold hover:brightness-95 inline-block text-center"
          >
            Donate
          </a>
        </div>
      )}
    </header>
  )
}

// ---------------------------
// Home Sections
// ---------------------------
const Hero = () => {
  const fade = useFadeIn(100)
  const navigate = useNavigate()

  return (
    <section id="about" className="bg-gradient-to-b from-primary/90 to-primary/80 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className={`flex-1 text-center md:text-left ${fade}`}>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">
            A Place to Sleep, a Chance to Learn
          </h2>
          <p className="mt-4 text-lg opacity-90">
            The Floorless Foundation provides sleeping kits and STEM experiences for people experiencing homelessness —
            powered by passionate students and campus partners.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <button
              onClick={() => navigate('/about')}
              className="bg-accent text-primary px-5 py-3 rounded-md font-semibold shadow"
            >
              About Us
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

const StatCard = ({ num, label }) => {
  const fade = useFadeIn(200)
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md text-center ${fade}`}>
      <div className="text-3xl font-bold text-primary">{num}</div>
      <div className="mt-1 text-sm opacity-80">{label}</div>
    </div>
  )
}

const Programs = () => {
  const fade = useFadeIn(400)
  const navigate = useNavigate()

  const programs = [
    {
      title: "Good Night's Sleep",
      desc: 'We distribute sleeping kits and educate volunteers on compassionate outreach.',
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
      title: "The DREAMER Scholarship",
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
                type="button"
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
        <p className="mt-2 text-sm opacity-90 text-center md:text-left">Moments from our outreach and STEM events.</p>

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

const Contact = () => {
  const fade = useFadeIn(800)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const mailSubject = encodeURIComponent(subject || 'Website Inquiry')
    const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:FloorlessFoundation@gmail.com?subject=${mailSubject}&body=${mailBody}`
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className={`text-2xl font-bold text-primary text-center md:text-left ${fade}`}>Contact Us</h3>
        <p className={`mt-2 text-sm opacity-90 text-center md:text-left ${fade}`}>
          Have questions or want to start a campus chapter? Reach out.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 rounded border w-full"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="p-3 rounded border w-full"
            placeholder="Email"
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-3 rounded border md:col-span-2 w-full"
            placeholder="Subject"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-3 rounded border md:col-span-2 w-full"
            rows={5}
            placeholder="Message"
          />
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <button type="submit" className="bg-primary text-white px-5 py-3 rounded font-semibold w-full md:w-auto">
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

const Footer = () => (
  <footer className="bg-primary text-white py-6">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm text-center md:text-left">
        © {new Date().getFullYear()} The Floorless Foundation. Created by Render Forge Inc
      </div>
      <div className="flex gap-4 text-sm justify-center md:justify-end">
        <button type="button">Privacy</button>
        <button type="button">Terms</button>
        <button type="button">Instagram</button>
      </div>
    </div>
  </footer>
)

// ---------------------------
// Program Pages
// ---------------------------
const ProgramDetail = ({ title, subtitle, bullets, heroImg, illustrationImgs }) => {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-16 bg-gray-50 min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-6">
        <button
          type="button"
          onClick={() => {
            navigate('/')
            setTimeout(() => scrollToId('programs'), 60)
          }}
          className="text-sm underline text-primary"
        >
          ← Back to Programs
        </button>

        <div className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="relative">
            <img src={heroImg} alt={title} className="w-full max-h-[520px] object-contain bg-gray-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white">{title}</h2>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="mt-1 text-sm md:text-base opacity-90">{subtitle}</p>

            <div className="mt-6 grid gap-3">
              {bullets.map((b, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-sm opacity-90">{b}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-primary mb-3">In Action</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {illustrationImgs.slice(0, 3).map((src, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden shadow-sm bg-gray-100 transform hover:scale-[1.02] transition"
                  >
                    <img src={src} alt={`${title} in action ${i + 1}`} className="w-full h-44 object-contain bg-gray-100"/>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  navigate('/')
                  setTimeout(() => scrollToId('contact'), 60)
                }}
                className="bg-primary text-white px-5 py-3 rounded-xl font-semibold"
              >
                Get Involved
              </button>
              <button
                type="button"
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
    subtitle="Your support of the Comfort & Care Outreach program helps provide dignity, warmth, and basic necessities to individuals experiencing hardship. Through the distribution of sleeping bags and hygiene kits, donors directly help ensure that someone has a safer, more comfortable night’s rest and access to essential personal care items. With donor support, this program has already reached over 2,000 individuals, meeting urgent needs while offering compassion and hope. Every contribution helps us continue delivering comfort where it is needed most—because stability begins with care."
    heroImg={GoodNightsMain}
    illustrationImgs={[GoodNightsMain, GoodNightsAction1, GoodNightsAction2]}
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
    subtitle="STEM WARS empowers donors to invest in the future by inspiring the next generation of innovators, leaders, and problem-solvers. Contributions support hands-on STEM education experiences for youth in communities around the world, exposing students to science, technology, engineering, and math in meaningful and engaging ways. Thanks to donor generosity, STEM WARS has already impacted over 20,000 students globally. Your support helps spark curiosity, build confidence, and open doors to educational and career opportunities that can shape a student’s future for years to come."
    heroImg={ProgramStemImg}
    illustrationImgs={[ProgramStemImg, StemAction1, StemAction2]}
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
    subtitle="The Dreamer Scholarship allows donors to make a lasting impact on a student’s academic journey. This program currently awards $1,000 annually to a Savannah State University student who demonstrates determination, resilience, and a commitment to higher education. Donor support makes it possible to reduce financial barriers, ease the burden of tuition and expenses, and empower students to focus on their education. As the Foundation grows, contributions will help us increase the scholarship amount in the near future, expanding opportunities for students to pursue their dreams without limitation."
    heroImg={ProgramDreamerImg}
    illustrationImgs={[ProgramDreamerImg, DreamerAction1, DreamerAction2]}
    bullets={[
      'Scholarship funds reduce financial barriers for eligible students.',
      'Encourages persistence and achievement in STEM pathways.',
      'Powered by donors, partners, and community advocates.',
      'Ways to help: donate, sponsor a scholar, partner for internship opportunities.',
    ]}
  />
)

// ---------------------------
// About Foundation Page (updated layout)
// ---------------------------
const AboutFoundationPage = () => {
  const navigate = useNavigate()
  const [showFullBio, setShowFullBio] = useState(false)

  const storyParas = [
    'The Floorless Foundation was born from compassion, resilience, and a commitment to serve others during one of the most challenging times in recent history.',
    'Founded in 2021 during the COVID-19 pandemic by Karlos Markland and his fraternity brother, Trent Demerritte, the organization began as a grassroots effort to support individuals and families facing hardship.',
    'The Foundation was launched on Karlos’s birthday as a reminder that purpose is best celebrated through service.',
    'What started as a mission to help the less fortunate meet immediate needs has grown into a broader vision of empowerment through stability and education.',
    'Today, The Floorless Foundation works to uplift individuals and communities by addressing both short-term challenges and long-term opportunities—bridging the gap between where people are and where they aspire to be.',
  ]

  const mission =
    'The Floorless Foundation’s mission is to uplift individuals and communities experiencing hardship by providing essential resources—beginning with a safe, clean place to sleep—and expanding access to quality education that empowers long-term success.'

  const visionParas = [
    'We envision a world where no individual is limited by circumstance—where everyone has access to stability, opportunity, and the education needed to build a purposeful future.',
    'By meeting immediate needs and investing in education, innovation, and community empowerment, we strive to create lasting pathways from hardship to opportunity, both locally and globally.',
    'As the Foundation has evolved, so has its impact. In addition to community outreach and basic needs support, The Floorless Foundation is deeply committed to STEM education initiatives and annual scholarships at Savannah State University, helping students overcome financial barriers and continue their academic journeys.',
    'At its core, The Floorless Foundation exists to create pathways—offering hope, dignity, and opportunity to those who need it most. We believe that with the right support, every individual has the ability to rise.',
  ]

  const founderIntro =
    'Karlos Markland is an active-duty Air Force officer, RPA pilot, and community advocate from Atlanta, Georgia, whose passion for service extends far beyond his military career. A proud member of Kappa Alpha Psi Fraternity, Inc., Karlos is deeply rooted in the values of achievement, leadership, and service to others.'

  const founderMore = [
    'He co-founded The Floorless Foundation on his birthday in 2021 alongside his fraternity brother, Trent Demerritte, during the height of the COVID-19 pandemic. What began as a simple effort to help those in need during a time of global uncertainty quickly evolved into a growing nonprofit dedicated to creating long-term opportunity through stability and education.',
    'This mission is personal to Karlos. Having experienced firsthand what it means to need assistance in order to succeed, he is driven by a belief that access and support can change the trajectory of a person’s life.',
    'Through The Floorless Foundation, he focuses on meeting immediate needs while investing in education, particularly through STEM outreach and annual scholarships at Savannah State University.',
    'As a military officer, Karlos brings discipline, integrity, and a global perspective to the Foundation’s work. As a founder, he leads with compassion and purpose—guided by the belief that no one should be defined by their starting point, and everyone deserves the opportunity to rise.',
  ]

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <button
          type="button"
          onClick={() => {
            navigate('/')
            setTimeout(() => scrollToId('about'), 60)
          }}
          className="text-sm underline text-primary"
        >
          ← Back to Home
        </button>

        <div className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="relative">
            <img src={Home} alt="Floorless Foundation community" className="w-full h-56 sm:h-72 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
                About The Floorless Foundation
              </h2>
              <p className="mt-2 text-white/90 max-w-3xl text-sm sm:text-base">
                Compassion • Resilience • Stability • Education
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-primary">Our Story</h3>
                <div className="mt-4 space-y-4">
                  {storyParas.map((p, idx) => (
                    <p key={idx} className="text-sm md:text-base opacity-90 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-50 border border-primary/10 rounded-2xl p-6">
                  <h4 className="font-semibold text-primary">Founded</h4>
                  <p className="mt-1 text-sm opacity-90">2021 (during the COVID-19 pandemic)</p>

                  <div className="mt-5 h-px bg-primary/10" />

                  <h4 className="mt-5 font-semibold text-primary">Founders</h4>
                  <p className="mt-1 text-sm opacity-90">Karlos Markland & Trent Demerritte</p>

                  <div className="mt-5 h-px bg-primary/10" />

                  <h4 className="mt-5 font-semibold text-primary">Focus</h4>
                  <p className="mt-1 text-sm opacity-90">Basic needs + STEM education + scholarships</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-6">
              <div className="bg-primary text-white rounded-2xl p-7 shadow">
                <h3 className="text-lg font-bold">Our Mission</h3>
                <p className="mt-3 text-sm md:text-base text-white/90 leading-relaxed">{mission}</p>
              </div>

              <div className="bg-white border border-primary/10 rounded-2xl p-7 shadow-sm">
                <h3 className="text-lg font-bold text-primary">Our Vision</h3>
                <div className="mt-3 space-y-3">
                  {visionParas.map((p, idx) => (
                    <p key={idx} className="text-sm md:text-base opacity-90 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="bg-white border border-primary/10 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-primary">Founder Highlight</h3>
                      <p className="mt-1 text-sm opacity-90">
                        Karlos Markland <span className="opacity-60">|</span> Founder
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-[220px,1fr] gap-6 items-start">
                    <div className="rounded-2xl border border-primary/10 bg-gray-50 overflow-hidden shadow-sm">
                      <img
                        src={AboutFounderImg}
                        alt="Karlos Markland, Founder"
                        className="w-full aspect-square object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm md:text-base opacity-90 leading-relaxed">{founderIntro}</p>

                      {showFullBio && (
                        <div className="mt-4 space-y-4">
                          {founderMore.map((p, idx) => (
                            <p key={idx} className="text-sm md:text-base opacity-90 leading-relaxed">
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => setShowFullBio((v) => !v)}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                        aria-expanded={showFullBio}
                      >
                        {showFullBio ? 'Read less' : 'Read more'}
                        <span className="opacity-60">→</span>
                      </button>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            navigate('/')
                            setTimeout(() => scrollToId('programs'), 60)
                          }}
                          className="bg-accent text-primary px-5 py-3 rounded-xl font-semibold"
                        >
                          Explore Programs
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            navigate('/')
                            setTimeout(() => scrollToId('contact'), 60)
                          }}
                          className="border border-primary/20 px-5 py-3 rounded-xl font-semibold text-primary"
                        >
                          Partner With Us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  navigate('/')
                  setTimeout(() => scrollToId('programs'), 60)
                }}
                className="bg-primary text-white px-5 py-3 rounded-xl font-semibold"
              >
                View Programs
              </button>
              <button
                type="button"
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

// ---------------------------
// Pages
// ---------------------------
const HomePage = () => (
  <>
    <Hero />
    <Programs />
    <Gallery />
    <Contact />
  </>
)

const AppLayout = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutFoundationPage />} />
          <Route path="/programs/good-nights-sleep" element={<GoodNightsSleepPage />} />
          <Route path="/programs/stem-wars" element={<StemWarsPage />} />
          <Route path="/programs/dreamer-scholarship" element={<DreamerScholarshipPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  )
}
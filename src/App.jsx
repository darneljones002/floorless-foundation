import React, { useState, useEffect } from 'react'
import Logo from './assets/FF-logo.avif'
import Sleep from './assets/sleep-kits.avif'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {/* <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold text-primary">FF</div> */}
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
            <button key={id} onClick={(e) => handleNavClick(e, id)} className="hover:underline">{id.charAt(0).toUpperCase() + id.slice(1)}</button>
          ))}
          <button className="ml-2 bg-accent text-primary px-4 py-2 rounded font-semibold hover:brightness-95">Donate</button>
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
            <button key={id} onClick={(e) => handleNavClick(e, id)} className="hover:underline">{id.charAt(0).toUpperCase() + id.slice(1)}</button>
          ))}
          <button className="bg-accent text-primary px-4 py-2 rounded font-semibold hover:brightness-95">Donate</button>
        </div>
      )}
    </header>
  );
}

const useFadeIn = (delay = 0) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  return visible ? 'opacity-100 translate-y-0 transition-all duration-700' : 'opacity-0 translate-y-4';
}

const Hero = () => {
  const fade = useFadeIn(100);
  return (
    <section id="about" className="bg-gradient-to-b from-primary/90 to-primary/80 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className={`flex-1 text-center md:text-left ${fade}`}>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">A place to sleep, a chance to learn</h2>
          <p className="mt-4 text-lg opacity-90">The Floorless Foundation provides sleeping kits and STEM experiences for people experiencing homelessness — powered by passionate students and campus partners.</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <button onClick={(e) => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })} className="bg-accent text-primary px-5 py-3 rounded-md font-semibold shadow">Get Involved</button>
            <button onClick={(e) => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="border border-white/20 px-5 py-3 rounded-md mt-2 sm:mt-0">Contact Us</button>
          </div>

          <div className="mt-8 text-sm opacity-90">
            <strong>Campus-friendly:</strong> Volunteer hours, student chapters, service-learning credits.
          </div>
        </div>

        <div className={`flex-1 ${fade}`}>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img alt="sleep kit" src={Sleep} className="w-full h-64 md:h-80 object-contain bg-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}

const StatCard = ({ num, label }) => {
  const fade = useFadeIn(200);
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md text-center ${fade}`}>
      <div className="text-3xl font-bold text-primary">{num}</div>
      <div className="mt-1 text-sm opacity-80">{label}</div>
    </div>
  )
}

const Programs = () => {
  const fade = useFadeIn(400);
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className={`text-2xl font-bold text-primary text-center md:text-left ${fade}`}>Programs</h3>
        <p className={`mt-2 text-sm opacity-90 text-center md:text-left ${fade}`}>Student-friendly programs designed for impact and learning.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Good Night's Sleep", desc: "We distribute sleeping kits and educate volunteers on compassionate outreach.", action: "Learn More →" },
            { title: "STEM WARS", desc: "Hands-on STEM experiences for youth and community centers—run by student teams.", action: "Volunteer →" },
            { title: "Campus Chapters", desc: "Start or join a chapter on your campus to organize drives and events.", action: "Start a Chapter →" }
          ].map((program, i) => (
            <div key={i} className={`p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105 duration-500 flex flex-col justify-between`}>
              <div>
                <h4 className="font-semibold text-primary mb-2">{program.title}</h4>
                <p className="text-sm opacity-90">{program.desc}</p>
              </div>
              <button className="mt-4 text-accent font-semibold text-sm self-start">{program.action}</button>
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

const Gallery = () => {
  const fade = useFadeIn(600);
  return (
    <section id="gallery" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className={`text-2xl font-bold text-primary text-center md:text-left ${fade}`}>Gallery</h3>
        <p className={`mt-2 text-sm opacity-90 text-center md:text-left ${fade}`}>Moments from our outreach and STEM events.</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded overflow-hidden shadow-sm transform hover:scale-105 transition-transform duration-500">
              <img src={`/gallery/${i + 1}.jpg`} alt={`gallery-${i}`} className="w-full h-40 sm:h-48 object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center md:justify-start gap-3">
          <button className="text-sm underline" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>View full gallery</button>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  const fade = useFadeIn(800);
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className={`text-2xl font-bold text-primary text-center md:text-left ${fade}`}>Contact Us</h3>
        <p className={`mt-2 text-sm opacity-90 text-center md:text-left ${fade}`}>Have questions or want to start a campus chapter? Reach out.</p>

        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 rounded border w-full" placeholder="Name" />
          <input className="p-3 rounded border w-full" placeholder="Email" />
          <input className="p-3 rounded border md:col-span-2 w-full" placeholder="Subject" />
          <textarea className="p-3 rounded border md:col-span-2 w-full" rows={5} placeholder="Message" />
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <button className="bg-primary text-white px-5 py-3 rounded font-semibold w-full md:w-auto">Send Message</button>
          </div>
        </form>

        <div className="mt-6 text-sm opacity-90 text-center md:text-left">Email: <a className="underline" href="mailto:FloorlessFoundation@gmail.com">FloorlessFoundation@gmail.com</a> • Phone: 478-588-7288</div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-primary text-white py-6">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm text-center md:text-left">© {new Date().getFullYear()} The Floorless Foundation. Created by Render Forge Inc</div>
      <div className="flex gap-4 text-sm justify-center md:justify-end">
        <button>Privacy</button>
        <button>Terms</button>
        <button>Instagram</button>
      </div>
    </div>
  </footer>
)

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home2 from './pages/Home2';
import About from './pages/About';
import Services from './pages/Services';
import Appointments from './pages/Appointments';
import Speaking from './pages/Speaking';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-earth-light text-earth-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/speaking" element={<Speaking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

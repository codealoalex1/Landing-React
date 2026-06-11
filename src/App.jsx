import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function App() {
    return (
        <Router>
            <Navbar />
            <main className="bg-light min-vh-100">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Services />} />
                    <Route path="/portafolio" element={<Portfolio />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
}
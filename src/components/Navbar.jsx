import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
            <div className="container">
                <NavLink className="navbar-brand fw-bold" to="/">MiSPA Expert</NavLink>
                <div className="navbar-nav ms-auto">
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
                    <NavLink className="nav-link" to="/portafolio">Portafolio</NavLink>
                    <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                </div>
            </div>
        </nav>
    );
}
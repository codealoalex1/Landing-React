import Card from '../components/Card';
import Acordion from '../components/Acordion';
import Carusel from '../components/Carusel';

export default function Home() {
    const homeSlides = [
        { img: "https://picsum.photos/id/10/1200/400", title: "Bienvenido a Nuestra SPA", description: "Construida con React y Bootstrap." },
        { img: "https://picsum.photos/id/20/1200/400", title: "Innovación y Velocidad", description: "Rendimiento óptimo sin recargar la página." }
    ];

    const faqItems = [
        { title: "¿Qué es esta plataforma?", content: "Es una SPA modular diseñada bajo las mejores prácticas de React." }
    ];

    return (
        <div className="container py-4">
            <h1>Hola mundo</h1>
        </div>
    );
}
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
            <h1 className="text-center mb-4">Página de Inicio</h1>

            {/* Componente 1: Carrusel Principal */}
            <Carusel slides={homeSlides} />

            {/* Componente 2 e 3: Dos Tarjetas informativas */}
            <div className="row my-4 g-4">
                <div className="col-md-6">
                    <Card title="Nuestra Misión" text="Llevar el desarrollo Frontend al siguiente nivel utilizando componentes limpios." img="https://picsum.photos/id/60/400/250" />
                </div>
                <div className="col-md-6">
                    <Card title="Nuestra Visión" text="Crear interfaces escalables, rápidas y adaptables a cualquier dispositivo." img="https://picsum.photos/id/48/400/250" />
                </div>
            </div>

            {/* Componente 4: Acordeón Preguntas Frecuentes */}
            <h3 className="mt-5">Preguntas Frecuentes</h3>
            <Acordion items={faqItems} />
        </div>
    );
}
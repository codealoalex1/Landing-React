import Card from '../components/Card';
import Carusel from '../components/Carusel';

export default function Portfolio() {
    const projectSlides = [
        { img: "https://picsum.photos/id/30/1200/400", title: "E-Commerce de Alta Gama", description: "Plataforma comercial con pasarela de pagos integrada." },
        { img: "https://picsum.photos/id/42/1200/400", title: "Dashboard Corporativo", description: "Panel analítico para el manejo de Big Data empresariales." }
    ];

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">Nuestro Portafolio</h1>

            {/* Componente 1: Carrusel de Proyectos Destacados */}
            <Carusel slides={projectSlides} />

            <div className="row g-4 my-4">
                {/* Componente 2: Tarjeta Proyecto A */}
                <div className="col-md-4">
                    <Card title="App Móvil Financiera" text="Interfaz nativa para el control de finanzas personales." img="https://picsum.photos/id/201/400/250" />
                </div>
                {/* Componente 3: Tarjeta Proyecto B */}
                <div className="col-md-4">
                    <Card title="Plataforma EdTech" text="Sistemas de aprendizaje e-learning gamificados." img="https://picsum.photos/id/250/400/250" />
                </div>
                {/* Componente 4: Tarjeta Proyecto C */}
                <div className="col-md-4">
                    <Card title="Red Social interna" text="Herramienta corporativa para la comunicación de equipos híbridos." img="https://picsum.photos/id/319/400/250" />
                </div>
            </div>
        </div>
    );
}
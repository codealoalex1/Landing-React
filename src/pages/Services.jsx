import Card from '../components/Card';
import Acordion from '../components/Acordion';

export default function Services() {
    const serviceDetails = [
        { title: "Detalles del Soporte 24/7", content: "Ofrecemos canales de atención prioritaria vía slack y correo electrónico para resolver bloqueos en tiempo récord." }
    ];

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">Nuestros Servicios</h1>

            <div className="row g-4 my-3">
                {/* Componente 1: Tarjeta Servicio 1 */}
                <div className="col-md-4">
                    <Card title="Desarrollo Web" text="Creación de arquitecturas sólidas con React y renderizado ultra rápido." img="https://picsum.photos/id/160/400/250" />
                </div>
                {/* Componente 2: Tarjeta Servicio 2 */}
                <div className="col-md-4">
                    <Card title="UI/UX Design" text="Prototipado moderno enfocado en la usabilidad y conversión del usuario." img="https://picsum.photos/id/180/400/250" />
                </div>
                {/* Componente 3: Tarjeta Servicio 3 */}
                <div className="col-md-4">
                    <Card title="Optimización SEO" text="Estructuración de código limpia para indexar de forma perfecta en motores de búsqueda." img="https://picsum.photos/id/119/400/250" />
                </div>
            </div>

            {/* Componente 4: Acordeón informativo de Garantía */}
            <div className="mt-5">
                <h3>Garantía de Servicio</h3>
                <Acordion items={serviceDetails} />
            </div>
        </div>
    );
}
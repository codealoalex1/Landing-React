import Acordion from '../components/Acordion';
import Card from '../components/Card';

export default function Contact() {
    const locationAccordion = [
        { title: "Sede Central (Madrid)", content: "Calle Gran Vía 45, Nivel 3. Horarios: Lunes a Viernes de 9:00 a 18:00." },
        { title: "Sede Satélite (Ciudad de México)", content: "Av. de la Reforma 222, Piso 10. Horarios: Lunes a Viernes de 8:00 a 17:00." }
    ];

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">Contacto</h1>

            <div className="row my-4 align-items-center">
                {/* Componente 1: Tarjeta de Información Directa */}
                <div className="col-md-6">
                    <Card title="Atención Inmediata" text="Llámanos al +34 900 000 000 o escríbenos a soporte@mispaexpert.com" img="https://picsum.photos/id/373/500/300" />
                </div>

                {/* Componentes 2, 3 y 4: Unificados en una lista de Acordeón estructurada con 3 secciones */}
                <div className="col-md-6">
                    <h3>Nuestras Oficinas y Soporte Técnico</h3>
                    <p className="text-muted">Despliega las opciones para conocer ubicaciones exactas y políticas:</p>
                    <Acordion items={locationAccordion} />
                </div>
            </div>
        </div>
    );
}
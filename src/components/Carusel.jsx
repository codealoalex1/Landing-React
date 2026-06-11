import { useState } from 'react';

export default function Carusel({ slides }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    return (
        <div className="carousel slide shadow rounded overflow-hidden my-4" style={{ maxHieght: '400px' }}>
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`} key={index}>
                        <img src={slide.img} className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt={slide.title} />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                            <h5>{slide.title}</h5>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" onClick={prevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" onClick={nextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
}
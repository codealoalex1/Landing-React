import { useState } from 'react';

export default function Acordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion my-4 shadow-sm">
            {items.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${activeIndex !== index ? 'collapsed' : ''}`}
                            type="button"
                            onClick={() => toggleItem(index)}
                        >
                            {item.title}
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                        <div className="accordion-body">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
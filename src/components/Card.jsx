export default function Card({ title, text, img }) {
    return (
        <div className="card h-100 shadow-sm">
            <img src={img || "https://via.placeholder.com/300x200"} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text text-muted">{text}</p>
                <button className="btn btn-primary btn-sm">Ver más</button>
            </div>
        </div>
    );
}
import "../styles/card.css";

export default function PlayerCard({ name, position, email, photo }) {
    return (
        <div className="card">
            <img src={photo} alt={name} className="card-photo" />
            <h2 className="card-name">{name}</h2>
            <p className="card-position">{position}</p>
            <a href={`mailto:${email}`} className="card-email">
                {email}
            </a>
        </div>
    );
}

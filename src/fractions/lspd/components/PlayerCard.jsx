import "../styles/card.css";

export default function LeaderCard({ name, position, email, photo, onClick }) {
    return (
        <div className="leader-card" onClick={onClick}>
            <div
                className="leader-photo"
                style={{ backgroundImage: `url(${photo})` }}
            >
                <div className="leader-gradient" />
            </div>
            <div className="leader-info">
                <h2 className="leader-name">{name}</h2>
                <p className="leader-position">{position}</p>
                <a href={`mailto:${email}`} className="leader-email" onClick={(e) => e.stopPropagation()}>
                    {email}
                </a>
            </div>
        </div>
    );
}

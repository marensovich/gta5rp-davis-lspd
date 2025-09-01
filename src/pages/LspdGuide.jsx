import LeaderCard from "../components/PlayerCard.jsx";

export default function LspdGuide() {
    const lspdLeaders = [
        {
            name: "Иван Иванов",
            position: "Шеф полиции",
            email: "ivanov@lspd.gov",
            photo: "https://via.placeholder.com/150",
        },
        {
            name: "Петр Петров",
            position: "Заместитель шефа",
            email: "petrov@lspd.gov",
            photo: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="grid">
            {lspdLeaders.map((leader, i) => (
                <LeaderCard key={i} {...leader} />
            ))}
        </div>
    );
}

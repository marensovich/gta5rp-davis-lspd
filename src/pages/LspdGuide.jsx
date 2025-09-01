import LeaderCard from "../components/PlayerCard.jsx";

import ivanov from "../img/1.jpg";
import petrov from "../img/1.jpg";
import smirnov from "../img/1.jpg";
import sidorov from "../img/1.jpg";

export default function LspdGuide() {
    const lspdLeaders = [
        {
            name: "Иван Иванов",
            position: "Шеф полиции",
            email: "ivanov@lspd.gov",
            photo: ivanov,
            level: 0,
        },
        {
            name: "Петр Петров",
            position: "Заместитель шефа",
            email: "petrov@lspd.gov",
            photo: petrov,
            level: 1,
        },
        {
            name: "Алексей Смирнов",
            position: "Глава отдела расследований",
            email: "smirnov@lspd.gov",
            photo: smirnov,
            level: 1,
        },
        {
            name: "Сергей Сидоров",
            position: "Руководитель патрульного департамента",
            email: "sidorov@lspd.gov",
            photo: sidorov,
            level: 2,
        },
    ];

    const grouped = lspdLeaders.reduce((acc, leader) => {
        if (!acc[leader.level]) acc[leader.level] = [];
        acc[leader.level].push(leader);
        return acc;
    }, {});

    const sortedLevels = Object.keys(grouped).sort((a, b) => a - b);

    return (
        <div>
            {sortedLevels.map((level, idx) => (
                <div key={level}>
                    <div className="leaders-row">
                        {grouped[level].map((leader, i) => (
                            <LeaderCard key={i} {...leader} />
                        ))}
                    </div>
                            {idx < sortedLevels.length - 1 && (
                                <hr className="leaders-separator" />
                            )}
                </div>
            ))}
        </div>

    );
}

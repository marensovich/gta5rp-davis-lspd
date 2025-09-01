import { useState } from "react";
import LeaderCard from "../components/PlayerCard.jsx";

import ivanov from "../img/bushido_elusive.png";
import petrov from "../img/1.jpg";
import smirnov from "../img/1.jpg";
import sidorov from "../img/1.jpg";

export default function LspdGuide() {
    const [selectedLeader, setSelectedLeader] = useState(null);

    const lspdLeaders = [
        {
            name: "Иван Иванов",
            position: "Шеф полиции",
            email: "ivanov@gov.sa",
            phone: "+1 (555) 123-4567",
            quote: "Справедливость превыше всего",
            age: 45,
            yearsInService: 20,
            photo: ivanov,
            level: 0,
        },
        {
            name: "Петр Петров",
            position: "Заместитель шефа",
            email: "petrov@lspd.gov",
            phone: "+1 (555) 987-6543",
            quote: "Дисциплина — ключ к порядку",
            age: 40,
            yearsInService: 15,
            photo: petrov,
            level: 1,
        },
        {
            name: "Алексей Смирнов",
            position: "Глава отдела расследований",
            email: "smirnov@lspd.gov",
            phone: "+1 (555) 111-2233",
            quote: "Каждое преступление оставляет след",
            age: 38,
            yearsInService: 12,
            photo: smirnov,
            level: 2,
        },
        {
            name: "Сергей Сидоров",
            position: "Руководитель патрульного департамента",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
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
                            <LeaderCard
                                key={i}
                                {...leader}
                                onClick={() => setSelectedLeader(leader)}
                            />
                        ))}
                    </div>
                            {idx < sortedLevels.length - 1 && (
                                <hr className="leaders-separator" />
                            )}
                </div>
            ))}

            {selectedLeader && (
                <div className="modal-overlay" onClick={() => setSelectedLeader(null)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <img
                                src={selectedLeader.photo}
                                alt={selectedLeader.name}
                                className="modal-photo"
                            />
                            <div className="modal-text">
                                <h2>{selectedLeader.name}</h2>
                                <p><b>Должность:</b> {selectedLeader.position}</p>
                                <p><b>Email:</b> {selectedLeader.email}</p>
                                <p><b>Телефон:</b> {selectedLeader.phone}</p>
                                <p><b>Цитата:</b> «{selectedLeader.quote}»</p>
                                <p><b>Возраст:</b> {selectedLeader.age}</p>
                                <p><b>Стаж:</b> {selectedLeader.yearsInService} лет</p>
                                <button onClick={() => setSelectedLeader(null)}>Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

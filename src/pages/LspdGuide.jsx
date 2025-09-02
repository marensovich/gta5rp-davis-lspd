import { useState } from "react";
import LeaderCard from "../components/PlayerCard.jsx";

import ivanov from "../img/bushido_elusive.png";
import petrov from "../img/1.jpg";
import smirnov from "../img/1.jpg";
import sidorov from "../img/1.jpg";
import separatorImg from "../img/gta5rp_line.png";

export default function LspdGuide() {
    const [selectedLeader, setSelectedLeader] = useState(null);

    const lspdLeaders = [
        {
            name: "Lan DeLuvre",
            position: "Шеф LSPD",
            email: "fixlight@gov.sa",
            phone: "+1 (555) 123-4567",
            quote: "Справедливость превыше всего",
            age: 45,
            yearsInService: 20,
            photo: ivanov,
            level: 0,
        },
        {
            name: "Kimi Acapello",
            position: "Заместитель шефа LSPD",
            email: "petrov@lspd.gov",
            phone: "+1 (555) 987-6543",
            quote: "Дисциплина — ключ к порядку",
            age: 40,
            yearsInService: 15,
            photo: petrov,
            level: 1,
        },
        {
            name: "Vladislav DeRollins",
            position: "Заместитель шефа LSPD",
            email: "smirnov@lspd.gov",
            phone: "+1 (555) 111-2233",
            quote: "Каждое преступление оставляет след",
            age: 38,
            yearsInService: 12,
            photo: smirnov,
            level: 1,
        },
        {
            name: "Sange Psycho",
            position: "Заместитель шефа LSPD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 1,
        },
        {
            name: "Mauricio Aesthetic",
            position: "Начальник отдела DB",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 2,
        },
        {
            name: "Harry DeMonte",
            position: "Начальник отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 2,
        },
        {
            name: "Nick Rice",
            position: "Начальник отдела IAD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 2,
        },
        {
            name: "Amir Quinteired",
            position: "Начальник отдела SWAT",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 2,
        },
        {
            name: "Hamster Hells",
            position: "Начальник отдела CPD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 2,
        },
        {
            name: "Den Iska",
            position: "Заместитель начальника отдела SWAT",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Kayo Psychoo",
            position: "Заместитель начальника отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Polyana DeLuvre",
            position: "Заместитель начальника отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Quiorra Feez",
            position: "Заместитель начальника отдела CPD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Mamed Sacrifice",
            position: "Заместитель начальника отдела DB",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Trofim Alonso",
            position: "Заместитель начальника отдела CPD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Vladimir Exsize",
            position: "Заместитель начальника отдела SWAT",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Eric Hametov",
            position: "Заместитель начальника отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Padre Arasaka",
            position: "Заместитель начальника отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Roy Dixon",
            position: "Заместитель начальника отдела CPD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Revise McLovinez",
            position: "Заместитель начальника отдела DB",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Wisp Evadov",
            position: "Заместитель начальника отдела IAD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
        {
            name: "Emanuel Sinaloa",
            position: "Заместитель начальника отдела IAD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            photo: sidorov,
            level: 3,
        },
    ];

    const grouped = lspdLeaders.reduce((acc, leader) => {
        if (!acc[leader.level]) acc[leader.level] = [];
        acc[leader.level].push(leader);
        return acc;
    }, {});

    const sortedLevels = Object.keys(grouped).sort((a, b) => a - b);

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    return (
        <div>
            {sortedLevels.map((level, idx) => {
                const chunks = chunkArray(grouped[level], 7);
                return (
                    <div key={level}>
                        {chunks.map((chunk, chunkIdx) => (
                            <div key={`${level}-${chunkIdx}`} className="leaders-row">
                                {chunk.map((leader, i) => (
                                    <LeaderCard
                                        key={i}
                                        {...leader}
                                        onClick={() => setSelectedLeader(leader)}
                                    />
                                ))}
                            </div>
                        ))}
                        {idx < sortedLevels.length - 1 && (
                            <img src={separatorImg} alt="separator" className="leaders-separator-img" />
                        )}
                    </div>
                );
            })}

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

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
            department: "Офис Шефа",
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
            department: "Офис Шефа",
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
            department: "Офис Шефа",
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
            department: "Офис Шефа",
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
            department: "Отдел DB",
            photo: sidorov,
            level: 6,
        },
        {
            name: "Mamed Sacrifice",
            position: "Заместитель начальника отдела DB",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел DB",
            photo: sidorov,
            level: 6,
        },
        {
            name: "Revise McLovinez",
            position: "Заместитель начальника отдела DB",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел DB",
            photo: sidorov,
            level: 6,
        },


        {
            name: "Harry DeMonte",
            position: "Начальник отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел PAI",
            photo: sidorov,
            level: 2,
        },
        {
            name: "Kayo Psychoo",
            position: "Заместитель начальника отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел PAI",
            photo: sidorov,
            level: 2,
        },
        {
            name: "Polyana DeLuvre",
            position: "Заместитель начальника отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел PAI",
            photo: sidorov,
            level: 2,
        },
        {
            name: "Eric Hametov",
            position: "Заместитель начальника отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел PAI",
            photo: sidorov,
            level: 2,
        },
        {
            name: "Padre Arasaka",
            position: "Заместитель начальника отдела PAI",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел PAI",
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
            department: "Отдел IAD",
            photo: sidorov,
            level: 4,
        },
        {
            name: "Wisp Evadov",
            position: "Заместитель начальника отдела IAD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел IAD",
            photo: sidorov,
            level: 4,
        },
        {
            name: "Emanuel Sinaloa",
            position: "Заместитель начальника отдела IAD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел IAD",
            photo: sidorov,
            level: 4,
        },


        {
            name: "Amir Quinteired",
            position: "Начальник отдела SWAT",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел SWAT",
            photo: sidorov,
            level: 3,
        },
        {
            name: "Den Iska",
            position: "Заместитель начальника отдела SWAT",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел SWAT",
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
            department: "Отдел SWAT",
            photo: sidorov,
            level: 3,
        },
        {
            name: "Bushido Elusive",
            position: "Заместитель начальника отдела SWAT",
            email: "marensov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел SWAT",
            photo: sidorov,
            level: 3,
        },


        {
            name: "Hamster Hells",
            position: "Начальник отдела CPD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел CPD",
            photo: sidorov,
            level: 5,
        },
        {
            name: "Quiorra Feez",
            position: "Заместитель начальника отдела CPD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел CPD",
            photo: sidorov,
            level: 5,
        },
        {
            name: "Trofim Alonso",
            position: "Заместитель начальника отдела CPD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел CPD",
            photo: sidorov,
            level: 5,
        },
        {
            name: "Roy Dixon",
            position: "Заместитель начальника отдела CPD",
            email: "sidorov@lspd.gov",
            phone: "+1 (555) 444-5566",
            quote: "Патруль — лицо полиции",
            age: 35,
            yearsInService: 10,
            department: "Отдел CPD",
            photo: sidorov,
            level: 5,
        },


    ];

    const grouped = lspdLeaders.reduce((acc, leader) => {
        if (!acc[leader.department]) acc[leader.department] = [];
        acc[leader.department].push(leader);
        return acc;
    }, {});

    const departments = Object.entries(grouped);

    return (
        <div>
            <p className="title">Руководство LSPD</p>

            {departments.map(([dept, leaders], idx) => {
                const [chief, ...deputies] = leaders;

                return (
                    <div key={dept} className="department-block">
                        <h2 className="department-title">{dept}</h2>

                        <div className="leaders-row">
                            <LeaderCard {...chief} onClick={() => setSelectedLeader(chief)}/>

                            {deputies.length > 0 && <div className="deputies-separator"/>}

                            {deputies.map((leader, i) => (
                                <LeaderCard
                                    key={i}
                                    {...leader}
                                    onClick={() => setSelectedLeader(leader)}
                                />
                            ))}
                        </div>

                        {idx < departments.length - 1 && (
                            <img
                                src={separatorImg}
                                alt="separator"
                                className="leaders-separator-img"
                            />
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
                                <h2 className="modal-textName"><b>{selectedLeader.name}</b></h2>
                                <p className="modal-text"><b>Должность:</b> <text className="modal-value">{selectedLeader.position}</text></p>
                                <p className="modal-text"><b>Email:</b> <text className="modal-value">{selectedLeader.email}</text></p>
                                <p className="modal-text"><b>Телефон:</b> <text className="modal-value">{selectedLeader.phone}</text></p>
                                <p className="modal-text"><b>Цитата:</b> <text className="modal-value">«{selectedLeader.quote}»</text></p>
                                <p className="modal-text"><b>Возраст:</b> <text className="modal-value">{selectedLeader.age}</text></p>
                                <p className="modal-text"><b>Стаж:</b> <text className="modal-value">{selectedLeader.yearsInService} лет</text></p>
                                <button className="button" onClick={() => setSelectedLeader(null)}>Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
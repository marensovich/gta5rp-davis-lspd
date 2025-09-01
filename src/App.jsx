// src/App.jsx
import { useState } from "react";

function App() {
    const [activeTab, setActiveTab] = useState("Руководство LSPD");

    const tabs = [
        "Руководство LSPD",
        "Жалобы и обращения",
        "Полиция говорит",
        "Информация о проекте",
    ];

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
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Верхняя панель */}
            <nav className="bg-blue-700 text-white shadow-md">
                <div className="max-w-6xl mx-auto px-6 py-4 flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`${
                                activeTab === tab
                                    ? "border-b-2 border-yellow-400 font-bold"
                                    : "opacity-80 hover:opacity-100"
                            } transition`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Контент */}
            <div className="max-w-6xl mx-auto p-6">
                {activeTab === "Руководство LSPD" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lspdLeaders.map((leader, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
                            >
                                <img
                                    src={leader.photo}
                                    alt={leader.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"
                                />
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {leader.name}
                                </h2>
                                <p className="text-gray-600">{leader.position}</p>
                                <a
                                    href={`mailto:${leader.email}`}
                                    className="text-blue-600 hover:underline mt-3 inline-block"
                                >
                                    {leader.email}
                                </a>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "Жалобы и обращения" && (
                    <p className="text-gray-700 text-lg">
                        Здесь будет форма для жалоб и обращений.
                    </p>
                )}
                {activeTab === "Полиция говорит" && (
                    <p className="text-gray-700 text-lg">
                        Раздел с новостями и публикациями.
                    </p>
                )}
                {activeTab === "Информация о проекте" && (
                    <p className="text-gray-700 text-lg">
                        Здесь будет информация о проекте.
                    </p>
                )}
            </div>
        </div>
    );
}

export default App;

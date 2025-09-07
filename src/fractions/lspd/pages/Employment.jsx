import '../styles/Employment.css';

export default function Employment() {
    return (
        <div className="employment-container">
            <h2 className="employment-title">
                Трудоустройство в ряды LSPD | Davis GTA5RP
            </h2>

            <p className="employment-paragraph">
                Хочешь стать частью <strong>LSPD</strong> и внести свой вклад в безопасность города? Мы открыли набор новых сотрудников!
            </p>

            <p className="employment-paragraph">
                Перед подачей заявления убедись, что ты соответствуешь следующим требованиям:
            </p>

            <ul className="employment-list">
                <li>🔹 <strong>Отсутствие судимостей</strong></li>
                <li>🔹 <strong>Наличие действующей лицензии на оружие</strong></li>
                <li>🔹 <strong>Актуальная медицинская карта</strong></li>
                <li>🔹 <strong>2 и более года проживания в штате</strong></li>
            </ul>

            <p className="employment-paragraph">
                Если всё в порядке — заполни анкету по ссылке ниже:
            </p>

            <p className="employment-paragraph employment-link">
                📎 <a
                href="https://forms.gle/wwAzt7AoqzzHJ9co9"
                target="_blank"
                rel="noopener noreferrer"
            >
                Форма подачи заявления
            </a>
            </p>

            <p className="employment-paragraph">
                <strong>Стань частью команды, которая делает город безопаснее!</strong>
            </p>
        </div>
    );
}

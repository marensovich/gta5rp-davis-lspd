import '../styles/Recovery.css';

export default function Recovery() {
    return (
        <div className="recovery-container">
            <h2 className="recovery-title">
                Восстановление в ряды LSPD | Davis GTA5RP
            </h2>

            <p className="recovery-paragraph">
                Если ты ранее служил(а) в <strong>LSPD</strong> и хочешь восстановиться — сейчас самое время вернуться в строй!
            </p>

            <p className="recovery-paragraph">
                Для подачи заявки на восстановление необходимо соответствовать следующим требованиям:
            </p>

            <ul className="recovery-list">
                <li>🔹 <strong>Отсутствие судимостей</strong></li>
                <li>🔹 <strong>Наличие действующей лицензии на оружие</strong></li>
                <li>🔹 <strong>Актуальная медицинская карта</strong></li>
            </ul>

            <p className="recovery-paragraph">
                Если все условия соблюдены — переходи по ссылке и заполни форму:
            </p>

            <p className="recovery-paragraph recovery-link">
                📎 <a
                href="https://forms.gle/spACGWTjwrqviNYb6"
                target="_blank"
                rel="noopener noreferrer"
            >
                Форма подачи заявления
            </a>
            </p>

            <p className="recovery-paragraph">
                <strong>Ждём тебя на службе — порядок не наводится сам собой!</strong>
            </p>
        </div>
    );
}

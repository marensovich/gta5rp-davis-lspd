import '../styles/ProjectInfo.css';

export default function ProjectInfo() {
    return (
        <div className="about-container">
            <h2 className="about-title">
                О проекте
            </h2>

            <p className="about-paragraph">
                Этот проект был создан с любовью к порядку, ролевому взаимодействию и стремлению сделать игру интересной для всех участников.
            </p>

            <p className="about-paragraph">
                Основатель и идейный вдохновитель — <strong className="highlight">Bushido Elusive</strong>. Он занимается разработкой сайта <strong>LSPD</strong> на сервере <strong>Davis GTA5RP</strong>.
            </p>

            <p className="about-paragraph">
                Если у тебя есть предложения, вопросы или ты хочешь пообщаться напрямую — ты всегда можешь связаться со мной через Discord:
            </p>

            <p className="about-paragraph contact">
                📬 <strong>Discord:</strong> <code><strong>@marensov</strong></code>
            </p>

            <p className="about-paragraph">
                Благодарим за интерес к проекту. Мы ценим каждого, кто готов сделать игру интереснее и внести свой вклад в развитие RP-сообщества.
            </p>
        </div>
    );
}

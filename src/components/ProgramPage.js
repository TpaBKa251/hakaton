// src/components/ProgramPage.js
import React from 'react';
import './ProgramPage.css';
import Navbar from './NavBar';
import maxLogo from "../assets/images/max-messenger-sign-logo.svg"

const ProgramPage = () => {
    return (
        <div className="program-container">
            <Navbar className="navbar visible"/>
            <h1 className="program-title">
                Программа III Всероссийского предпринимательского хакатона
            </h1>
            <h1 className="program-title">
                «Бизнес–кот» – 2026
            </h1>
            <h2 className="program-subtitle">Даты проведения: 14–16 апреля 2026</h2>

            <section className="program-section">
                <h2>14 апреля</h2>
                <ul>
                    <li>
                        <strong className="text-green">13:30 – 14:00</strong>
                        <div>
                            Регистрация участников
                            <em>ул. Белинского, 51, 3 этаж, 309 зал Воробьева</em>
                            <em>Предпринимательская точка кипения</em>
                        </div>
                    </li>
                <li>
                    <strong className="text-green">14:00 – 15:00</strong> Приветственное слово организаторов и экспертов
                </li>
                <li>
                    <strong className="text-green">15:00 – 15:30</strong> Жеребьевка, распределение кейсов по командам
                </li>
                <li>
                    <strong className="text-green">15:30 – 16:30</strong> Тренинг по командообразованию
                </li>
                    <li>

                            <strong className="text-green">16:30 – 18:00</strong>
                        <div>
                            Автобусная экскурсию по городу Томску
                            <em> Место отправления – Профилакторий ТПУ, ул. Усова, 13</em>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="program-section">
                <h2>15 апреля</h2>
                <ul>
                    <li>
                        <strong className="text-green">08:30 – 14:30</strong>
                        <div>
                            Работа команд над кейсами
                            <em>Коворкинг – ул. Белинского, 51</em>
                        </div>
                    </li>
                    <li>
                        <strong className="text-green">14:30 – 15:15</strong>
                        <div>
                            Обед (от спонсоров)
                            <em>Главный корпус ТПУ, пр. Ленина, 30</em>
                        </div>
                    </li>
                    <li>
                        <strong className="text-green">15:30 – 21:00</strong>
                        <div>
                            Работа команд над кейсами
                            <em>Коворкинг – ул. Белинского, 51</em>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="program-section">
                <h2>16 апреля</h2>
                <ul>
                    <li>
                        <strong className="text-green"> 08:30 – 12:15 </strong>
                        <div>
                            Подготовка презентационных материалов
                            <em>Коворкинг – ул. Белинского, 51</em>
                        </div>
                    </li>
                    <li>
                        <strong className="text-green">12:15 – 12:30</strong>
                        <div>
                            Сдача презентационных материалов
                        </div>
                    </li>
                    <li>
                        <strong className="text-green"> 12:30 – 13:00 </strong>
                        <div>
                            Сбор участников
                            <em> ул. Белинского, 51, 3-й этаж, <br/>Предпринимательская точка кипения </em>
                        </div>
                    </li>
                    <li>
                        <strong className="text-green"> 13:00 – 15:00 </strong>
                        <div>
                            Защита решений кейсов
                        </div>
                    </li>
                    <li>
                        <strong className="text-green"> 15:00 – 15:30 </strong>
                        <div>
                            Фуршет (от спонсоров)
                        </div>
                    </li>
                    <li>
                        <strong className="text-green"> 15:30 – 16:30 </strong>
                        <div>
                            Подведение итогов. Награждение.
                        </div>
                    </li>
                </ul>
            </section>

            <section className="program-section">
                <h2>Основные правила и рекомендации</h2>
                <ul>
                    <li>
                        <div>
                            <strong className="text-green">Командная работа:</strong> Участники Хакатона должныработать в команде,
                            поддерживая взаимоуважение и профессиональное общение внутри
                            своей команды и с другими участниками, организаторами и заказчиками.
                        </div>
                        </li>
                    <li>
                        <div>
                            <strong className="text-green">Соблюдение сроков:</strong> Все участники должны соблюдать установленные
                            сроки для презентаций, начала и завершения работ. Невыполнение
                            сроков может привести к дисквалификации.
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong className="text-green">Бережное обращение с оборудованием и помещениями: </strong>
                            Участники должны бережно использовать предоставленное оборудование и помещения.
                            Повреждение имущества могут повлечь за собой финансовую ответственность.
                        </div>
                    </li>
                    <li>
                        <div>
                        <strong className="text-green">Смена команды и задания: </strong>
                            Изменение команды после начала Хакатона
                            запрещено, за исключением случаев, согласованных с организаторами.
                        </div>
                    </li>
                </ul>
            </section>

            <section className="program-section">
                <h2>Критерии оценивания</h2>
                <table className="evaluation-table">
                    <thead>
                    <tr>
                        <th>Критерий</th>
                        <th>Баллы</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><strong className="text-green">Анализ проблемы</strong> - насколько верно,
                            комплексно, и в соответствие с действительностью, участники Хакатона
                            смогли выделить причины возникновения проблемы на объекте, описанной в кейсе
                        </td>
                        <td>1–3</td>
                    </tr>
                    <tr>
                        <td><strong className="text-green">Структурирование проблемы</strong> – насколько четко, логично,
                            последовательно изложена проблема, её последствия и риски для объекта
                        </td>
                        <td>1–3</td>
                    </tr>
                    <tr>
                        <td><strong className="text-green">Обоснование решения</strong> – насколько аргументирована позиция участников относительно предложенного решения кейса</td>
                        <td>1–3</td>
                    </tr>
                    <tr>
                        <td><strong className="text-green">Логичность и реализуемость плана внедрения стратегической инициативы</strong> – насколько соблюдены законы логики
                            при планировании реализации решения,
                            можно ли осуществить предложенный план в текущих экономических условиях
                        </td>
                        <td>1–3</td>
                    </tr>
                    <tr>
                        <td><strong className="text-green">Качество презентации</strong> – насколько презентация решения, представленная командой,
                            соответствует общепринятым требованиям к бизнес-презентациям
                        </td>
                        <td>1–3</td>
                    </tr>
                    <tr>
                        <td><strong className="text-green">Качество выступления</strong> – умение четко и уверенно доносить свои мысли,
                            использовать подходящие интонацию и темп речи,
                            способность «зажечь» аудиторию с первых минут своего выступления и поддерживать интерес слушателей
                        </td>
                        <td>1–3</td>
                    </tr>
                    <tr>
                        <td><strong className="text-green">Ответы на вопросы</strong> - умение взаимодействовать с аудиторией, динамично
                            реагировать на вопросы и аргументировать свою точку зрения
                        </td>
                        <td>1–3</td>
                    </tr>
                    </tbody>
                </table>
                <p style={{textAlign: 'right', fontWeight: 'bold'}}>Итого: 6 – 18 баллов</p>
            </section>

            <section className="program-section">
                <h2>Контакты</h2>

                <p className="no-justify"><strong>Калашникова Татьяна Владимировна</strong></p>

                <p className="no-justify">
                    📞 <a href="tel:+79039515173"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="contact-link"
                >
                    +7 (903) 951-51-73
                </a>
                </p>

                <p className="no-justify">
                    ✉️ <a href="mailto:tvkalash@tpu.ru"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                >
                    tvkalash@tpu.ru
                </a>
                </p>

                <p className="no-justify">
                    <a
                        href="https://vk.com/id303047664"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#0077FF"
                        >
                            <path
                                d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm5.92 16.5h-1.4c-.53 0-.69-.42-1.64-1.33-.83-.79-1.2-.9-1.4-.9-.27 0-.35.08-.35.46v1.2c0 .33-.1.52-.96.52-1.43 0-3.02-.87-4.13-2.49-1.66-2.35-2.11-4.12-2.11-4.48 0-.2.07-.38.46-.38h1.4c.35 0 .48.15.62.52.69 2.01 1.85 3.77 2.33 3.77.18 0 .26-.08.26-.5v-1.96c-.05-.9-.53-.98-.53-1.3 0-.16.13-.32.35-.32h2.2c.3 0 .41.16.41.52v2.64c0 .28.12.38.2.38.18 0 .33-.1.66-.43 1.04-1.16 1.78-2.94 1.78-2.94.1-.2.28-.38.63-.38h1.4c.42 0 .52.22.42.52-.18.86-1.92 3.29-1.92 3.29-.15.24-.2.35 0 .6.15.2.66.65 1 1.05.62.72 1.1 1.33 1.23 1.75.12.42-.09.63-.49.63z"/>
                        </svg>
                        VK
                    </a>
                </p>

                <p className="no-justify">
                    <a
                        href="https://t.me/Tatiana_V_Kalashnikova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#229ED9"
                        >
                            <path
                                d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.47 8.16l-1.97 9.29c-.15.66-.55.82-1.12.51l-3.1-2.29-1.5 1.45c-.17.17-.31.31-.63.31l.22-3.14 5.72-5.17c.25-.22-.05-.35-.38-.13l-7.07 4.45-3.04-.95c-.66-.21-.67-.66.14-.98l11.88-4.58c.55-.2 1.03.13.85.98z"/>
                        </svg>
                        Telegram
                    </a>
                </p>

                <p className="no-justify">
                    <a
                        href="https://max.ru/u/f9LHodD0cOKeHiTuFAR2f4ohNnjN7JKohIumiAKYl7eYjYLwJmJWbMxNL4Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <img
                            src={maxLogo}
                            alt="MAX"
                        />
                        MAX
                    </a>
                </p>
            </section>

            <section className="program-section">
                <h2>Состав жюри</h2>
                <ul>
                    <li>
                        <div>
                        <strong>Лисицын Александр Владимирович</strong>, начальник Управления молодежной политики
                        Администрации г. Томска
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>Андреева Юлия Игоревна</strong>, заместитель генерального директора АО «СХК» <br/> по управлению персоналом
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>Филатов Иван Александрович</strong>, руководитель проекта по взаимодействию <br/> с
                            образовательными учреждениями АО «Сибирский химический комбинат»
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>Рябиков Рамиль Митхатович</strong>, Генеральный директор ООО «Томскнефтехим»
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>Шишкарев Сергей Александрович</strong>, Руководитель службы цифровых
                            технологий компании СИБУР ООО «Томскнефтехим»
                        </div>
                    </li>
                    <li>
                        <div>
                        <strong>Григорьев Олег Васильевич</strong>, начальник Томской дистанции инфраструктуры ОАО «РЖД»
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>Чистякова Наталья Олеговна</strong>, директор Бизнес-школы <br/> Национального
                            исследовательского Томского политехнического университета
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>Зернин Иван Федорович</strong>, председатель совета директоров
                            <br/> ООО «Стартап-студия университетов Томска»
                        </div>
                    </li>
                </ul>
            </section>

            <section className="program-section">
                <h2>Спонсоры</h2>
                <ul>
                    <strong className="text-green">Управление молодежной политики администрации города Томска</strong>
                </ul>
                <ul>
                    <strong className="text-green">АО «Сибирский химический комбинат»</strong>
                </ul>
                <ul>
                    <strong className="text-green">Западно-Сибирская железная дорога - филиал «ОАО РЖД»</strong>
                </ul>
                <ul>
                    <strong className="text-green">ООО «Томскнефтехим» (Группа компании СИБУР)</strong>
                </ul>
                <ul>
                    <strong className="text-green">АО «Альфа-Банк»</strong>
                </ul>
                <ul>
                    <strong className="text-green">Томское РО ООО «СоюзМаш России»</strong>
                </ul>
                <ul>
                    <strong className="text-green">ООО «ВИН БИЗНЕС РЕШЕНИЯ»</strong>
                </ul>
                <ul>
                    <strong className="text-green">Кафе «Ням-Ням»</strong>
                </ul>
                <ul>
                    <strong className="text-green">Make Love Pizza Томск (ООО «Открытый космос»)</strong>
                </ul>
                <ul>
                    <strong className="text-green">ООО «Бочкари»</strong>
                </ul>
                <ul>
                    <strong className="text-green">Столовая «В главном», ООО «Энерго-тракт»</strong>
                </ul>

            </section>

            <section className="program-section">
                <h2>Документ</h2>
                <p>
                    <a
                        href="//hakaton-zeta.vercel.app/Programma_K_kopp.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="program-link"
                    >
                        📄 Открыть DOC
                    </a>
                </p>
            </section>
        </div>
    );
};

export default ProgramPage;

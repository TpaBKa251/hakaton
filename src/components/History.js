import React from 'react';
import './History.css'; // Подключение CSS
import Navbar from "./NavBar";

function History() {
    return (
        <div className="history-container" lang="ru">
            <Navbar className={`navbar visible`}/>
            <h1 className="history-title">
                Бизнес–школа Национального исследовательского Томского политехнического университета
            </h1>
            <p className="history-paragraph">
                С 2024 года Бизнес–школа Томского политехнического университета проводит Всероссийский
                предпринимательский хакатон в городе Томске.
                Это уникальное событие, где молодые и талантливые участники создают инновационную среду,
                отражающую будущее студенческого предпринимательства в студенческой столице России — Томске.
            </p>
            <p className="history-paragraph">
                Хакатон не просто собирает молодых предпринимателей для разработки стартап-идей,
                но и становится местом, где наука и бизнес сольются воедино, создавая новые формы
                успешного взаимодействия. Участники работают над кейсами, освещающими перспективное развитие города
                с богатым культурным наследием, что неизбежно привлекает туристические потоки.
            </p>
            <p className="history-paragraph">
                Предпринимательский Хакатон в Томске стимулирует развитие стартап-сообщества
                и способствует формированию новых бизнес–идей, которые могут изменить облик города,
                делая его более привлекательным для жителей и гостей.
            </p>
            <p className="history-paragraph">
                Присоединяйтесь к нам, чтобы совместно воплотить мечты в жизнь и создать новую, вдохновляющую
                среду для будущих поколений предпринимателей!
            </p>
            <h2 className="history-subtitle">Люди о нас:</h2>
            <ul className="history-list">
                <li className="history-item">
                    Владимир Игоревич Самокиш - депутат Государственной думы Российской Федерации: <a
                    className="history-a"
                    href="https://vk.com/wall587457849_5386">https://vk.com/wall587457849_5386</a>
                </li>
                <li className="history-item">
                    Наталья Олеговна Чистякова - директор Бизнес–школы Томского политехнического университета: <a
                    className="history-a"
                    href="https://vk.com/wall9017487_107">https://vk.com/wall9017487_107</a>
                </li>
                <li className="history-item">
                    Павел Александрович Неверов - генеральный директор "Международный образовательный центр": <a
                    className="history-a"
                    href="https://vk.com/wall422233561_195">https://vk.com/wall422233561_195</a>
                </li>
                <li className="history-item">
                    Политехнический колледж Новгородского Государственного университета имени Ярослава Мудрого (ПТК
                    НоВГУ): <a className="history-a"
                               href="https://www.novsu.ru/university/press/news/229434/">https://www.novsu.ru/university/press/news/229434/</a>
                </li>
            </ul>
            <h2 className="history-subtitle">
                Вузы участники за всю историю хакатона:
            </h2>
            <ul className="history-list">
                <li><a className="history-a"
                       href="https://www.ranepa.ru/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com">Российская
                    академия народного хозяйства и государственной службы при Президенте РФ (РАНХиГС)</a></li>
                <li><a className="history-a" href="https://www.novsu.ru/structure/ptk/">Политехнический колледж
                    Новгородского Государственного университета имени Ярослава Мудрого (ПТК НоВГУ)</a></li>
                <li><a className="history-a" href="https://www.susu.ru/ru">Южно-Уральский государственный
                    университет
                    (ЮУрГУ)</a></li>
                <li><a className="history-a" href="https://www.nstu.ru/">Новосибирский государственный технический
                    университет (НГТУ)</a></li>
                <li><a className="history-a" href="http://www.fa.ru/fil/barnaul/Pages/Home.aspx">Алтайский филиал
                    Финансового университета при Правительстве РФ</a></li>
                <li><a className="history-a" href="https://kuzstu.ru/">Кузбасский государственный технический
                    университет им Т. Ф. Горбачева (КузГТУ)</a></li>
                <li><a className="history-a" href="https://tsu.ru/">Национальный исследовательский Томский
                    государственный университет (ТГУ)</a></li>
                <li><a className="history-a" href="https://tusur.ru/ru">Томский государственный университет систем
                    управления и радиоэлектроники (ТУСУР)</a></li>
                <li><a className="history-a" href="https://wsb.rgup.ru/">Западно-Сибирский филиал Российского
                    государственного университета правосудия</a></li>
            </ul>

        </div>
    );
}

export default History;

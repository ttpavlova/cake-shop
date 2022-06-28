import React from "react";
import "../css/Contacts.css";

function Contacts() {
    return (
        <section className="contacts">
            <div className="contacts__container">
                <h2 className="contacts__title">Контакты</h2>             
                <div className="contacts__content">
                    <div className="contacts__map">
                        <iframe className="contacts__map-iframe" src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c194d08624b8718ba84d59267979526dafc74dc056a8b3b9e18c4c3acd5d9ce&amp;source=constructor" width="600" height="450" title="Map" frameBorder="0"></iframe>
                    </div>
                    
                    <div className="contacts__list">
                        <div className="contacts__phone-part">
                            <div className="contacts__phone">
                                <p className="item__title">Телефон</p>
                                <a className="item__property link" href="tel:+70190102341">+7 (019) 010-23-41</a>
                            </div>
                            <div className="contacts__email">
                                <p className="item__title">E-Mail</p>
                                <a className="item__property link" href="mailto:">feedback@cakeshop.com</a>
                            </div>
                        </div>

                        <div className="contacts__item">
                            <p className="item__title">Адрес</p>
                            <p className="item__property address">Санкт-Петербург, ул. Каменная, 29Д</p>
                            <p className="item__title">Режим работы</p>
                            <p className="item__property">Пн - Вс: 10:00 - 22:00</p>
                        </div>

                        <div className="contacts__item">
                            <p className="item__title">Адрес</p>
                            <p className="item__property address">Санкт-Петербург, Каштановый б-р, 2В</p>
                            <p className="item__title">Режим работы</p>
                            <p className="item__property">Пн - Вс: 09:00 - 21:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
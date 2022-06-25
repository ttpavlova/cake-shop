import React from "react";
import "../css/Contacts.css";

function Contacts() {
    return (
        <section className="contacts">
            <div className="contacts__container">
                <h2 className="contacts__title">Контакты</h2>
                <div className="contacts__content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9584.75141772231!2d30.318864004291115!3d59.93823011453514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1656163519170!5m2!1sru!2sru" width="600" height="450" title="Map" style={{border: "none"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="contacts__list">
                        <div className="contacts__phone-part">
                            <p className="item__title">Телефон</p>
                            <a className="item__property link" href="tel:+70190102341">+7 (019) 010-23-41</a>
                            <p className="item__title">E-Mail</p>
                            <a className="item__property link" href="mailto:">feedback@cakeshop.com</a>
                        </div>

                        <div className="contacts__item">
                            <p className="item__title">Адрес</p>
                            <p className="item__property address">Санкт-Петербург, ул. Садовая, 29Д</p>
                            <p className="item__title">Режим работы</p>
                            <p className="item__property">Пн - Вс: 10:00 - 22:00</p>
                            <p className="item__title">Доставка и самовывоз</p>
                            <p className="item__property">Пн - Вс: 10:00 - 22:00</p>
                        </div>

                        <div className="contacts__item">
                            <p className="item__title">Адрес</p>
                            <p className="item__property address">Санкт-Петербург, Суворовский пр., 2В</p>
                            <p className="item__title">Режим работы</p>
                            <p className="item__property">Пн - Вс: 09:00 - 23:00</p>
                            <p className="item__title">Доставка и самовывоз</p>
                            <p className="item__property">Пн - Вс: 11:00 - 21:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
import React from "react";
import "../css/Promo.css";
import { HashLink } from 'react-router-hash-link';
import promoImg from "../img/promo-bg-3.jpg";

function Promo() {
    return (
        <div className="promo">
            <div className="promo__img-wrapper">
                <img src={promoImg} className="promo__img" alt="promo"></img>
            </div>
            <div className="promo__left">
                <div className="promo__container">
                    <div className="promo__text-wrapper">
                        <div className="promo__title">Торты и десерты на любой вкус</div>
                        <p className="promo__text">Попробуйте наши десерты. Закажите онлайн с доставкой или заберите заказ в любом магазине сети</p>
                        <button className="button promo__btn">
                            <HashLink smooth to="/#dessert-of-the-day" className="promo__link">
                                Сделать заказ
                                <span className="material-symbols-outlined arrow">
                                    trending_flat
                                </span>
                            </HashLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promo;
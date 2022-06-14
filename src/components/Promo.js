import React from "react";
import "../css/Promo.css";
import { HashLink } from 'react-router-hash-link';

function Promo() {
    return (
        <div className="promo">
            <div className="promo__img-wrapper">
                <div className="promo__img"></div>
            </div>
            <div className="promo__left">
                <div className="promo__container">
                    <div className="promo__text-wrapper">
                        <div className="promo__title">Торты и десерты на любой вкус</div>
                        <p className="promo__text">Попробуйте наши десерты. Закажите онлайн с доставкой или заберите заказ в любом магазине сети</p>
                        <button className="button promo__btn">
                            <HashLink smooth to="/#popular" className="promo__link">
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
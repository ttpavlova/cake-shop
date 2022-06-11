import React from "react";
import "../css/Promo.css";

function Promo() {
    return (
        <div className="promo">
            <div className="promo__img-wrapper">
                <div className="promo__img"></div>
            </div>
            <div className="promo__left">
                <div className="promo__container">
                    <div className="promo__text-wrapper">
                        <div className="promo__title">Вкусные торты для всех</div>
                        <p className="promo__text">Попробуйте наши десерты. Закажите онлайн с доставкой или заберите заказ в любом магазине сети.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promo;
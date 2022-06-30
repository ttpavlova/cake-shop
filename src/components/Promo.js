import React from "react";
import "../css/Promo.css";
import { HashLink } from 'react-router-hash-link';
import promoImg from "../img/promo-bg-3.jpg";

function Promo() {
    function getAnchorPosition() {
        let anchorId = "";

        if (window.matchMedia("(min-width: 992px)").matches) {
            // the viewport is at least 992 pixels wide
            anchorId = "promo-footer";
        }
        else {
            // the viewport is less than 992 pixels wide
            anchorId = "dessert-of-the-day";
          }

        return anchorId;
    }

    return (
        <div className="promo">
            <div className="promo__img-wrapper">
                <img src={promoImg} className="promo__img" alt="promo"></img>
            </div>
            <div className="promo__left">
                <div className="promo__container">
                    <div className="promo__text-wrapper">
                        <h1 className="promo__title">Торты и десерты на любой вкус</h1>
                        <p className="promo__text">Наши десерты никого не оставят равнодушным. Закажите онлайн с доставкой или заберите заказ в любой кондитерской сети</p>
                        <HashLink smooth to={"/#" + getAnchorPosition()} className="btn promo__btn" role="button">
                            Сделать заказ
                            <span className="material-symbols-outlined promo__arrow">
                                trending_flat
                            </span>
                        </HashLink>
                    </div>
                </div>
            </div>
            <div className="promo__footer" id="promo-footer"></div>
        </div>
    );
}

export default Promo;
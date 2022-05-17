import React from "react";
import "../css/ProductCard.css";

function ProductCard() {
    return (
        <div className="card">
            <div className="card__img-wrapper">
                <div className="card__img"></div>
            </div>
            <div className="card__title">Название</div>
            <div className="card__description">Домашний ванильный бисквит, сметанный крем-суфле, кусочки консервированной груши.</div>
            <div className="card__footer">
                <div className="card__price">200 Р</div>
                <div className="button">В корзину</div>
            </div>
        </div>
    );
}

export default ProductCard;
import React from "react";
import "../css/ProductCard.css";

function ProductCard(props) {
    return (
        <div className="card">
            <div className="card__img-wrapper">
                <div className="card__img"></div>
            </div>
            <div className="card__title">{props.name}</div>
            <div className="card__description">{props.description}</div>
            <div className="card__footer">
                <div className="card__price">{props.price} Р</div>
                <div className="button card__submit">В корзину</div>
            </div>
        </div>
    );
}

export default ProductCard;
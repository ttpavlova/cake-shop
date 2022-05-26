import React from "react";
import "../css/ProductCard.css";

function ProductCard(props) {

    function isCartView() {
        if (props.className === "cart-view") {
            return true;
        }
    }

    const mainTemplate = (
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

    const cartTemplate = (
        <div className="card cart-view">
            <div className="card__img-wrapper cart-view">
                <div className="card__img"></div>
            </div>
            <div className="card__text">
                <div className="card__title">{props.name}</div>
                <div className="card__description">{props.description}</div>
            </div>
            <div className="card__counter">
                <div className="counter__container">
                    <div className="counter__minus">-</div>
                    <div className="counter__number">0</div>
                    <div className="counter__plus">+</div>
                </div>
            </div>
            <div className="card__footer cart-view">
                <div className="card__price">{props.price} Р</div>
                <div className="button card__submit cart-view">В корзину</div>
            </div>
        </div>
    );

    return (
        <div>{isCartView() ? cartTemplate : mainTemplate}</div>
    );
}

export default ProductCard;
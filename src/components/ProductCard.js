import React from "react";
import "../css/ProductCard.css";

function ProductCard(props) {
    // const cartItemsCount = props.cartItemsCount;
    // const setCartItemsCount = props.setCartItemsCount;

    function isCartView() {
        if (props.className === "cart-view") {
            return true;
        }
    }

    function countPrice(price, numberOfItems) {
        return price * numberOfItems;
    }

    const mainTemplate = (
        <div className="container">
            <div className="card__img-wrapper">
                <div className="card__img"></div>
            </div>
            <div className="card__text">
                <div className="card__title">{props.name}</div>
                <div className="card__description">{props.description}</div>
            </div>
            <div className="card__footer">
                <div className="card__price">{props.price} Р</div>
                <div className="button card__submit" onClick={() => props.onClick()}>В корзину</div>
            </div>
        </div>
    );

    const cartTemplate = (
        <div className="container cart-view">
            <div className="card__img-wrapper cart-view">
                <div className="card__img"></div>
            </div>
            <div className="card__text cart-view">
                <div className="card__title">{props.name}</div>
                <div className="card__description">{props.description}</div>
            </div>
            <div className="card__counter">
                <div className="counter__container">
                    <div className="counter__minus" onClick={props.handleDecreaseQuantity}>-</div>
                    <div className="counter__number">{props.quantity}</div>
                    <div className="counter__plus" onClick={props.handleIncreaseQuantity}>+</div>
                </div>
            </div>
            <div className="card__footer cart-view">
                <div className="card__price">{countPrice(props.price, props.quantity)} Р</div>
                <div className="button card__submit cart-view">В корзину</div>
            </div>
        </div>
    );

    return (
        <div className={"card" + (isCartView() ? " cart-view" : "")}>
            {isCartView() ? cartTemplate : mainTemplate}
        </div>
    );
}

export default ProductCard;
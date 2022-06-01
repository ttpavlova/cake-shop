import React from "react";
import "../css/Cart.css";
import ProductCard from "./ProductCard";

function Cart(props) {
    const items = props.items;
        
    const cakeList = items.map(cake => (
        <ProductCard
            id={cake.id}
            name={cake.name}
            description={cake.description}
            price={cake.price}
            type={cake.type}
            isInCart={cake.isInCart}
            key={cake.id}
            className="cart-view"
        />
    ));

    return (
        <div className="app-wrapper">

            <section className="cart-section">
                <div className="cart-section__container">
                    <div className="cart-section__left">
                        <div className="cart-section__header">
                            <h2 className="cart-section__title">Корзина</h2>
                            <p>Очистить всё</p>
                        </div>
                        <div className="cart-section__content">
                            {cakeList}
                        </div>
                    </div>
                    <div className="cart-section__right">
                        <p>Цена</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;
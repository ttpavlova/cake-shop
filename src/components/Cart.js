import React from "react";
import "../css/Cart.css";
import Header from "./Header";
import ProductCard from "./ProductCard";

function Cart() {
    return (
        <div className="app-wrapper">

            <Header />

            <section className="cart-section">
                <div className="cart-section__container">
                    <div className="cart-section__left">
                        <div className="cart-section__header">
                            <h2 className="cart-section__title">Корзина</h2>
                            <p>Очистить всё</p>
                        </div>
                        <div className="cart-section__content">
                            <ProductCard
                                id="cake1"
                                name="Сметанный торт"
                                description="описание сметанного торта"
                                price="200"
                                type="sour-cream"
                                key="cake1"
                                className="cart-view"
                            />
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
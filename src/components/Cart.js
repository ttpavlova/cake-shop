import React from "react";
import "../css/Cart.css";
import { HashLink } from 'react-router-hash-link';
import ProductCard from "./ProductCard";

function Cart(props) {
    const dessertOfTheDayId = props.dessertOfTheDayId;
    const items = props.items;
    const setItems = props.setItems;
    const cartItemsCount = props.cartItemsCount;
    const totalPrice = props.totalPrice;

    const cartEmptyMessage = (
        <p>Корзина пуста</p>
    );

    function totalPriceMessage() {
        let word = "";
        switch (cartItemsCount) {
            case 1:
                word = "товар";
                break;
            case 2:
            case 3:
            case 4:
                word = "товара";
                break;
            default:
                word = "товаров";
        }
        return <p className="total__text">Цена за {cartItemsCount} {word}: <strong>{totalPrice} ₽</strong></p>
    }

    function isCartEmpty() {
        if (cartItemsCount < 1) {
            return true;
        }
    }

    const priceText = (
        <div>{isCartEmpty() ? cartEmptyMessage : totalPriceMessage()}</div>
    )

    function handleDecreaseQuantity(id) {
        const updatedItems = items.map(item => {
            if (id === item.id) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        });

        setItems(updatedItems);
    }

    function handleIncreaseQuantity(id) {
        const updatedItems = items.map(item => {
            if (id === item.id) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });

        setItems(updatedItems);
    }

    function clearCart() {
        const updatedItems = items.map(item => {
            return {...item, quantity: 0};
        });

        setItems(updatedItems);
    }
        
    const itemList = items.filter(item => item.quantity > 0).map(item => (
        <ProductCard
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
            quantity={item.quantity}
            img={item.img}
            handleDecreaseQuantity={() => handleDecreaseQuantity(item.id)}
            handleIncreaseQuantity={() => handleIncreaseQuantity(item.id)}
            dessertOfTheDayId={dessertOfTheDayId}
            key={item.id}
            className="cart-view"
        />
    ));

    const emptyCartTemplate = (
        <div className="cart-section__text-part">
            <p className="cart-section__empty-cart-text">Сейчас Ваша корзина пуста</p>
            <HashLink smooth to="/#promo-footer" className="button cart-section__back-to-catalog-btn">К каталогу</HashLink>
        </div>
    );

    const mainCartTemplate = (
        <div className="cart-section__container">
            <div className="cart-section__left">
                <div className="cart-section__header">
                    <h2 className="cart-section__title">Корзина</h2>
                    <button className="cart-section__clear-btn" onClick={clearCart}>Очистить всё</button>
                </div>
                <div className="cart-section__content">
                    {itemList}
                </div>
            </div>
            <div className="cart-section__right">
                <div className="cart-section__header">
                    <h2 className="cart-section__title">Итого</h2>
                </div>
                <div className="cart-section__total">
                    {priceText}

                    <button className={"cart-section__checkout-btn" + (isCartEmpty() ? " hidden" : "")}>
                    К оформлению заказа
                    <span className="material-symbols-outlined arrow-icon">
                        navigate_next
                    </span>
                </button>
                </div>
            </div>
        </div>
    );

    return (
            <section className={"cart-section" + (isCartEmpty() ? " empty-cart-view" : " main-cart-view")}>
                {isCartEmpty() ? emptyCartTemplate : mainCartTemplate}
            </section>
    );
}

export default Cart;
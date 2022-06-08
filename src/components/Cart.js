import React from "react";
import "../css/Cart.css";
import ProductCard from "./ProductCard";

function Cart(props) {
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
            handleDecreaseQuantity={() => handleDecreaseQuantity(item.id)}
            handleIncreaseQuantity={() => handleIncreaseQuantity(item.id)}
            key={item.id}
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
            </section>
        </div>
    );
}

export default Cart;
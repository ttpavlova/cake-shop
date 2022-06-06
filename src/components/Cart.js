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
        return <p>Цена за {cartItemsCount} {word}: {totalPrice}</p>
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
        
    const cakeList = items.filter(item => item.quantity > 0).map(cake => (
        <ProductCard
            id={cake.id}
            name={cake.name}
            description={cake.description}
            price={cake.price}
            type={cake.type}
            quantity={cake.quantity}
            handleDecreaseQuantity={() => handleDecreaseQuantity(cake.id)}
            handleIncreaseQuantity={() => handleIncreaseQuantity(cake.id)}
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
                            <button className="cart-section__clear-btn">Очистить всё</button>
                        </div>
                        <div className="cart-section__content">
                            {cakeList}
                        </div>
                    </div>
                    <div className="cart-section__right">
                        <div className="cart-section__header">
                            <h2 className="cart-section__title">Итого</h2>
                        </div>
                        <div className="cart-section__content">
                            {priceText}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;
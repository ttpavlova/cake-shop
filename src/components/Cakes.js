import React, { useState } from "react";
import "../css/Cakes.css";
import FilterButton from "./FilterButton";
import ProductCard from "./ProductCard";

const FILTER_MAP = {
    Все: () => true,
    Сметанные: cake => cake.type === "sour-cream",
    Шоколадные: cake => cake.type === "chocolate",
    Фруктовые: cake => cake.type === "fruit",
    Ягодные: cake => cake.type === "berry"
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Cakes(props) {
    const [filter, setFilter] = useState("Все");

    const items = props.items;
    const setItems = props.setItems;
    const cartItemsCount = props.cartItemsCount;
    const setCartItemsCount = props.setCartItemsCount;

    function handleClick(newItem) {
        const isInArray = items.find(item => item.id === newItem.id);
        if (!isInArray) {
            setItems([...items, newItem]);

            setCartItemsCount(cartItemsCount + 1);
        }
    }

    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    const cakeList = props.cakes.filter(FILTER_MAP[filter]).map(cake => (
        <ProductCard
            id={cake.id}
            name={cake.name}
            description={cake.description}
            price={cake.price}
            type={cake.type}
            isInCart={cake.isInCart}
            onClick={() => handleClick(cake)}
            cartItemsCount={cartItemsCount}
            setCartItemsCount={setCartItemsCount}
            key={cake.id}
        />
    ));

    return (
        <section className="cakes" id="cakes">
            <div className="cakes__container">
                <h2 className="cakes__title">Торты</h2>
                <div className="filters">
                    {filterList}
                </div>
                <div className="cards">
                    {cakeList}
                </div>
            </div>
        </section>
    );
}

export default Cakes;
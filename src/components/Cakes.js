import React, { useState } from "react";
import "../css/Cakes.css";
import FilterButton from "./FilterButton";
import ProductCard from "./ProductCard";

const DATA = [
    {id: 1, name: "Сметанный торт", description: "описание сметанного торта", price: 200, type: "sour-cream"},
    {id: 2, name: "Шоколадный торт", description: "описание шоколадного торта", price: 300, type: "chocolate"},
    {id: 3, name: "Фруктовый торт", description: "описание фруктового торта", price: 250, type: "fruit"},
    {id: 4, name: "Ягодный торт", description: "описание ягодного торта", price: 270, type: "berry"}
]

const FILTER_MAP = {
    Все: () => true,
    Сметанные: cake => cake.type === "sour-cream",
    Шоколадные: cake => cake.type === "chocolate",
    Фруктовые: cake => cake.type == "fruit",
    Ягодные: cake => cake.type === "berry"
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Cakes() {
    const [filter, setFilter] = useState("Все");

    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    const cakeList = DATA.filter(FILTER_MAP[filter]).map(cake => (
        <ProductCard
            id={cake.id}
            name={cake.name}
            description={cake.description}
            price={cake.price}
            type={cake.type}
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
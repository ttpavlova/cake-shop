import React, { useState } from "react";
import "../css/Pastry.css";
import FilterButton from "./FilterButton";
import ProductCard from "./ProductCard";

const FILTER_MAP = {
    Все: () => true,
    Бисквитные: pastry => pastry.type === "biscuit",
    Песочные: pastry => pastry.type === "shortbread",
    Слоёные: pastry => pastry.type === "flaky",
    Заварные: pastry => pastry.type === "custard"
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Pastry(props) {
    const [filter, setFilter] = useState("Все");
    const dessertOfTheDayId = props.dessertOfTheDayId;

    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    const pastryList = props.pastry.filter(FILTER_MAP[filter]).map(pastry => (
        <ProductCard
            id={pastry.id}
            name={pastry.name}
            description={pastry.description}
            price={pastry.price}
            type={pastry.type}
            img={pastry.img}
            onClick={() => props.onClick(pastry.id)}
            dessertOfTheDayId={dessertOfTheDayId}
            key={pastry.id}
        />
    ));

    return (
        <section className="pastry" id="pastry">
            <div className="pastry__container">
                <h2 className="pastry__title">Пирожные</h2>
                <div className="pastry__filters">
                    {filterList}
                </div>
                <div className="pastry__cards">
                    {pastryList}
                </div>
            </div>
        </section>
    );
}

export default Pastry;
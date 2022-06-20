import React from "react";
import "../css/Drinks.css";
import ProductCard from "./ProductCard";

function Drinks(props) {
    const drinksList = props.drinks.map(item => (
        <ProductCard
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
            img={item.img}
            onClick={() => props.onClick(item.id)}
            key={item.id}
        />
    ));

    return (
        <section className="drinks" id="drinks">
            <div className="drinks__container">
                <h2 className="drinks__title">Напитки</h2>
                <div className="drinks__cards">
                    {drinksList}
                </div>
            </div>
        </section>
    );
}

export default Drinks;
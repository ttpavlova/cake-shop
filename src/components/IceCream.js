import React from "react";
import "../css/IceCream.css";
import ProductCard from "./ProductCard";

function IceCream(props) {
    const iceCreamList = props.iceCream.map(iceCream => (
        <ProductCard
            id={iceCream.id}
            name={iceCream.name}
            description={iceCream.description}
            price={iceCream.price}
            type={iceCream.type}
            onClick={() => props.onClick(iceCream.id)}
            key={iceCream.id}
        />
    ));

    return (
        <section className="ice-cream" id="ice-cream">
            <div className="ice-cream__container">
                <h2 className="ice-cream__title">Мороженое</h2>
                <div className="cards">
                    {iceCreamList}
                </div>
            </div>
        </section>
    );
}

export default IceCream;
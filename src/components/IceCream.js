import React from "react";
import "../css/IceCream.css";
import ProductCard from "./ProductCard";

function IceCream() {
    return (
        <section className="ice-cream">
            <div className="ice-cream__container">
                <h2 className="ice-cream__title">Мороженое</h2>
                <div className="cards">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    );
}

export default IceCream;
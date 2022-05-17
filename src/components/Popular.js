import React from "react";
import "../css/Popular.css";
import ProductCard from "./ProductCard";

function Popular() {
    return (
        <section className="popular">
            <div className="popular__title">Популярные десерты</div>
            <div className="cards">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}

export default Popular;
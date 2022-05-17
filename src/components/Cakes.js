import React from "react";
import "../css/Cakes.css";
import ProductCard from "./ProductCard";
import FilterButton from "./FilterButton";

function Cakes() {
    return (
        <section className="cakes">
            <div className="cakes__container">
                <h2 className="cakes__title">Торты</h2>
                <div className="filters">
                    <FilterButton name="Все" />
                    <FilterButton name="Сметанные" />
                    <FilterButton name="Шоколадные" />
                    <FilterButton name="Фруктовые" />
                    <FilterButton name="Ягодные" />
                </div>
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

export default Cakes;
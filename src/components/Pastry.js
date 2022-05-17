import React from "react";
import "../css/Pastry.css";
import FilterButton from "./FilterButton";
import ProductCard from "./ProductCard";

function Pastry() {
    return (
        <section className="pastry">
            <div className="pastry__container">
                <h2 className="pastry__title">Пирожные</h2>
                <div className="filters">
                    <FilterButton name="Все" />
                    <FilterButton name="Сметанные" />
                    <FilterButton name="Песочные" />
                    <FilterButton name="Слоёные" />
                    <FilterButton name="Заварные" />
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

export default Pastry;
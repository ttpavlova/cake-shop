import React from "react";
import "../css/Popular.css";
import ProductCard from "./ProductCard";

function Popular(props) {
    const popularList = props.cakes.filter(cake => cake.id === 3).map(cake => (
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
        <section className="popular">
            <div className="popular__title">Популярные десерты</div>
            <div className="cards">
                {popularList}
            </div>
        </section>
    );
}

export default Popular;
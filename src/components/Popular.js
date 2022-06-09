import React from "react";
import "../css/Popular.css";
import ProductCard from "./ProductCard";

function Popular(props) {
    const popularItems = props.allData.filter(item => item.id === "cake2" || item.id === "cake3" || item.id === "pastry2" || item.id === "pastry3");

    const popularList = popularItems.map(item => (
        <ProductCard
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
            onClick={() => props.onClick(item.id)}
            key={item.id}
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
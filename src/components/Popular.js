import React from "react";
import "../css/Popular.css";
import ProductCard from "./ProductCard";

function Popular(props) {
    const cakeList = props.cakes.filter(cake => cake.id === 2 || cake.id === 3);
    
    const pastryList = props.pastry.filter(pastry => pastry.id === 2 || pastry.id === 3);

    const allItemsList = cakeList.concat(pastryList);

    const popularList = allItemsList.map(item => (
        <ProductCard
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
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
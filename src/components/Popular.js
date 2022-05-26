import React from "react";
import "../css/Popular.css";
import ProductCard from "./ProductCard";

function Popular(props) {
    const cakeList = props.cakes.filter(cake => cake.id === "cake2" || cake.id === "cake3");
    
    const pastryList = props.pastry.filter(pastry => pastry.id === "pastry2" || pastry.id === "pastry3");

    const allItemsList = cakeList.concat(pastryList);

    const popularList = allItemsList.map(item => (
        <ProductCard
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
            key={item.id}
            className={"view"}
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
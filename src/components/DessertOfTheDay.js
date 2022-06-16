import React from "react";
import "../css/DessertOfTheDay.css";
import ProductCard from "./ProductCard";

function DessertOfTheDay(props) {
    const dessertOfTheDayId = props.dessertOfTheDayId;
    const dessertItem = props.allData.filter(item => item.id === dessertOfTheDayId);

    const dessertCard = dessertItem.map(item => (
        <ProductCard
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
            img={item.img}
            onClick={() => props.onClick(item.id)}
            key={item.id}
            className="special-view"
        />
    ));

    return (
        <section className="dessert-of-the-day" id="dessert-of-the-day">
            <div className="dessert-of-the-day__card-part">
                {dessertCard}
            </div>
            <div className="dessert-of-the-day__text-part">
                <div className="dessert-of-the-day__container">
                    <div className="dessert-of-the-day__text-wrapper">
                        <h2 className="dessert-of-the-day__title">Десерт дня</h2>
                        <p className="dessert-of-the-day__text">Закажите Десерт дня сегодня и получите скидку <p className="price-accent">10%!</p></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DessertOfTheDay;
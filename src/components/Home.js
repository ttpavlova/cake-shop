import React from 'react';
import "../css/style.css";
import Promo from './Promo';
import DessertOfTheDay from './DessertOfTheDay';
import Cakes from './Cakes';
import Pastry from './Pastry';
import IceCream from './IceCream';
import Drinks from './Drinks';

function Home(props) {
    const dessertOfTheDayId = props.dessertOfTheDayId;
    const CAKES_DATA = props.cakes;
    const PASTRY_DATA = props.pastry;
    const ICECREAM_DATA = props.iceCream;
    const DRINKS_DATA = props.drinks;
    const ALL_DATA = props.allData;
    const items = props.items;
    
    return (
        <div className="app-wrapper">

            <Promo />

            <DessertOfTheDay
                dessertOfTheDayId={dessertOfTheDayId}
                allData={ALL_DATA}
                items={items}
                onClick={(id) => props.onClick(id)}
            />

            <Cakes
                dessertOfTheDayId={dessertOfTheDayId}
                cakes={CAKES_DATA}
                items={items}
                onClick={(id) => props.onClick(id)}
            />

            <Pastry
                dessertOfTheDayId={dessertOfTheDayId}
                pastry={PASTRY_DATA}
                items={items}
                onClick={(id) => props.onClick(id)}
            />

            <IceCream
                iceCream={ICECREAM_DATA}
                items={items}
                onClick={(id) => props.onClick(id)}
            />

            <Drinks
                drinks={DRINKS_DATA}
                items={items}
                onClick={(id) => props.onClick(id)}
            />

        </div>
    );
}

export default Home;
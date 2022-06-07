import React from 'react';
import "../css/style.css";
import Promo from './Promo';
import Popular from './Popular';
import Cakes from './Cakes';
import Pastry from './Pastry';
import IceCream from './IceCream';
import Drinks from './Drinks';

function Home(props) {
    const CAKES_DATA = props.cakes;
    const PASTRY_DATA = props.pastry;
    const ICECREAM_DATA = props.iceCream;
    const DRINKS_DATA = props.drinks;
    const items = props.items;
    
    return (
        <div className="app-wrapper">

            <Promo />

            <Popular cakes={CAKES_DATA} pastry={PASTRY_DATA} />

            <Cakes
                cakes={CAKES_DATA}
                items={items}
                onClick={(id) => props.onClick(id)}
            />

            <Pastry
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
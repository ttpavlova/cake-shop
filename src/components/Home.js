import React from 'react';
import "../css/style.css";
import Promo from './Promo';
import Popular from './Popular';
import Cakes from './Cakes';
import Pastry from './Pastry';
import IceCream from './IceCream';

function Home(props) {
    const CAKES_DATA = props.cakes;
    const PASTRY_DATA = props.pastry;
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

            <Pastry pastry={PASTRY_DATA} />

            <IceCream />

        </div>
    );
}

export default Home;
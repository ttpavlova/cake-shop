import React from "react";
import"../css/FilterButton.css";

function FilterButton(props) {
    return (
        <button type="button" className="button filter__button">{props.name}</button>
    );
}

export default FilterButton;
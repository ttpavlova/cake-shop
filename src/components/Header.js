import React from "react";
import "../css/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="logo">
                    <a href="#">Cake Shop</a>
                </div>
                <ul className="nav">
                    <li className="nav__link">
                        <a href="#">Торты</a>
                    </li>
                    <li className="nav__link">
                        <a href="#">Пирожные</a>
                    </li>
                    <li className="nav__link">
                        <a href="#">Закуски</a>
                    </li>
                    <li className="nav__link">
                        <a href="#">Мороженое</a>
                    </li>
                    <li className="nav__link">
                        <a href="#">Напитки</a>
                    </li>
                </ul>
                <div className="cart">
                    <button>Корзина</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="logo">
                    <a href="/">Cake Shop</a>
                </div>
                <ul className="nav">
                    <li className="nav__link">
                        <a href="/">Торты</a>
                    </li>
                    <li className="nav__link">
                        <a href="/">Пирожные</a>
                    </li>
                    <li className="nav__link">
                        <a href="/">Мороженое</a>
                    </li>
                    <li className="nav__link">
                        <a href="/">Напитки</a>
                    </li>
                    <li className="nav__link">
                        <Link to="/about">О нас</Link>
                    </li>
                    <li className="nav__link">
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
                <div className="cart">
                    <Link to="/cart">Корзина</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
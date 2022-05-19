import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header() {
    const [isMenuOpened, setMenuOpened] = useState(false);

    return (
        <header className="header">
            <div className="header__container">
                <div className="logo">
                    <a href="/">Cake Shop</a>
                </div>
                <ul className={isMenuOpened ? "nav active" : "nav"}>
                    <li className="nav__link" onClick={() => {setMenuOpened(false)}}>
                        <HashLink smooth to="/#cakes">Торты</HashLink>
                    </li>
                    <li className="nav__link" onClick={() => {setMenuOpened(false)}}>
                        <HashLink smooth to="/#pastry">Пирожные</HashLink>
                    </li>
                    <li className="nav__link" onClick={() => {setMenuOpened(false)}}>
                        <HashLink smooth to="/#ice-cream">Мороженое</HashLink>
                    </li>
                    <li className="nav__link" onClick={() => {setMenuOpened(false)}}>
                        <a href="/">Напитки</a>
                    </li>
                    <li className="nav__link">
                        <Link to="/about">О нас</Link>
                    </li>
                    <li className="nav__link">
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
                <div className={isMenuOpened ? "cart" : "cart hidden"}>
                    <Link to="/cart">Корзина</Link>
                </div>
                <button type="button" className={isMenuOpened ? "burger-menu-btn hidden" : "burger-menu-btn"} onClick={() => {setMenuOpened(true)}}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
                <button type="button" className={isMenuOpened ? "close-menu-btn" : "close-menu-btn hidden"} onClick={() => {setMenuOpened(false)}}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;
import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header(props) {
    const isMenuOpened = props.isMenuOpened;
    const setMenuOpened = props.setMenuOpened;
    const cartItemsCount = props.cartItemsCount;

    return (
        <header className={"header" + (isMenuOpened ? " mobile" : "")}>
            <div className={"header__container" + (isMenuOpened ? " mobile" : "")}>
                <div className={"logo" + (isMenuOpened ? " mobile" : "")}>
                    <a href="/">Cake Shop</a>
                </div>
                <ul className={"nav" + (isMenuOpened ? " active" : "")}>
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
                        <HashLink smooth to="/#drinks">Напитки</HashLink>
                    </li>
                    <li className="nav__link" onClick={() => {setMenuOpened(false)}}>
                        <Link to="/about">О нас</Link>
                    </li>
                    <li className="nav__link" onClick={() => {setMenuOpened(false)}}>
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
                <div className={"cart" + (isMenuOpened ? "" : " hidden")} onClick={() => {setMenuOpened(false)}}>
                    <Link className="cart__text-part" to="/cart">
                        <span className="cart__count">{cartItemsCount + " "}</span>
                        <span className="cart__text">Корзина</span>
                    </Link>
                </div>
                <button type="button" className={"burger-menu-btn" + (isMenuOpened ? " hidden" : "")} onClick={() => {setMenuOpened(true)}}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
                <button type="button" className={"close-menu-btn" + (isMenuOpened ? "" : " hidden")} onClick={() => {setMenuOpened(false)}}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;
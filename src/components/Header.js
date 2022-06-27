import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header(props) {
    const isMenuOpened = props.isMenuOpened;
    const setMenuOpened = props.setMenuOpened;
    const cartItemsCount = props.cartItemsCount;

    function areItemsInCart() {
        if (cartItemsCount > 0) {
            return true;
        }
    }

    return (
        <header className={"header" + (isMenuOpened ? " mobile" : "")}>
            <div className={"header__container" + (isMenuOpened ? " mobile" : "")}>
                <div className={"logo" + (isMenuOpened ? " mobile" : "")}>
                    <a className="nav__link" href="/">
                        Cake <span className="logo__color-part">Shop</span>
                    </a>
                </div>
                <ul className={"nav" + (isMenuOpened ? " mobile" : "")}>
                    <li className="nav__item" onClick={() => {setMenuOpened(false)}}>
                        <HashLink className="nav__link" smooth to="/#cakes">Торты</HashLink>
                    </li>
                    <li className="nav__item" onClick={() => {setMenuOpened(false)}}>
                        <HashLink className="nav__link" smooth to="/#pastry">Пирожные</HashLink>
                    </li>
                    <li className="nav__item" onClick={() => {setMenuOpened(false)}}>
                        <HashLink className="nav__link" smooth to="/#ice-cream">Мороженое</HashLink>
                    </li>
                    <li className="nav__item" onClick={() => {setMenuOpened(false)}}>
                        <HashLink className="nav__link" smooth to="/#drinks">Напитки</HashLink>
                    </li>
                    <li className="nav__item" onClick={() => {setMenuOpened(false)}}>
                        <Link className="nav__link" to="/about">О нас</Link>
                    </li>
                    <li className="nav__item" onClick={() => {setMenuOpened(false)}}>
                        <Link className="nav__link" to="/contacts">Контакты</Link>
                    </li>
                </ul>
                <div className={"cart" + (isMenuOpened ? " mobile" : "")} onClick={() => {setMenuOpened(false)}}>
                    <span className={"cart__count" + (areItemsInCart() ? "" : " hidden")}>{cartItemsCount + " "}</span>
                    <Link className="nav__link cart__icon" to="/cart" title="Корзина">
                        <span className="material-symbols-outlined cart-icon">
                        shopping_cart
                        </span>
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
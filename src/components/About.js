import React from "react";
import "../css/About.css";
import tartsImg1 from "../img/tarts-1.jpg";
import tartsImg2 from "../img/tarts-2.jpg";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function About() {
    return (
        <section className="about" id="about">
            <div className="about__container">
                <h2 className="about__title">О нас</h2>
                <div className="about__content">
                    <div className="about__text-part">
                        <h3 className="about__subtitle">Наша цель</h3>
                        <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="about__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Link className="about__link" to="/contacts">
                            <span className="about__link-text">Найти нас на карте</span>
                            <span className="material-symbols-outlined arrow">
                                trending_flat
                            </span>
                        </Link>
                    </div>
                    <div className="about__img-wrapper img1">
                        <img src={tartsImg1} className="about__img img1" alt="tarts"></img>
                    </div>
                    <div className="about__img-wrapper img2">
                        <img src={tartsImg2} className="about__img img2" alt="tarts"></img>
                    </div>
                    <div className="about__text-part">
                        <h3 className="about__subtitle">Разнообразие вариантов</h3>
                        <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="about__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <HashLink className="about__link" smooth to="/#cakes">
                            <span className="about__link-text">К ассортименту</span>
                            <span className="material-symbols-outlined arrow">
                                trending_flat
                            </span>
                        </HashLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
import React from "react";
import "../css/About.css";
import tartsImg1 from "../img/tarts-1.jpg";
import tartsImg2 from "../img/tarts-2.jpg";

function About() {
    return (
        <section className="about">
            <div className="about__container">
                <h2 className="about__title">О нас</h2>
                <div className="about__content">
                    <p>Наши усилия полностью направлены на создание десертов высокого качества. Мы используем только качественные и натуральные ингредиенты. (Мы используем только натуральные ингредиенты высокого качества). Готовим как известные кулинарные произведения: «Прага», «Наполеон», «Красный Бархат», так и современные интересные десерты.</p>
                    <div className="about__img-wrapper">
                        <img src={tartsImg1} className="about__img img1" alt="tarts"></img>
                    </div>
                    <div className="about__img-wrapper">
                        <img src={tartsImg2} className="about__img img2" alt="tarts"></img>
                    </div>
                    <p>Наши усилия полностью направлены на создание десертов высокого качества. Мы используем только качественные и натуральные ингредиенты. (Мы используем только натуральные ингредиенты высокого качества).</p>
                </div>
            </div>
        </section>
    );
}

export default About;
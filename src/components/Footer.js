import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer-menu">
                    <div className="footer-menu__column">
                        <ul>
                            <li className="footer-menu__item">
                                <p className="footer-menu__text">© 2022 Cake Shop</p>
                            </li>
                            <li className="footer-menu__item">
                                <a className="footer-menu__link" href="mailto:">feedback@cakeshop.com</a>
                            </li>
                            <li className="footer-menu__item">
                                <span className="footer-menu__link icon-credits">
                                    <a className="icon-credits__link" target="_blank" rel="noreferrer" href="https://icons8.com/icon/68n8FtrxyoFt/strawberry-cake">Иконка</a><span className="icon-credits__text"> сайта от </span><a className="icon-credits__link" target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-menu__column">
                        <ul>
                            <li className="footer-menu__item">
                                <Link className="footer-menu__link" to="/about">О нас</Link>
                            </li>
                            <li className="footer-menu__item">
                                <a className="footer-menu__link" href="/about">Вакансии</a>
                            </li>
                            <li className="footer-menu__item">
                                <a className="footer-menu__link" href="/contacts">Обратная связь</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer__social-links">
                    <a className="link__vk" href="https://vk.com/" target={"_blank"} rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                            <path d="M127.62,39c0.84-2.8,0-4.86-4-4.86H110.41a5.71,5.71,0,0,0-5.75,3.74s-6.72,16.38-16.24,27c-3.08,3.08-4.48,4.06-6.16,4.06-0.84,0-2.1-1-2.1-3.78V39c0-3.36-.93-4.86-3.73-4.86H55.67a3.19,3.19,0,0,0-3.36,3c0,3.19,4.76,3.92,5.25,12.88V69.51c0,4.27-.77,5-2.45,5-4.48,0-15.38-16.45-21.84-35.28-1.27-3.66-2.54-5.14-5.91-5.14H14.14c-3.78,0-4.53,1.78-4.53,3.74,0,3.5,4.48,20.86,20.86,43.82,10.92,15.68,26.3,24.18,40.3,24.18,8.4,0,9.44-1.89,9.44-5.14V88.88c0-3.78.8-4.53,3.46-4.53,2,0,5.32,1,13.16,8.54,9,9,10.44,13,15.48,13h13.21c3.78,0,5.66-1.89,4.57-5.61s-5.47-9.1-11.15-15.48c-3.08-3.64-7.7-7.56-9.1-9.52-2-2.52-1.4-3.64,0-5.88C109.84,69.37,125.94,46.69,127.62,39Z"></path>
                        </svg>
                    </a>
                    <a className="link__ig" href="https://www.instagram.com/" target={"_blank"} rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-2 -2 20 20">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
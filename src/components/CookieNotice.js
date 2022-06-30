import React, { useState } from "react";
import "../css/CookieNotice.css";

function CookieNotice() {
    const [isCookieNoticeRead, setCookieNoticeRead] = useState(hasUserAgreedToCookies());

    function hasUserAgreedToCookies() {
        let hasUserAgreedToCookies = localStorage.getItem("cookieNotice");

        if (hasUserAgreedToCookies) {
            return true;
        }

        return false;
    }

    function agreeToCookies() {
        localStorage.setItem("cookieNotice", true);
        setCookieNoticeRead(true);
    }

    return (
        <div className={"cookie-notice" + (isCookieNoticeRead ? " hidden" : "")}>
            <div className="cookie-notice__container">
                <p className="cookie-notice__text">Мы используем файлы cookies, чтобы улучшить взаимодействие пользователей с сайтом.</p>
                <button className="btn cookie-notice__button" onClick={agreeToCookies}>Понятно</button>
            </div>
        </div>
    );
}

export default CookieNotice;
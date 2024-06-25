import React, {useEffect, useState} from "react";
// import headerLogo from "../images/logo_white.svg";
import {Link, NavLink, Route, Switch, useLocation} from "react-router-dom";
import head from '../images/head.jpg'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Закрытие меню при изменении location (если нужно)
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const getPageTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Главная';
            case '/chaconne':
                return 'Чакона';
            case '/biography':
                return 'Биография';
            case '/exhibitions':
                return 'Выставки';
            case '/gallery':
                return 'Галерея';
            case '/video':
                return 'Видео';
            case '/demo':
                return 'DEMO';
            case '/book':
                return 'Теория';
            case '/contacts':
                return 'Контакты';
            default:
                return 'Главная';
        }
    };

    return (
        <div className='header'>
            <div className="burger-menu-container">
                <div></div>
                <div className="burger-panel">{getPageTitle()}</div>
                <div id="burger-menu" onClick={toggleMenu}>
                    <div className="burger-icon">&#9776;</div>
                </div>
            </div>

            <nav className={menuOpen ? 'open' : ''}>
                <div id="close-menu" onClick={toggleMenu}>
                    <div className="close-icon">&#10006;</div>
                </div>
                <NavLink exact to="/">Главная</NavLink>
                <NavLink to="/chaconne">Чакона</NavLink>
                <NavLink to="/biography">Биография</NavLink>
                <NavLink to="/exhibitions">Выставки</NavLink>
                <NavLink to="/gallery">Галерея</NavLink>
                <NavLink to="/video">Видео</NavLink>
                <NavLink to="/demo">DEMO</NavLink>
                <NavLink to="/book">Теория</NavLink>
                <NavLink to="/contacts">Контакты</NavLink>
            </nav>

            <img src={head} alt="Прелюдия Шопена Chopin Prelude"/>
        </div>
    );
};

export default Header;
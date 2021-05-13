import { NavLink } from "react-router-dom";
import logo from "../img/logo.png"; 
import React from 'react'

export default React.memo(function Logo() {
    return (
        <NavLink to='/' className="header__column header__row">
            <div className="header__column">
                <img src={logo} alt="логотип" />
            </div>
            <div className="header__column column-text">
                <div className="header__title">REACT PIZZA</div>
                <div className="header__text">самая вкусная пицца во вселенной</div>
            </div>
        </NavLink>
    )
})
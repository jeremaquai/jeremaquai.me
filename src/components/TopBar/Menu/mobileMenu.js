import React from "react";

import { MAINMENUDATA } from "../../../data/MainMenuData";

import './Menu.css';
import { NavLink } from "react-router-dom";

export default function MobileMenu() {
    return (
        <nav className="mobileMenu" >
            {MAINMENUDATA.map((menuItem, index) => {
                return (
                    <div key={index} className="mobileMenuItem">
                        <NavLink to={menuItem.path}>
                            {menuItem.name}
                        </NavLink>

                    </div>
                );
            })}
        </nav>
    );
}
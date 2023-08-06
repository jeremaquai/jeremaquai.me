import React from "react";

// import { MAINMENUDATA } from "../../../data/MainMenuData";
import { useSelector } from "react-redux";
import { selectMenu } from "../../SideBar/Menu/menuSlice";

import './Menu.css';
import { NavLink } from "react-router-dom";

export default function MobileMenu() {

    const menuItems = useSelector(selectMenu);

    return (
        <nav className="mobileMenu" >
            {menuItems.map((menuItem, index) => {
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
import React from "react";

import { useSelector } from "react-redux";
import { selectMenu } from "./menuSlice";

import './Menu.css';
import { NavLink } from "react-router-dom";

export default function Menu() {

    const menuItems = useSelector(selectMenu);

    return (
        <nav>
            {menuItems.map((menuItem, index) => {
                return (
                    <div key={index} className="menuItem">
                        <NavLink to={menuItem.path}>
                            {menuItem.name}
                        </NavLink>

                    </div>
                );
            })}
        </nav>
    );
}
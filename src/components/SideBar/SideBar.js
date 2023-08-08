import React from "react";

import './SideBar.css';
import Menu from "./Menu/Menu";

export default function SideBar() {
    return (
        <div role="menubar" className="SideBar">
            <Menu />
        </div>
    );
}
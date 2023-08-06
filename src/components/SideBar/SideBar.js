import React from "react";

import './SideBar.css';
import Menu from "./Menu/Menu";

export default function SideBar() {
    return (
        <div role="sidebar" className="SideBar">
            <Menu />
        </div>
    );
}
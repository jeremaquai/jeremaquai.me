import React from "react";

import './TopBar.css';
import  MobileMenu  from "./Menu/mobileMenu";

export default function TopBar() {
    return (
        <div className="TopBar">
            <MobileMenu />
        </div>
    );
}
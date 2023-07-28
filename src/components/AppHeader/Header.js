import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { PATHS } from "../../data/Paths";

import './Header.css';

export default function Header() {
    return (
        <header>
            <Link to={PATHS.home} >
                <h1>Jeremaquai.me</h1>
            </Link>
                
        </header>
    );
}
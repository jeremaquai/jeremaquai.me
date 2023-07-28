import React from "react";
import './HomePage.css';
import beastfrogLogo from '../../images/BeastFrogLogo.png'

export default function HomePage() {
    return (
        <div className="HomePage" >
            <h2>Welcome to jeremaquai.me</h2>
            <img className="beastfrogLogo" alt="My Beast Frog Logo" src={beastfrogLogo}/>
        </div>
    );
}
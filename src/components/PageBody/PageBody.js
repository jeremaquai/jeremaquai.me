import React from "react";

import { 
    Switch,
    Route  
} from "react-router-dom";

import { PATHS } from "../../data/Paths";

import './PageBody.css';
import HomePage from "../../pages/HomePage/HomePage";
import AboutMe from "../../pages/AboutMe/AboutMe";

export default function PageBody() {
    return (
        <div className="switch">
            <Switch>
                <Route exact path={PATHS.home} >
                    <HomePage />
                </Route>
                <Route path={PATHS.about} >
                    <AboutMe />
                </Route>
            </Switch>
        </div>
    );
}
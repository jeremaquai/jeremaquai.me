import React from "react";

import { 
    Switch,
    Route  
} from "react-router-dom";

import { PATHS } from "../../data/Paths";

import './PageBody.css';
import HomePage from "../../pages/HomePage/HomePage";

export default function PageBody() {
    return (
        <div className="switch">
            <Switch>
                <Route path={PATHS.home} >
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
}
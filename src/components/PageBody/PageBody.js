import React from "react";

import { 
    Switch,
    Route  
} from "react-router-dom";

import { PATHS } from "../../data/Paths";

import './PageBody.css';
import HomePage from "../../pages/HomePage/HomePage";
import AboutMe from "../../pages/AboutMe/AboutMe";
import Education from "../../pages/Education/Education";
import Skills from "../../pages/Skills/Skills";
import ProgramPage from "../../pages/ProgramPage/ProgramPage";

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
                <Route exact path={PATHS.education} >
                    <Education />
                </Route>
                <Route path={PATHS.educationProgram} >
                    <ProgramPage />
                </Route>
                <Route path={PATHS.skills} >
                    <Skills />
                </Route>
            </Switch>
        </div>
    );
}
import React from "react";
import './ProjectsPage.css';

import { selectProjectCategories } from "./projectsSlice";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

export default function ProjectsPage() {

    const projectCategories = useSelector(selectProjectCategories);
    console.log(projectCategories);

    return (
        <div className="projectsPage" >
            <h2>Projects</h2>
            <div className="projectsCardsDiv" >
                { projectCategories.map((category, index) => {
                    return (
                        <div className="navlinkdiv" >
                        <NavLink  key={index} to={category.path} >
                            <CategoryCard
                                name={category.name}
                                projects={ category.projects } />
                        </NavLink>
                        </div>
                    );
                }) }
            </div>
        </div>
    );
}
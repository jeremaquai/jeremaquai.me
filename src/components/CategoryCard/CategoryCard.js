import React from "react";
import './CategoryCard.css';

export default function CategoryCard(props) {
    return (
        <div className="categoryCard" >
            <h3>{props.name}</h3>
            <ul>
                {props.projects.map((project, index) => {
                    return <li key={index} > {project.name} </li>;
                })}
            </ul>
        </div>
    );
}
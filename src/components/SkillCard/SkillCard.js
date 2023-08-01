import React from "react";
import './SkillCard.css';

export default function SkillCard(props) {
    return (
        <div className="skillCard" >
            {props.image}
            <h3> {props.name} </h3>
            <h3> {props.startDate} </h3>
        </div>
    );
}

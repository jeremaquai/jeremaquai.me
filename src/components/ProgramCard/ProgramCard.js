import React from "react";
import './ProgramCard.css';

export default function ProgramCard(props) {
    return (
        <div className="programCard" >
            <h3>{props.program}</h3>
            <h4>Start Date : {props.startDate}</h4>
            <img alt="" src={props.logo} />
        </div>
    );
}

import React from "react";
import './ProgramCard.css';

export default function ProgramCard(props) {
    return (
        <div className="programCard" >
            <h3>{props.program}</h3>
            <h4>Start Date : {props.startDate}</h4>
            <h4>completion Date: {props.completionDate} </h4>
            <img className="programLogo" alt="" src={props.logo} />
        </div>
    );
}

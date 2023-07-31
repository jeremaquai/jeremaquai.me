import React from "react";
import './ProgramCard.css';


export default function ProgramCard(props) {
    return (
        <div className="programCard" >
            {props.image}
            <h3>{props.program}</h3>
            <h4>Start Date : {props.startDate}</h4>
            <h4>completion Date: {props.completionDate} </h4>
             
            
        </div>
    );
}

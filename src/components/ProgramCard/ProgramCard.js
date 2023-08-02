import React from "react";
import './ProgramCard.css';


export default function ProgramCard(props) {
    return (
        <div className="programCard" >
            {props.image}
            <h3>{props.program}</h3>
             
            
        </div>
    );
}

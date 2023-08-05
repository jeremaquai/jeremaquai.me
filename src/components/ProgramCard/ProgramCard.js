import React from "react";
import './ProgramCard.css';


export default function ProgramCard(props) {
    return (
        <div className="programCard" >
            <img className={ props.imageClassName } alt={ props.program + " Logo"} src={"../../images/"+props.image } />
            <h3>{props.program}</h3>
             
            
        </div>
    );
}

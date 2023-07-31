import React from "react";
import './Education.css';
import { EDUCATIONDATA } from "../../data/EducationData";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Education() {
    return (
        <div className="EducationPage" >
            <h2>Education</h2>
            {EDUCATIONDATA.map((program, index) => {
                return (
                    <NavLink key={index} to={program.path} >
                        <ProgramCard 
                        program={program.program}
                        startDate={program.startDate}
                        completionDate={program.completionDate}
                        logo={program.logo} />
                    </NavLink>
                    
                );
            })}
        </div>
    );
}

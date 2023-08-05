import React from "react";
import './Education.css';

import { selectPrograms } from "./educationSlice";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { 
    useDispatch, 
    useSelector 
} from "react-redux";



export default function Education() {

    const dispatch = useDispatch();

    const programs = useSelector(selectPrograms);
    console.log(programs);

    return (
        <div className="EducationPage" >
            <h2>Education</h2>
            <div className="cardsDiv" >
                {programs.map((program, index) => {
                    return (
                        <NavLink key={index} to={program.path} >
                            <ProgramCard 
                            program={program.program}
                            startDate={program.startDate}
                            completionDate={program.completionDate}
                            image={program.image}
                            imageClassName={program.imageClassName}   />
                        </NavLink>
                        
                    );
                })}
            </div>
            
        </div>
    );
}

import React from "react";
import './Skills.css';

import { selectSkills } from "./skillsSlice";

import { useSelector } from "react-redux";

import SkillCard from "../../components/SkillCard/SkillCard";

export default function Skills() {

    const skills = useSelector(selectSkills);
    return (
        <div className="skillsPage" >
            <h2>Skills</h2>
            <div className="skillsDiv">
                {skills.map((skill, index) => {
                    return (
                        <div className="cardDiv" >
                            <SkillCard 
                            image={skill.image}
                            name={skill.name}
                            startDate={skill.startDate} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
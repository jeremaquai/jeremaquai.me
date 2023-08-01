import React from "react";
import './Skills.css';
import {SKILLSDATA} from "../../data/SkillsData";
import SkillCard from "../../components/SkillCard/SkillCard";

export default function Skills() {
    return (
        <div className="skillsPage" >
            <h2>Skills</h2>
            <div className="skillsDiv">
                {SKILLSDATA.map((skill, index) => {
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
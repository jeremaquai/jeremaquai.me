import React, { useEffect } from "react";
import './ProgramPage.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { setSelectedProgram, selectProgramSpecifics, selectSelectedProgramSpecifics } from "../Education/educationSlice";
import { useDispatch, useSelector } from "react-redux";


export default function ProgramPage() {

    const  activeProgram  = useParams();

    console.log(activeProgram);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectedProgram(activeProgram.program));
        dispatch(selectProgramSpecifics(activeProgram.program));
    }, []);

    const programSpecifics = useSelector(selectSelectedProgramSpecifics);
    console.log(programSpecifics);

    return (
        <div className="programSpecificsPage" >
            <h2>Program Specifics</h2>
            {programSpecifics.image}
            <h3> {programSpecifics.name} </h3>
            <h4>Start Date: {programSpecifics.startDate} </h4>
            <h4>Completion Date: {programSpecifics.completionDate} </h4>
            <div className="certifications" >
                { programSpecifics.certifications.map((certification, index) => {
                    return 
                }) }
            </div>
        </div>
    );

}
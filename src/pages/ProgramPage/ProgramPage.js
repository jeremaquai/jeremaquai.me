import React, { useEffect } from "react";
import './ProgramPage.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { 
    selectProgramSpecifics, 
    selectSelectedProgramSpecifics 
} from "../Education/educationSlice";
import { 
    useDispatch, 
    useSelector } from "react-redux";
// import CommandLineCertificate from "../../components/ImageComponents/ CommandLineCertificate";


export default function ProgramPage() {

    const  activeProgram  = useParams();

    // console.log(activeProgram);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectProgramSpecifics(activeProgram.program));
    }, [activeProgram.program, dispatch]);

    const programSpecifics = useSelector(selectSelectedProgramSpecifics);
    console.log(programSpecifics);

    return (
        <div className="programSpecificsPage" >
            <h2>Program Specifics</h2>

            <img className={ programSpecifics.imageClassName } alt={programSpecifics.name + ' Logo'} src={'../../images/' + programSpecifics.image }  />
            <h3> {programSpecifics.name} </h3>
            <h4>Start Date: {programSpecifics.startDate} </h4>
            <h4>Completion Date: {programSpecifics.completionDate} </h4>
            <div className="certifications" >
                { programSpecifics.certifications.map((certification, index) => {
                    return (
                        <div key={index} className="certification" >
                            <img alt="" className="Certificate" src={ '../../images/' + certification.image } />
                            <h5> {certification.name} </h5>
                            <h6> {certification.completionDate} </h6>
                        </div>
                    );
                }) }
            </div>
            
        </div>
    );

}
import React from "react";
import './ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div className="projectCard" >
            <img alt={props.name } src={'../../images/screenshots/' + props.image} />
            <h3>{ props.name } </h3>
            { props.comments.map((comment, index) => {
                return <p key={index}> { comment } </p>
            }) }
            <h4> Published on { props.publishDate } </h4>
            
        </div>
    );
}
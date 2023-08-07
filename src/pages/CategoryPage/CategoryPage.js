import React, { useEffect } from "react";
import './CategoryPage.css';

import { useParams } from "react-router-dom/cjs/react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { setSelectedProjects, selectSelectedProjects } from "../ProjectsPage/projectsSlice";
import ProjectCard from "../../components/ProjectCard/ProjectCard";


export default function CategoryPage() {

    const activeCategory = useParams();
    console.log(activeCategory);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectedProjects(activeCategory.category));
    }, [activeCategory.category, dispatch]);

    const selectedProjects = useSelector(selectSelectedProjects);
    console.log(selectedProjects)

    return (
        <div className="categoryPage" >
            <h2> { selectedProjects.name } </h2>
            <div className="cardDiv" >
                { selectedProjects.projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            image={project.image}
                            publishDate={project.publishDate}
                            comments={project.comments}
                            repository={project.repository}
                            githubPages={project.githubPages} />
                    );
                }) }
            </div>
            
        </div>
    );
}

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectCategories: [
        {
            id: 'Personal',
            name: 'Personal Projects',
            path: '/Projects/Personal',
            projects: [
                {
                    name: 'HTML Cheat Sheet',
                    image: 'cheatsheet_screenshot.png',
                    publishDate: 'April 17, 2022',
                    comments: [
                        'This is the first HTML project that I started and completed on my own computer',
                    ],
                    repository: 'https://github.com/jeremaquai/cheatsheet-project',
                    githubPages: 'https://jeremaquai.github.io/cheatsheet-project/',
                },
            ],
        },
        {
            id: 'Professional',
            name: 'Professional Projects',
            path: '/Projects/Professional',
            projects: [],
        },
        {
            id: 'Codecademy',
            name: 'Codecademy Projects',
            path: 'Projects/Codecademy',
            projects: [
                {
                    name: 'Tea Cozy Landing Page Project',
                    image: 'teacozy_screenshot.png',
                    publishDate: 'April 17, 2022',
                    comments: [
                        'The first Codecademy project that I built off of the Codecademy platform on my own computer in my own created environment',
                    ],
                    repository: 'https://github.com/jeremaquai/Tea.Cozy',
                    githubPages: 'https://jeremaquai.github.io/Tea.Cozy/',
                },
                {
                    name: 'Excursion Landing Page Project',
                    image: 'excursion_screenshot.png',
                    publishDate: 'April 18, 2022',
                    comments: [
                        'This is the second project for Codecademy completed off of the Codecademy platform',
                    ],
                    repository: 'https://github.com/jeremaquai/excursion',
                    githubPages: 'https://jeremaquai.github.io/excursion/'
                },
                {
                    name: 'Colmar Academy Page Project',
                    image: 'colmar_screenshot.png',
                    publishDate: 'April 22, 2022',
                    comments: [
                        'This is the Capstone project for the Codecademy Build a Website with HTML, CSS, and GitHub Pages skill path',
                    ],
                    repository: 'https://jeremaquai.github.io/colmar/',
                    githubPages: 'https://github.com/jeremaquai/colmar',
                },
                {
                    name: 'EightBall',
                    image: 'eightball_screenshot.png',
                    publishDate: 'April 25, 2022',
                    comments: [
                        'This is the very first python script that i wrote for the Codecademy Learn Python 3 course'
                    ],
                    repository: 'https://github.com/jeremaquai/magic-eight-ball',
                    githubPages: '',

                },
            ],
        },
        {
            id:'CWMinecraft',
            name: 'Coding With Minecraft Projects',
            path: '/Projects/CWMinecraft',
            projects: []
        },
    ],
    selectedProjectCategory: null,
    selectedProjects: {
        id: 'Loading',
        path: 'Loading',
        name: 'Loading',
        projects: [],
    },
};

export const projectsSlice = createSlice({
    name: 'projectsState',
    initialState,
    reducers: {
        setSelectedProjectCategory: (state, action) => {
            state.selectedProjectCategory = action.payload
        },
        setSelectedProjects: (state, action) => {
            for (let i = 0; i < state.projectCategories.length; i++) {
                if (state.projectCategories[i].id === action.payload) {
                    state.selectedProjects = state.projectCategories[i]
                }
            }
        }
    },
});

export const {setSelectedProjects} = projectsSlice.actions;

export const selectProjectCategories = (state) => state.projectsState.projectCategories;
export const selectSelectedProjectCategory = (state) => state.projectsState.selectedProjectCategory;
export const selectSelectedProjects = (state) => state.projectsState.selectedProjects;

export default projectsSlice.reducer;
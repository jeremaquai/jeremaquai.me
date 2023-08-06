import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skills: [
        {
            name: 'HTML 5',
            startDate: 'Since April 2022',
            image: 'HTML-5-01.svg',
        },
        {
            name: 'CSS 3',
            startDate: 'Since April 2022',
            image: 'CSS-3-01.svg',
        },
        {
            name: 'Python 3',
            startDate: 'Since May 2022',
            image: 'Python-04.svg',
        },
        {
            name: 'GitHub',
            startDate: 'Since May 2022',
            image: 'GitHub-Logo.png',
        },
        {
            name: 'Git',
            startDate: 'Since May 2022',
            image: 'Git-Logo-2Color.png',
        },
        {
            name: 'JavaScript',
            startDate: 'Since June 2022',
            image: 'javascriptLogo.png',
        },
        {
            name: 'React',
            startDate: 'Since July 2022',
            image: 'ReactLogo.png',
        },
        {
            name: 'Lua',
            startDate: 'Since March 2023',
            image: 'Lua-Logo.svg.png',
        },
    ],
};

export const skillsSlice = createSlice({
    name: 'skillsState',
    initialState,
    reducers: {},
});

export const selectSkills = (state) => state.skillsState.skills;

export default skillsSlice.reducer;
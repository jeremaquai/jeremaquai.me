import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuItems: [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Me',
            path: '/About',
        },
        {
            name: 'Education',
            path: '/Education',
        },
        {
            name: 'Skills',
            path: '/Skills',
        },
        {
            name: 'Projects',
            path: '/Projects',
        },
        {
            name: 'Contact Me',
            path: '/Contact',
        },
    ]
};

export const menuSlice = createSlice({
    name: 'menuState',
    initialState,
    reducers: {},
});

export const selectMenu = (state) => state.menuState.menuItems;

export default menuSlice.reducer;
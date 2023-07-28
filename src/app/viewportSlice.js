// Import createSlice from reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

// Set the initial state as a variable called initialState
const initialState = {
    windowWidth: 900,
    windowHeight: 500,
    mobileLayout: false,
};

// Create and export the viewportSlice in one statement
export const viewportSlice = createSlice({
    name: 'viewportState',
    initialState,
    reducers: {
        // function for setting the windowWidth state and automatically comparing it to the windowHieght state to change the mobileLayout state to true if the window is in a portrait state
        setWindowWidth: (state, action) => {
            state.windowWidth = action.payload;
            if (state.windowHeight > state.windowWidth) {
                state.mobileLayout = true;
            } else {
                state.mobileLayout = false;
            }
        },
        setWindowHeight: (state, action) => {
            state.windowHeight = action.payload;
            if (state.windowHeight > state.windowWidth) {
                state.mobileLayout = true;
            } else {
                state.mobileLayout = false;
            }
        },
        setMobileTrue: (state) => {
            state.mobileLayout = true;
        },
        setMobileFalse: (state) => {
            state.mobileLayout = false;
        }
    }
});

export const { setMobileFalse, setMobileTrue, setWindowHeight, setWindowWidth } = viewportSlice.actions;

export const selectWindowWidth = (state) => state.viewportState.windowWidth;
export const selectWindowHeight = (state) => state.viewportState.windowHeight;
export const selectMobileLayout = (state) => state.viewportState.mobileLayout;

export default viewportSlice.reducer;
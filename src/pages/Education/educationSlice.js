import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    programs: [
        {
            program: 'Loganville High School',
            startDate: '1995',
            completionDate: '1999',
            path: '/Education/LHS',
            image:  '<LoganvilleLogo />',
        },
        {
            program: 'Codecademy',
            startDate: 'April 2022',
            completionDate: 'Currently Attending',
            path: '/Education/Codecademy',
            image: '<CodecademyLogo />',
        },
        {
            program:'Coding With Minecraft by Al Sweigart',
            startDate: 'Mar 2023',
            completionDate: 'Currently exploring slowly in my free time',
            path: '/Education/CWMinecraft',
            image: '<CodingCover />',
        }
    ],
    selectedProgram: null,
    programSpecifics: [
        {
            id: 'LHS',
            name: 'Loganville High School',
            startDate: '1995',
            completionDate: '1999',
        },
        {
            id: 'Codecademy',
            name: 'Codecademy Online Learning System',
        },
        {
            id: 'CWMinecraft',
        }
    ]
};

export const educationSlice = createSlice({
    name: 'educationState',
    initialState,
    reducers: {
        setSelectedProgram: (state, action) => {
            state.selectedProgram = action.payload;
        },
    }
});

export const { setSelectedProgram } = educationSlice.actions;

export const selectPrograms = (state) => state.educationState.programs;
export const selectProgramSpecifics = (state, action) => {
    let array = state.educationState.programSpecifics;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id = action.payload) {
            return array[i];
        }
    }
};

export default educationSlice.reducer;

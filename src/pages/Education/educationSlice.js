import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    programs: [
        {
            program: 'Loganville High School',
            startDate: '1995',
            completionDate: '1999',
            path: '/Education/LHS',
            image: 'loganville-high-image.png',
            imageClassName: 'loganvilleLogo'
        },
        {
            program: 'Codecademy Online Coding Bootcamp',
            startDate: 'April 2022',
            completionDate: 'Currently Attending',
            path: '/Education/Codecademy',
            image: 'codecademy.svg',
            imageClassName: 'codecademyLogo'
        },
        {
            program:'Coding With Minecraft by Al Sweigart',
            startDate: 'Mar 2023',
            completionDate: 'Currently exploring slowly in my free time',
            path: '/Education/CWMinecraft',
            image: 'codingWithMinecraft.jpeg',
            imageClassName: 'CodingCover',
        }
    ],
    selectedProgram: null,
    selectedProgramSpecifics: {
        id: 'Loading',
        name: 'Loading',
        startDate: 'Loading',
        completionDate: 'Loading',
        certifications: [],
    },
    programSpecifics: [
        {
            id: 'LHS',
            name: 'Loganville High School',
            startDate: '1995',
            completionDate: '1999',
            image: 'loganville-high-image.png',
            imageClassName: 'loganvilleLogo',
            certifications: [
                {
                    name: 'High School Diploma, College Prep',
                    completionDate: '1999',
                    image: '',
                }
            ],
        },
        {
            id: 'Codecademy',
            name: 'Codecademy Online Learning System',
            startDate: 'April 2022',
            completionDate: 'Currently Enrolled',
            image: 'codecademy.svg',
            imageClassName: 'codecademyLogo',
            certifications: [
                {
                    name: 'Learn the Command Line Course',
                    completionDate: 'April 2022',
                    image: 'commandlinecertificate.jpg',
                },
                {
                    name: 'Learn CSS Course',
                    completionDate: 'April 2022',
                    image: 'LearnCsscertificate.jpg',
                },
                {
                    name: 'Learn HTML Course',
                    completionDate: 'April 2022',
                    image: 'HTMLcertificate1024_1.jpg',
                },
                {
                    name: 'Build a  Website with HTML, CSS, and GitHub Pages Skill Path',
                    completionDate: 'April 2022',
                    image: 'buildWebPagesCertificate1024_1.jpg',
                },
                {
                    name: 'Learn Git & GitHub Course',
                    completionDate: 'April 2022',
                    image: 'learnGitCertificate-page-001.jpg',
                },
                {
                    name: 'Learn Python 3 Course',
                    completionDate: 'May 2022',
                    image: 'pythonThree.jpg',
                },
                {
                    name: 'Learn How to Code Course',
                    completionDate: 'June 2022',
                    image: 'learnToCode-page-001.jpg',
                },
                {
                    name: 'Code Foundations Skill Path',
                    completionDate: 'June 2022',
                    image: 'codeFoundations.jpg',
                },
                {
                    name: 'How to Make a Website with NameCheap Course',
                    completionDate: 'June 2022',
                    image: 'makeWebsiteWithNamecheap.jpg',
                },
                {
                    name: 'Build Chatbots with Python Skill Path',
                    completionDate: 'July 2022',
                    image: 'buildChatbots.jpg',
                },
            ],
        },
        {
            id: 'CWMinecraft',
            image: 'codingWithMinecraft.jpeg',
            imageClassName: 'CodingCover',
            name: 'Coding With Minecraft by Al Sweigart',
            certifications: [],
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
        selectProgramSpecifics: (state, action) => {

            for (let i = 0; i < state.programSpecifics.length; i++) {
                if (state.programSpecifics[i].id === action.payload) {
                    state.selectedProgramSpecifics = state.programSpecifics[i]
                }
                
            }

        },
    },
});

export const { setSelectedProgram, selectProgramSpecifics } = educationSlice.actions;

export const selectPrograms = (state) => state.educationState.programs;
export const selectSelectedProgramSpecifics = (state) => state.educationState.selectedProgramSpecifics;

export default educationSlice.reducer;

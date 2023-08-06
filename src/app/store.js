import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import viewportReducer from '../app/viewportSlice';
import educationReducer from '../pages/Education/educationSlice'
import skillsReducer from '../pages/Skills/skillsSlice';

export const store = configureStore({
  reducer: {
    viewportState: viewportReducer,
    educationState: educationReducer,
    skillsState: skillsReducer,
    counter: counterReducer,
  },
});

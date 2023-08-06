import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import viewportReducer from '../app/viewportSlice';
import educationReducer from '../pages/Education/educationSlice'
import skillsReducer from '../pages/Skills/skillsSlice';
import menuReducer from '../components/SideBar/Menu/menuSlice';

export const store = configureStore({
  reducer: {

    viewportState: viewportReducer,
    menuState: menuReducer,
    educationState: educationReducer,
    skillsState: skillsReducer,
    counter: counterReducer,
  },
});

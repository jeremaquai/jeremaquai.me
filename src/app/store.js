import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import viewportReducer from '../app/viewportSlice';
import educationReducer from '../pages/Education/educationSlice'

export const store = configureStore({
  reducer: {
    viewportState: viewportReducer,
    educationState: educationReducer,
    counter: counterReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import viewportReducer from '../app/viewportSlice';

export const store = configureStore({
  reducer: {
    viewportState: viewportReducer,
    counter: counterReducer,
  },
});

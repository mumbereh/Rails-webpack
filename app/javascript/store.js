import { configureStore, createSlice } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetingsSlice'

export const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

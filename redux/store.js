import { configureStore } from '@reduxjs/toolkit';
import slotReducer from './slotSlice';

export const store = configureStore({
  reducer: {
    slot: slotReducer,
  },
});
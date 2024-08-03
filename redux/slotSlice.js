import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slots: [],
};

export const slotSlice = createSlice({
  name: 'slot',
  initialState,
  reducers: {
    addSlot: (state, action) => {
      state.slots.push(action.payload);
    },
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { addSlot, setSlots } = slotSlice.actions;

export default slotSlice.reducer;
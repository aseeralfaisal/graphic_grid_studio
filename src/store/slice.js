import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'slice',
  initialState: {
    showChildren: false,
    layout: [
      { i: '1', x: 0, y: 0, w: 3, h: 5, minW: 2, minH: 5 },
      { i: '2', x: 3, y: 0, w: 5.5, h: 2.5, minW: 4, minH: 2 },
      { i: '3', x: 3, y: 0, w: 3, h: 2, minW: 2, minH: 1.5 },
    ]
  },
  reducers: {
    setShowChildren: (state, action) => {
      state.showChildren = action.payload;
    },
    setLayout: (state, action) => {
      state.layout = action.payload
    }
  },
});

export const { setShowChildren, setLayout } = slice.actions;

export default slice.reducer;

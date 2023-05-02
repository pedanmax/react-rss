import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    write: (state, action) => {
      const value = action.payload;
      return { ...state, value };
    },
  },
});

export const { actions, reducer } = searchSlice;

// export default searchValueSlice.reducer;

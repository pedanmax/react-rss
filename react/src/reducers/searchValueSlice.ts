import { createSlice } from '@reduxjs/toolkit';

export const searchValueSlice = createSlice({
  name: 'searchValue',
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

export const { actions, reducer } = searchValueSlice;

// export default searchValueSlice.reducer;

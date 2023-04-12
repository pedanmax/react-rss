import { createSlice } from '@reduxjs/toolkit';

export const getCardsSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCards: (state, action) => action.payload,
  },
});

export const { actions, reducer } = getCardsSlice;

// export default searchValueSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { FeedBackCard } from 'types/Types';

export const formSlice = createSlice({
  name: 'submision',
  initialState: [] as FeedBackCard[],
  reducers: {
    addFeedBack: (state, action) => {
      const card = action.payload;
      state.push(card);
    },
  },
});

export const { actions, reducer } = formSlice;

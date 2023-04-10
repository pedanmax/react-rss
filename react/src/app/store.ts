import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as writeSearch } from '../reducers/searchValueSlice';

const reducers = combineReducers({
  searchValue: writeSearch,
});
export const store = configureStore({
  reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

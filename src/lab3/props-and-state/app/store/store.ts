import { configureStore } from '@reduxjs/toolkit';
import toDoListReducer from '../reducer/toDoList.reducer';
import categoryReducer from '../reducer/category.reducer';

export const store = configureStore({
  reducer: {
    categoryList: categoryReducer,
    toDoList: toDoListReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
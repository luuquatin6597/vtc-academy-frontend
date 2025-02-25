import { createReducer } from "@reduxjs/toolkit";
import { initalCategory } from "../constants/category";
import { CategoryState } from "../interface/category";

const initialState: CategoryState = {
  list: initalCategory
};

const categoryReducer = createReducer(initialState, builder => {
  builder
});

export default categoryReducer;
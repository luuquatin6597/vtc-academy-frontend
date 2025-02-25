import { createSlice } from "@reduxjs/toolkit";
import { initalCategory } from "../constants/category";
import { CategoryState } from "../interface/category";

const initialState: CategoryState = {
  list: initalCategory
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // Bạn có thể thêm các reducer khác ở đây nếu cần
  }
});

export default categorySlice.reducer;
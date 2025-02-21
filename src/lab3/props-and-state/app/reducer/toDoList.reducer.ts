import { createAction, createReducer } from "@reduxjs/toolkit";
import { ToDoList, ToDoListState } from "../interface/toDoList";
import {initalToDoList } from "../constants/toDoList";

const initialState: ToDoListState = {
  list: initalToDoList
};

export const addToDoList = createAction<ToDoListState>("toDoList/addToDoList");
export const deleteToDoList = createAction<{ id: string }>("toDoList/deleteToDoList");
export const updateToDoList = createAction<ToDoList>("toDoList/updateToDoList");
export const switchToDoList = createAction<{ id: string }>("toDoList/switchItem");

const toDoListReducer = createReducer(initialState, builder => {
  builder
    .addCase(addToDoList, (state, action) => {
      state.list = [...state.list, ...action.payload.list];
    })
    .addCase(deleteToDoList, (state, action) => {
      const index = state.list.findIndex(item => item.id === action.payload.id);
      
      if(index === -1) {
        return state;
      } else {
        state.list.splice(index, 1);
      }
    })
    .addCase(updateToDoList, (state, action) => {
      const index = state.list.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    })
    .addCase(switchToDoList, (state, action) => {
      const index = state.list.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.list[index].status = !state.list[index].status;
      }
    })
});

export default toDoListReducer;
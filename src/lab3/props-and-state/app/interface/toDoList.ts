import { Category } from "./category";

export interface ToDoList {
    category: string;
    title: string;
    content: string;
    status: boolean;
    image: string;
    id: string;
}
export interface ToDoListState {
    list: ToDoList[];
}
export interface ToDoListAction {
    type: string;
    payload: ToDoList;
}
export interface ToDoListReducer {
    (state: ToDoListState, action: ToDoListAction): ToDoListState;
}
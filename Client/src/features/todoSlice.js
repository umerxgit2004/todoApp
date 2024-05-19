import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : ( state, action) => {
            const todo = {
                id : nanoid(),
                text: action.payload.text 
            }
            state.push(todo)
        }
    }
})
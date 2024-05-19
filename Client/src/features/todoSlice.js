import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{id:1,text:"Default Todo"}]
function deleteTodo (state,action){
    state = state.filter ( (todo) => todo. id!== action.payload)
    return state
}
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
        },
        removeTodo : deleteTodo
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer 
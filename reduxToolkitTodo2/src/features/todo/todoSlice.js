import { createSlice, nanoid } from "@reduxjs/toolkit"; //createSlice is enough method but we take one more method =>nanoid generates unique 

const initialState = {// for store we should have initial state 
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    //now we made reducers
    reducers : {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})//name is property it is name is this only

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todo: [{id: 1 ,text: "Welcome back"}],
    filter: {
        status: 'all',
        search: ''
    }
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
        }

    }
})

export const {} = todoSlice.actions

export default todoSlice.reducer
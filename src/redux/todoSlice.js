import { createSlice } from "@reduxjs/toolkit"

const LoadTaskFromLocalStorage = () => {
    try {
        const data = localStorage.getItem('demoTasks')
        return data ? JSON.parse(data) : []
    } catch (error) {
        return [error]
    }
    
}

const SaveTaskToLocalStorage = (todo) => {
    localStorage.setItem('demotask', JSON.stringify(todo))
    
}

const initialState = {
    todo: LoadTaskFromLocalStorage,
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
            state.todo.push(action.payload)
            SaveTaskToLocalStorage(state.todo)
        },

        deleteTodo : (state,action) => {
            state.todo.filter(todo => !todo.id !== action.payload);
            SaveTaskToLocalStorage(state.todo)
        },

        toggleTodo : (state,action) => {
            const todo = state.todo.find(t => t.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
            SaveTaskToLocalStorage(state.todo)
        },

        updateTodo : (state,action) => {
            const {id,newTask} = action.payload
            const task = state.todo.find(t => t.id === id)
            if(task){
                task.text = newTask;
            }
            SaveTaskToLocalStorage(state.todo)
        },

        // filterTodo : (state,action) => {
        //     state.todo.filter(t => t.id === action.payload)
        //     LoadTaskFromLocalStorage(state.todo)
        // }

        filterTodo : (state,action) => {
            state.filter.status = action.payload
        },

        searchTodo : (action,state) => {
            state.filter.search = action.payload
        }
    }
})

export const {addTodo,deleteTodo,updateTodo,toggleTodo,filterTodo,searchTodo} = todoSlice.actions

export default todoSlice.reducer
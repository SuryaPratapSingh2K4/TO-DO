import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

function TodoForm() {
const [task,setTask] = useState('')
const dispatch = useDispatch()
const handleSubmit = (e) => {
    e.preventDefault();
    if(task.trim() === '') return;
    dispatch(addTodo(
        {
        id: nanoid(),
        text: task.trim(),
        completed: false
    },
    setTask('')
    ))
}
return (
    <div className="flex flex-row gap-8 w-1/2 mx-auto my-3  rounded-lg py-2 items-center justify-center">
        <div className="text-center">
                <input className="border border-gray-300 px-4 py-3 rounded" type="text" placeholder="Enter Todo here" 
                value={task}
                onChange={(e) => {
                    setTask(e.target.value)
                }}
                />
        </div>
        <Button onClick={handleSubmit} type='submit' classname='hover:bg-green-800'>Add</Button>
    </div>
)
}

export default TodoForm

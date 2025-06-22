import React from 'react'
import Button from './Button'

function TodoItem({TodoName, TodoDate}) {
    return (
        <>
            <div className="flex flex-row w-1/2 mx-auto my-3 rounded-lg py-2 items-center justify-between bg-gray-800 px-6">
                <div className="text-center w-1/4">
                    {TodoName}
                </div>
                <div className="text-center w-1/4">
                    {TodoDate}
                </div>
                <Button classname='bg-blue-600 hover:bg-blue-800 mr-8'>Update</Button>
                <Button classname="bg-red-600 hover:bg-red-800 mr-8">Delete</Button>
            </div>
        </>
    )
}

export default TodoItem

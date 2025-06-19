import React from 'react'

function TodoForm() {
return (
    <div className="flex justify-between grid grid-cols-3 w-1/2 mx-auto rounded-lg gap-4">
        <div className="text-center justify-center items-center">
            <input className="border border-gray-300 px-4 py-3 rounded" type="text" placeholder="Enter Todo here" />
        </div>
        <div className="text-center justify-center items-center">
            <input className="border border-gray-300 px-4 py-3 rounded" type="date"
        />
        </div>
        <div className="text-center flex justify-center items-center">
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold px-8 py-3" type="button" name="" id="">
            Add
            </button>
        </div>
    </div>
)
}

export default TodoForm

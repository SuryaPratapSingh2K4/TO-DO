import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function TodoItemss() {
    const todo = useSelector(state => Array.isArray(state.todo) ? state.todo : [])
    const [togglecomplete,setToggleComplete] = useState(false)
    const [edit,setEdit] = useState('')
    const dispatch = useDispatch()
    return (
        <div>
            <ul className="list-none">
                {todo.map(t => (
                        <li key={t.id} className="flex flex-row w-1/2 mx-auto my-3 rounded-lg py-2 items-center justify-between bg-gray-800 px-6">
                            <div>
                                <input type="checkbox"
                                checked={t.completed}
                                onChange={() =>
                                    dispatch(togglecomplete(t.id))
                                }
                                {...t.text}
                            />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>


    );
}

export default TodoItemss;

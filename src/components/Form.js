import { useState } from "react";

function Form({handleSubmit}) {
    const [newTask,setNewTask] = useState("")

    function onSubmit(e){
        e.preventDefault()
        if(newTask.trim() !==""){
            handleSubmit(newTask)
        }
        setNewTask("")
    }

    return(
        <form className="todo-form" onSubmit={onSubmit}>
            <label className="todo-form-label" htmlFor="task">
                <input value={newTask} className="todo-form-input" id="task" type="text" placeholder="create task here" onChange={e=>setNewTask(e.target.value)} />
            </label>
            <button type="submit" className="todo-btn">Create</button>
        </form>
    )
}

export default Form;
function ListItems(props){
    return(
        <ul className="todo-items">
            {props.tasks.map((task,index)=> (
                <Item 
                    key={index} 
                    task={task} 
                    onDelete={() => props.handleDelete(index)} 
                    onUpdate={() => { 
                        const updatedTask = prompt("Update task:", task.text)
                        if(updatedTask && updatedTask.trim() !== ""){
                            props.handleUpdate(index,updatedTask.trim())
                        }
                    }} 
                    onToggle={() => props.toggleComplete(index)}
                />
            ))}
            
        </ul>
    )
}

function Item(props) {
    return(
        <li className="todo-item" >
            <p className="todo-text" style={{ textDecoration: props.task.completed ? "line-through" : "none" }}>{props.task.text}</p>
            <button onClick={props.onDelete} className="todo-btn">Delete</button>
            <button onClick={props.onUpdate} className="todo-btn">Update</button>
            <button onClick={props.onToggle} className="todo-btn">{props.task.completed ? "Undo" : "Completed"}</button>
        </li>
    )
}

export default ListItems;
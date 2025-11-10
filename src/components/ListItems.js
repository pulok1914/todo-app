function ListItems(props){
    return(
        <ul className="todo-items">
            {props.tasks.map((task,index)=> (
                <Item 
                    key={task} 
                    task={task} 
                    onDelete={() => props.handleDelete(index)} 
                    onUpdate={() => { 
                        const updatedTask = prompt("Update task:", task)
                        if(updatedTask && updatedTask.trim() !== ""){
                            props.handleUpdate(index,updatedTask.trim())
                        }
                    }} 
                />
            ))}
            
        </ul>
    )
}

function Item(props) {
    return(
        <li className="todo-item">
            <p className="todo-text">{props.task}</p>
            <button onClick={props.onDelete} className="todo-btn">Delete</button>
            <button onClick={props.onUpdate} className="todo-btn">Update</button>
        </li>
    )
}

export default ListItems;
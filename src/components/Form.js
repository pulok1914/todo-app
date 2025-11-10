function Form() {
    return(
        <form className="todo-form">
            <label className="todo-form-label" for="task" name="task">
                <input className="todo-form-input" id="task" type="text" placeholder="create task here" />
            </label>
            <button className="todo-btn">Create</button>
        </form>
    )
}

export default Form;
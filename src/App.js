import Header from "./components/Header"
import Form from "./components/Form"
import ListItems from "./components/ListItems"
import Wrapper from "./components/wrapper";
import './App.css';
import { useState } from "react";



function App() {
  const [tasks,setTasks] = useState([
      {text: "List Item one", completed: false}, 
      {text: "List Item two", completed: false},
      {text: "List Item three", completed: false}
    ])

  function handleSubmit(newTask){
    setTasks([...tasks, {text: newTask, completed: false}])
  }

  function handleDelete(indexToDelete) {
    setTasks(tasks.filter((_,index)=> index !== indexToDelete))
  }

  function handleUpdate(indexToUpdate,updatedTask){
    setTasks(tasks.map((task,index)=> index === indexToUpdate ? {...task, text: updatedTask} : task ))
  }

  function toggleComplete(itemIndex){
    setTasks(tasks.map((task,index)=> index === itemIndex? {...task, completed: !task.completed}: task))
  }

  return (
    <div className='container'>
      <Wrapper>
        <Header />
        <Form handleSubmit={handleSubmit} />
        <ListItems handleDelete={handleDelete} handleUpdate={handleUpdate} toggleComplete={toggleComplete} tasks={tasks} />
      </Wrapper>
    </div>
  );
}

export default App;

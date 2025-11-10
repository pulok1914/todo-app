import Header from "./components/Header"
import Form from "./components/Form"
import ListItems from "./components/ListItems"
import Wrapper from "./components/wrapper";
import './App.css';
import { useState } from "react";



function App() {
  const [tasks,setTasks] = useState(["List Item one", "List Item two", "List Item three"])

  function handleSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  function handleDelete(indexToDelete) {
    setTasks(tasks.filter((_,index)=> index !== indexToDelete))
  }

  return (
    <div className='container'>
      <Wrapper>
        <Header />
        <Form handleSubmit={handleSubmit} />
        <ListItems handleDelete={handleDelete} tasks={tasks} />
      </Wrapper>
    </div>
  );
}

export default App;

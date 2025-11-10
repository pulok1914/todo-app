import Header from "./components/Header"
import Form from "./components/Form"
import ListItems from "./components/ListItems"
import Wrapper from "./components/wrapper";
import './App.css';



function App() {
  return (
    <div className='container'>
      <Wrapper>
        <Header />
        <Form />
        <ListItems />
      </Wrapper>
    </div>
  );
}

export default App;

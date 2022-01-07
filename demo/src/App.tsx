import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./components/todo"

function App() {
  const todo = [
    {id : 1, title : "wash dishes", completed: false},
    {id : 2, title : "make dinner", completed: true},
]

  const [allTodos, setTodos] = useState(todo)

  return (
    <div className="App">
      {
        allTodos.map((todo) => {
          return (<Todo allTodos= {todo} />)
        })
      }

    </div>
  );
}

export default App;

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import "./App.css";


function App() {

const todoItems=[
  {
    name:'Buy Milk',
    date:'4/10/2024'
  },
   {
    name:'Go to College',
    date:'4/10/2024'
  },
  {
    name:'Like',
    date:'4/10/2024'
  }
]

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
     
     
    </center>
  );
}

export default App;

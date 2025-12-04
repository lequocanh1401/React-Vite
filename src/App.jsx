import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import ReactLogo from './assets/react.svg';
import React, { useState } from 'react';


const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" }
  ])

  const deleteData = (id) => {
    const newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  //{key:value}
  // addNewTodo()

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />

      {
        todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            deleteData={deleteData}
          />
          :
          <div className="todo-image">
            <img src={ReactLogo} className='logo' />
          </div>
      }

      {/* {todoList.length > 0 && <TodoData
        todoList={todoList}
      />}
      {todoList.length === 0 && <div className="todo-image">
        <img src={ReactLogo} className='logo' />
      </div>} */}
    </div>
  )
};

export default App;

import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import ReactLogo from './assets/react.svg';

const App = () => {

  const hoidanit = "Eric Arsenal";
  const age = 25;
  const data = {
    adddress: "hanoi",
    contry: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }
  //{key:value}
  addNewTodo()

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
      />
      <div className="todo-image">
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
};

export default App;

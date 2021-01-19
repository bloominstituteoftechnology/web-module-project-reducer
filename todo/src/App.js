import logo from './logo.svg';
import './App.css';

function App() {
  const todos = [{
    title: "todo 1",
    id: 0,
    completed: false
  },{
    title: "todo 2",
    id: 1,
    completed: false
  },{
    title: "todo 3",
    id: 2,
    completed: false
  }];

  return (
    <div className="App">
      <h1>ToDo App</h1>

      <div className="todoList">
        <h3>List of Items</h3>
        <ul>
          {
            todos.map(todo =>{
              return(<li>{todo.title}</li>);
            })
          }
        </ul>
        <button>Clear Completed</button>
      </div>

      <div className="todoForm">
        <form>
          <label>
            Title:
            <input />
          </label>
          <button>Submit Todo</button>
        </form>
      </div>
    </div>
  );
}

export default App;

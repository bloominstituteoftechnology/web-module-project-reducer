import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="todoList">
        <h3>List of Items</h3>
        <ul>
          <li>todo 1</li>
          <li>todo 2</li>
          <li>todo 3</li>
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

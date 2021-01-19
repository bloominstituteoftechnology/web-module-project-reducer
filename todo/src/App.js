import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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

      <TodoList todos={todos}/>
      <TodoForm />
    </div>
  );
}

export default App;

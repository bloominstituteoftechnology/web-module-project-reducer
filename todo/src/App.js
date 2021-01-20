import { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import reducer, { initialState } from './reducers';
import { addTodo, clearCompleted, toggleCompleted } from "./actions";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = (title)=> {
    dispatch(addTodo(title));
  }

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  }

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      {/* <button onClick={handleClearCompleted}>test button</button> */}
      <TodoList todos={state.todos} handleToggleCompleted={handleToggleCompleted} handleClearCompleted={handleClearCompleted}/>
      <TodoForm handleAddTodo={handleAddTodo}/>
    </div>
  );
}

export default App;

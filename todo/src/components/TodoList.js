import React from 'react';
import Todo from './Todo';

const TodoList = (props)=> {

    return(<div className="todoList">
        <h3>List of Items</h3>
        <ul>
        {
            props.todos.map(todo =>{
                return(<Todo todo={todo}/>);
            })
        }
        </ul>
        <button>Clear Completed</button>
    </div>);
}

export default TodoList;
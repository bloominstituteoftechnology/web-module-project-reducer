import React from 'react';

class TodoForm extends React.Component {

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.handleAddTodo("new todo");
    }

    render() {
        return (<div className="todoForm">
            <form onSubmit={this.handleSubmit}>
            <label>
                Title:
                <input />
            </label>
            <button>Submit Todo</button>
            </form>
        </div>);
    }
}

export default TodoForm;
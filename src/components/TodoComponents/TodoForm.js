import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input onChange={this.props.inputChangeHandler} />
                <button onClick={this.props.addTodoClickHandler}>Add Todo</button>
                <button onClick={this.props.clearCompletedClickHandler}>Clear Completed</button>
            </div>
        );
    }
}

export default TodoForm;
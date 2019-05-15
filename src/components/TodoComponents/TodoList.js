import React from 'react';
import './Todo.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => {
                        return <li className={todo.completed ? "complete-task" : ""} key={todo.id} data-key={todo.id} onClick={this.props.listItemClickHandler}>{todo.task}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;
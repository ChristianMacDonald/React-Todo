import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './Todo.css';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            "input": "",
            "todos": []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.handleClearCompletedClick = this.handleClearCompletedClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            "input": event.target.value
        });
    }

    handleAddTodoClick(event) {
        let new_todos = this.state.todos.concat([{
            "task": this.state.input,
            "id": Date.now(),
            "completed": false
        }]);
        this.setState({
            "todos": new_todos
        });
    }

    handleListItemClick(event) {
        let id = parseInt(event.target.dataset.key);
        let todos = this.state.todos.concat();
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos[i].completed = true;
                break;
            }
        }
        this.setState({ "todos": todos });
    }

    handleClearCompletedClick(event) {
        let todos = this.state.todos.filter(todo => {
            return !todo.completed;
        });
        this.setState({ "todos": todos });
    }

    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} listItemClickHandler={this.handleListItemClick} />
                <TodoForm inputChangeHandler={this.handleInputChange} addTodoClickHandler={this.handleAddTodoClick} clearCompletedClickHandler={this.handleClearCompletedClick} />
            </div>
        );
    }
}

export default Todo;
import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-form">
                <input />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        );
    }
}

export default TodoForm;
import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        return (
            <div className="app">
                <h1>Todo List: MVP</h1>
            </div>
        );
    }
}

export default App;

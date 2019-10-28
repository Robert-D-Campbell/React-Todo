import React from 'react';

import data from './components/TodoComponents/data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: data
    };
  }

  addTodo = task => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id ) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1> React Todo List! </h1>
        <TodoList 
          todos={this.state.todos} 
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

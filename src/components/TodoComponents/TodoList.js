import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    console.log(props)
    return (
        <div className='list-container'>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id}
                    todo={todo} 
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
        </div>
    );
};

export default TodoList;
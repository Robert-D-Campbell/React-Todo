import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: '',
        };
    }

    handleInputChange = e => {
        this.setState({
            newTodo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("it's working!");
        this.props.addTodo(this.state.newTodo);
        //reset form after submit
        this.setState({newTodo: ''})
    }

    render() {
        return (
            <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='todo'
                        id='todo'
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                        placeholder='...todo'
                    />
                    <button className='add-btn'>Add Todo:</button>
                    <button 
                        className='clear-btn' 
                        onClick={this.props.handleClearTodos}>Clear Completed:</button>
                </form>
                
            </div>
        )
    }
}

import React, { Component } from 'react';
import './TodoItem.css'
const TodoItem = (props) => {
    return(
        <div className="todo-item">
            <input type={"checkbox"} className="todo-check"></input>
            <p className="todo-description">this is a todo List element</p>
            <hr></hr>
        </div>
    )
};

export default TodoItem;
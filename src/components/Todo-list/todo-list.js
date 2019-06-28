import React from 'react'
import TodoListItem from '../Todo-list-item'
import './todo-list.css'

const TodoList = ({todos}) =>{
    const element = todos.map((el)=>{
        const {id, ...elProps} = el
        return (
            <li key ={id}
            className='list-group-item'
            >
                <TodoListItem {...elProps}/>
            </li>
        )
    })

    return(
        <ul className='list-group todo-list'>
           {element}
        </ul>
    )
}

export default TodoList;
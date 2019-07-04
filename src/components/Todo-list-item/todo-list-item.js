import React from 'react'
import './todo-list-item.css'


const TodoListItem =(props)=>{


      const {label,onDeleted, onToggleDone,onToggleImportant, done, important} = props

      let className = 'todo-list-item'
      if (done){
         className += ' done'
      };
      if (important){
         className += ' important'
      }
            return (
            <span
            className = {className}>
               <span
              
               className='todo-list-item-label'
               onClick = {onToggleDone}
               >{label}
               </span>
                     <button type = 'button'
                     className='btn btn-outline-success btn-sm float-right ' >
                        <i className="fa fa-exclamation"
                           onClick = {onToggleImportant}
                        ></i>
                     </button>
                     <button type='button'
                              className='btn btn-outline-danger btn-sm float-right'>
                     <i className="fa fa-trash-o"
                        onClick = {onDeleted}
                     ></i>
                     </button>              
            </span>
            )
         }
export default TodoListItem


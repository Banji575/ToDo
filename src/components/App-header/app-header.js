import React from 'react'
import './app-header.css'

const AppHeader = ({todo, done}) =>{
    return (
        <div className="app-header d-flex">
    <h1>My ToDo list</h1>
    <h2>{todo} more to {done} done</h2>
        </div>
    )
};
export default AppHeader;
import React, {Component} from 'react'
import AppHeader from '../App-header'
import SearchPanel from '../Search-panel'
import TodoList from '../Todo-list'
import ItemStatusFilter from '../item-status-filter'
import './app.css'


export default class App extends Component{

    state ={
        todoData: [
            {label:'Drink coffee', important : false, id:1},
            {label:'Make Awesome App', important : true, id:2},
            {label:'Have a lunch', important : false, id:3}
        ]
    }
    
    onDeleted = (id)=>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id)
            const newArray = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1)
            ];
            return { todoData:newArray }
        }) 
    }

    render(){
    return (
        <div className="todo-app">
        <AppHeader />
        <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
        </div>
        <TodoList todos = {this.state.todoData} 
         onDeleted={this.onDeleted}       />
    </div>
    )
}
}


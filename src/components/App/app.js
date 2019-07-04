import React, {Component} from 'react'
import AppHeader from '../App-header'
import SearchPanel from '../Search-panel'
import TodoList from '../Todo-list'
import ItemStatusFilter from '../item-status-filter'
import AddForm from '../Add-form'
import './app.css'


export default class App extends Component{

   idMax = 100;

   createItem=(label) =>{
    const newItem  = {
        label,
        important: false,
        done:false,
        id: this.idMax++
    }
    return newItem
}
    
    state ={
        todoData: [
            this.createItem('Drink coffee'),
            this.createItem('Make Awesome App'),
            this.createItem('Have a lunch')
        ]
    }

    
    delItem = (id)=>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id)
            const newArray = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1)
            ];
            return { todoData:newArray }
        }) 
    }

    addItem = (text)=>{
        
        this.setState(({todoData})=>{
            const newArr = [
                ...todoData,
                this.createItem(text)
            ]
            return {
                todoData:newArr
            }
        })    
    }

    onToggle = (id, data, props)=>{
            const idx = data.findIndex((el)=>el.id===id);
            const oldItem = data[idx];
            const newItem = {...oldItem, [props]: !oldItem[props]};           
            return [    
                    ...data.slice(0,idx),
                    newItem,
                    ...data.slice(idx+1)
            ]
    }

    onToggleDone = (id)=>{
        this.setState(({todoData})=>{
            return {
                todoData:this.onToggle(id, todoData, 'done')
            }
        })
    }
    onToggleImportant = (id)=>{
       this.setState(({todoData})=>{
           return {
            todoData: this.onToggle(id,todoData, 'important' )
            }
       })
    }

   
       
    render(){

     const doneCount = this.state.todoData.filter((el)=>el.done).length;
     const todoCount = this.state.todoData.length - doneCount;

    return (
        <div className="todo-app">
            <AppHeader 
            todo = {todoCount}
            done = {doneCount}
            />
            <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
            </div>
            <TodoList todos = {this.state.todoData} 
            onDeleted={this.delItem}
            onToggleDone = {this.onToggleDone}
            onToggleImportant = {this.onToggleImportant}       />
            <AddForm addItemHundler = {this.addItem} />
        </div>
            )
        }
}


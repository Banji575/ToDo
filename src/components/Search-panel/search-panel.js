import React, {Component} from 'react'
import './search-panel.css'

export default class SearchPanel extends Component{
state = {
    term: ''
}
onSearch = (e)=>{
    const term = e.target.value;
    this.setState({term})
    this.props.onSearchChange(term)
}
    
    render(){
        const searhText = 'Type here to searh...'
            return <input 
            className="form-control search-input"
            placeholder={searhText}
            value = {this.state.term}
            onChange = {this.onSearch}
            />
        };
}

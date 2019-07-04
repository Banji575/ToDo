import React, {Component} from 'react'
import './add-form.css'

export default class AddForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e)=>{
       this.setState({
           label:e.target.value
       });
    }

    onLabelSubmit = (e)=>{
        e.preventDefault();
        this.props.addItemHundler(this.state.label)
        this.setState({
            label:''
        })
    }


    render(){
        return(
            <form 
                onSubmit = {this.onLabelSubmit}
                className='AddForm d-flex'>
                <input
                    type='text'
                    className='form-control' 
                    onChange = {this.onLabelChange}
                    placeholder = 'What needs to be done'
                    value = {this.state.label}/>
                    
                <button className='btn btn-outline-secondary'
                        onClick = {this.onLabelSubmit}
                >Add item</button>
            </form>
               )
            }
}


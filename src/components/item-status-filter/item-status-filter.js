import React, {Component} from 'react'

export default class itemStatusFilter extends Component {

    render (){       
        const buttonLabel = [
            {name:'All', label:'All'},
            {name:'Active', label:'Active'},
            {name:'Done', label:'Done'}
        ];

        const button = buttonLabel.map(({name, label})=>{   
            const isActive = name === this.props.filter
            const clazz = isActive? 'btn-info' : 'btn-outline-secondary'
            return(
              <button className={`btn ${clazz}`}
                    key = {name}
                    onClick = {()=>this.props.onFilterChange(name)}>{label}</button>
            )
        })
    
        return (
        <div className='btn-group'>
            {button}
        </div>
        )
    }
}

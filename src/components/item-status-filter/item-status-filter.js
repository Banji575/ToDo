import React, {Component} from 'react'

export default class itemStatusFilter extends Component {
    render (){
        return (
        <div className='btn-group'>
            <button type='button'
                    className='btn btn-info'>All</button>
            <button type='button'
                    className='btn btn-outline-secondary'>Active</button>
            <button type='button'
                    className='btn btn-outline-secondary'
                    onClick = {this.props.onFilter}>Done</button>
        </div>
        )
    }
}

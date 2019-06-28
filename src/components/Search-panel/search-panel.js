import React from 'react'
import './search-panel.css'

const SearchPanel = () =>{
    const searhText = 'Type here to searh...'
    return <input 
    className="form-control search-input"
    placeholder={searhText}/>
};

export default SearchPanel;
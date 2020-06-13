import React from 'react'
import './search-box.styles.css'

function SearchBox(props){
    return(
        <input 
        type="search"
        placeholder=""
        onChange={props.handleChange}
        />
    )
}

export default SearchBox
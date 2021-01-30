import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategory})=> {
    
    const [inputValue, setInputValue] =  useState("Type Here")
    
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setCategory(categories => [inputValue,...categories])
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type = 'text' input={inputValue} onChange= {handleInputChange}/>  
        </form>
    
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory
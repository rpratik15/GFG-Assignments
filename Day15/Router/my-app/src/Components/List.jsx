import React, { useState } from 'react'
import '../Components/List.css'

function List({ index, todo,onDelete,onEdit }) {

    



    return (
        
        <div className='list'>
            <div id="index">{index}</div>
            <div id="todo">{todo}</div>
            <div id="button">
                <button onClick={()=>onEdit(index)}>Edit</button>
                <button onClick={()=>onDelete(index)}>Delete</button>
            </div>
         
        </div>

    )
}

export default List
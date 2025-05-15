import React, { useEffect, useState } from 'react'
import List from '../Components/List'

function Home() {
    const[todos,setTodo]=useState([])
    const [task,setTask]=useState('')
    const addTask=()=>{
        task &&
        setTodo([...todos,task])
    }

    const handleDelete=(index)=>{
   
       setTodo( todos.filter((item , i)=>i!==index))
    }
    const handleEdit=(index)=>{
     console.log(index)
    }
    useEffect(()=>{
        console.log(todos)
    },[todos])
  return (
    <div className="main">
    <div className='input'>
        <input type='text' placeholder='Enter your task' value={task} onChange={e=>setTask(e.target.value)}></input>
        <button onClick={addTask}>Add To List</button>
    </div>
    <div className="todo" style={{display:'flex' ,gap:'10px',flexDirection:'column'}}>
    {
        todos && todos.map((todo,index)=>{
            return(
                    <List key={index} index={index} todo={ todo} onDelete={handleDelete} onEdit={handleEdit} />
            )
            
        })
    }
    </div>
    </div>

  )
}

export default Home
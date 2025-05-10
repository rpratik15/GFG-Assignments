import React, { useState,useEffect } from 'react'

function Feedback() {
  const initialValue={
    name:"",  
    age:"",
    city:""}
  const [user,setUser]=useState([])
    const [data,setData]=useState([{initialValue
    }])
    const SaveData=(e)=>{
    e.preventDefault();
    setUser([...user,data])
   
    setData(initialValue)

    }
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    useEffect(()=>{
        console.log(user)
    },[user])

    
  return (

    <div className='feedback'>Feedback Form 
        <div className="myForm">
            <form action="" onSubmit={SaveData}>
                <input type='text' placeholder='Enter your name' name='name' value={data.name} onChange={handleChange}/>
                <input type='text' placeholder='Enter your age' name='age' value={data.age} onChange={handleChange}/>
                <input type='text' placeholder='Enter your city' name='city' value={data.city} onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
        <div className="card">
          {
            user && user.map((item,index)=>{
              return(
                <div className='cardItem' key={index}>
                  <h3>Name : {item.name}</h3>
                  <h3>Age : {item.age}</h3>
                  <h3>City : {item.city}</h3>
                  </div>
                  
              )}
            )
             
      }
        </div>
    </div>
  )
}


export default Feedback
import React, { useState } from 'react'

function Feedback() {
  
    const [data,setData]=useState([{
        name:"",
        age:"",
        city:""
    }])
    const SaveData=(e)=>{
    e.preventDefault();

    alert(`Name :${data.name} Age :${data.age} City :${data.city}`)
    setData({...data,data});
    console.log(data)
    }
  return (

    <div className='feedback'>Feedback Form 
        <div className="myForm">
            <form action="" onSubmit={SaveData}>
                <input type='text' placeholder='Enter your name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
                <input type='text' placeholder='Enter your age' value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}/>
                <input type='text' placeholder='Enter your city' value={data.city} onChange={(e)=>setData({...data,city:e.target.value})}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}


export default Feedback
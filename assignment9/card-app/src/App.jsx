import { useState } from 'react'
import Card from './Components/Card'

import './App.css'

function App() {
const [cards, setCards] = useState([
  {
    id: 1,
    image: 'https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg',
    title: 'Cat',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum.'
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1666878155781-f86514e5808b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Dog',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1480044965905-02098d419e96?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Bird',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum.'
  }
])

  return (
    <div className='App'>
    {
      cards.map((card)=>{
        return(
          <Card key={card.id} image={card.image} title={card.title} description={card.description}/>
        )
      })
    }
      
    </div>
  )
}

export default App

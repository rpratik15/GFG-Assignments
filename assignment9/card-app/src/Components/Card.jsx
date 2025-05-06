import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons' 

function Card({image, title, description}) {
  return (
    <div className='Card'>
        <img src="https://cdn2.thecatapi.com/images/LSaDk6OjY.jpg" alt={title} className='Card-image' />
        <h2 className='Card-title'>Cat</h2>
        <p className='Card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum.</p>
        <div className='Card- buttons'>
            <div className="save">
            <i class="fa-regular fa-bookmark fa-lg"></i>
            </div>
            <i class="fa-regular fa-thumbs-up fa-lg"></i>
            <i class="fa-regular fa-thumbs-down fa-lg"></i>
            <i class="fa-regular fa-paper-plane fa-lg"></i>
        </div>
    </div>
  )
}

export default Card
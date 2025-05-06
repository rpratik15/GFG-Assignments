import React from 'react'
import '../Style/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons' 

function Card({image, title, description}) {
  return (
    <div className='Card'>
        <img src={image} alt="title" className='Card-image' />
        <h2 className='Card-title'>{title}</h2>
        <p className='Card-description'>{description}.</p>
        <div className='Card-buttons'>
            <div className="grp1">
            <i class="fa-regular fa-bookmark fa-lg"></i>
            </div>
            <div className="grp2">
            <i class="fa-regular fa-thumbs-up fa-lg"></i>
            <i class="fa-regular fa-thumbs-down fa-lg"></i>
            <i class="fa-regular fa-paper-plane fa-lg"></i>
            </div>
        </div>
    </div>
  )
}

export default Card
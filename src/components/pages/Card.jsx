import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div>
    <div className='card'>
        <div>
            <img src={props.Image} alt="image" height='300px' width='300px' />
        </div>
        <div>
            <p>{props.Title}</p>
        </div>
    </div>
    </div>
  )
}

export default Card
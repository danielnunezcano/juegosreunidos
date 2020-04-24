import React from 'react'
import './css/card.css'

const Card = ({ type, left, top }) => {
  return (
    <div className='card'>
      <div className='style' style={{left: `${left}%`, top: `${top}px`}}>
        <img src={`${process.env.PUBLIC_URL}/cards/${type}.svg`} alt='card' />
      </div>
    </div>
  )
}

export default Card

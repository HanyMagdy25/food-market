import React from 'react'

const CardSm = ({text,image,colorCard}) => {
  return (
    <div className='card-one-small' style={{backgroundColor:`${colorCard}`}}>
        <h6>{text}</h6>
        <img src={image} alt={text} />
    </div>
  )
}

export default CardSm
import React from 'react'

const CardPay = ({image,text,title}) => {
  return (
    <div className='cardPay'>
        <img src={image} alt="sdf"/>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default CardPay
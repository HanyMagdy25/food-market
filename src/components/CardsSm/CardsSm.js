import React from 'react'
import CardSm from './CardSm'
import "./CardsSm.css"
import cardsm1 from "../../assets/images/cardsm1.png"
import cardsm3 from "../../assets/images/cardsm3.png"
import cardsm6 from "../../assets/images/cardsm6.png"
import cardsm5 from "../../assets/images/cardsm5.png"
import cardsm4 from "../../assets/images/cardsm4.jpg"
import cardsm2 from "../../assets/images/cardsm2.jpg"
import cardsm7 from "../../assets/images/cardsm7.png"
const CardsSm = () => {
  return (
    <div className='cards-small-section'>
        <div className='cards-small-section-container'>

        <CardSm text="المخبوزات" image={cardsm1} colorCard="#F8CF65"/>
        <CardSm text="العناية بالبشرة" image={cardsm4} colorCard="#F9CFD9"/>
        <CardSm text="منتجات الألبان" image={cardsm5} colorCard="#B1C8D8"/>
        <CardSm text="مجمدات" image={cardsm7} colorCard="#CBAA74"/>
        <CardSm text="منتجات الألبان" image={cardsm5} colorCard="#B1C8D8"/>
        <CardSm text="الخضروات و الفاكهة" image={cardsm2} colorCard="#C3C3B7"/>
        <CardSm text="لحوم و دواجن" image={cardsm6} colorCard="#FF6C4C"/>
        <CardSm text="المشروبات" image={cardsm3} colorCard="#EFDED5"/>
        </div>
        </div>
  )
}

export default CardsSm
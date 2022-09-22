import React from 'react'
import BestProducts from '../../components/BestProducts/BestProducts'
import CardsSm from '../../components/CardsSm/CardsSm'
import Header from '../../components/Header/Header'
import { Payment } from '../../components/Payment/Payment'
import Recent from '../../components/Recent/Recent'

const Home = () => {
  return (
    <>
        <Header/>
        <CardsSm/>
        <BestProducts/>
        <Recent/>
        <Payment/>
    </>
  )
}

export default Home
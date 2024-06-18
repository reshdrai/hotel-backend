import React from 'react'
import Body from './Body'
import Categories from './Categories'
import Card_grid from '../Cards/Card_grid'
import Reviews from './Reviews'
import Carousel from './Carousel'
import Contactme from './Contactme'
// import Star from './Star'
import Check from './Check'
function Home() {
  return (
    <div>
    <Body/>
    <Carousel/>
    <Categories/>
    <Card_grid/>
    {/* <Star/> */}
    {/* <Reviews/> */}
    <Contactme/>
    {/* <Check/> */}
    </div>
  )
}

export default Home
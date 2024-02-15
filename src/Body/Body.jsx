import React from 'react'
import { Link } from 'react-router-dom'
import Categories from './Categories'

function Body() {
  return (
    <>
   <section id='intro'>
    <div className="context">
        <div className="row">
        <div className="introduction col-8">Find the perfect room for your stay

        <div className='txt-browse'>Browse rooms by rate,type and availability</div>

        <div className="search-button">
       <Link to='search_result'> <button className="bton">Book Now</button></Link>
        </div>
        
        </div>
        </div>
    </div>
   </section>
   
   </>
  )
}

export default Body
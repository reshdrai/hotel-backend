import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Data from '../Apis/Data'
import BookingForm from '../Body/BookingForm'
import NewContext from '../Body/NewContext'
function Card_grid() {
  

  return (
    <>
    
    
        <section id="card_grid">
        <div className="two-grids">
            <div className="row">
{/* Left grid */}
                <div className="special_offers col-2">
                    <div className="txt-special_offer">&nbsp;<i class="fa-solid fa-user-large"></i> &nbsp;Special Offer</div>
                    {Data.filter((x)=> x.type === "special offer").map((x)=>
                    <div className="special_offer-card1">
                        <div className="txt-compliment">{x.title}
                        <div className="txt-byroomvista">by Roomvista</div>
                        </div>
                        
                        <img src={x.image}></img>
                   
                    <div className="button-book">
                   <Link to={`/room_booking/${x.id}`}> <button className='book_now' >See More</button></Link>
                    </div>
                    </div>
                    )}
                    <div className="below-special-offer">
                    {Data.filter((x)=> x.type === "special offer2").map((x)=>
                    <div className="row" >
                        <div className="special-offer-card2 col">
                        <div className="txt-new-room">{x.title}
                        <div className="txt-experience">Experience</div>
                        </div>
                        
                       <img src={x.image}></img>
                    <div className="button-book">
                    <Link to={`/room_booking/${x.id}`}> <button className='book_now' >See More</button></Link>
                    </div>
                    </div>
                    </div>
                    )}
                        </div>
                    
                    </div>
                    

                    {/* Right Grid */}
                    
                <div className="trending-rooms col-8">
                
                    <div className="row">
                <div className="txt-trending-rooms col">&nbsp;<i class="fa-solid fa-user-large"></i> &nbsp;Trending Rooms</div></div>
                <div className="cards">
                <div className="row">
                {Data.filter(x => x.type =="trending").map((x) =>
                    <div className="right-grid-card1 col-3 ">
                        <Link to={`/room_booking/${x.id}`}><div className="right-grid-image"><img src={x.image}></img></div></Link>
                        <div className="content">{x.title}
                        <div className="small-txt">Starting</div>
                        <div className="facilities">
                            <i class="fa-solid fa-wifi"></i>
                            <i class="fa-solid fa-heart"></i>
                            
                        </div>
                    </div>
                    </div>
                        )}
                        </div>
                        
                    </div>
                    
                  
                    </div>
            </div>
        </div>
    </section>
   
    </>
  )
}



export default Card_grid
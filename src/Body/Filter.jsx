import React from 'react'
import { useContext } from 'react';
import NewContext from './NewContext';


function Filter() {
    const crossfilter =useContext(NewContext);
    const anothercrossfilter = () =>{
        crossfilter();
    }
  return (
    <section id='filter-search'>
        <div className="topon-container">
        <div className="filter-container">
            {/* filter intro */}
            <div className="intro-container">
            <div className="filter-intro">Filter</div>
            <button className='cross-button' onClick={anothercrossfilter}><i class="fa-solid fa-xmark"></i></button>
            </div>
            
            {/* price range */}
            <div className="price-range-txt">Price range</div>
            <div className="price-range-button-txt">
                <div className="min-price-txt">Min price</div>
                <div className="max-price-txt">Max Price</div>
            </div>
            <div className="price-range-buttons">
                <div className="min-price"><button>$25</button></div>
                <div className="max-price"><button>$300</button></div>
            </div>
            
            {/* properties and icons */}
            <div className="property-type-txt">Property</div>
            <div className="property-types">
            <div className="property-type-card">
            <div className="property-hotel-icon"><i class="fa-solid fa-hotel"></i></div>
            <div className="property-hotel-txt">Hotel</div>
            </div>
            <div className="property-type-card">
            <div className="property-hotel-icon"><i class="fa-solid fa-hotel"></i></div>
            <div className="property-hotel-txt">Shared Apartment</div>
            </div>
            <div className="property-type-card-hotel">
            <div className="property-hotel-icon"><i class="fa-solid fa-hotel"></i></div>
            <div className="property-hotel-txt">Hotel</div>
            </div>
            </div>

            {/* number of beds and people */}
            <div className="no-people-intro">Number of people, rooms and bed </div>
            <div className="number-people-txt">
                <div className="nr-people-txt">Nr of people</div>
                <div className="nr-people-txt">Nr of bed</div>
                <div className="nr-people-txt">Types of bed</div>
            </div>
            <div className="entry-types">
            <input className="nr-people" type="text" placeholder="&nbsp; 2" ></input> 
            <input className="nr-people" type="text" placeholder="&nbsp; 1" ></input> 

            <div className="check-box-container">
            <input type="checkbox"  name="bed1" value="single bed" className='checkbox-1'/>
  <label for="bed1" className='single-bed-txt'> Single bed</label><br></br>
            <input type="checkbox"  name="bed1" value="single bed" className='checkbox-1'/>
  <label for="bed1" className='double-bed-txt'> Double bed</label><br></br>
  </div>
            </div>

            {/* Others */}
            <div className="other-txt">Others</div>
            <div className="others-checkbox-container">
                <div className="others-checkbox1">
                <input type="checkbox"  name="others1" value="free cancelation" className='inside-others'/>
  <label for="others1" className='free-cancelation-txt'> Free cancelation</label><br></br>
                </div>
                <div className="others-checkbox1">
                <input type="checkbox"  name="others1" value="free cancelation" className='inside-others'/>
  <label for="others1" className='free-cancelation-txt'> Breakfast</label><br></br>
                </div>
                <div className="others-checkbox1">
                <input type="checkbox"  name="others1" value="free cancelation" className='inside-others'/>
  <label for="others1" className='free-cancelation-txt'> Wifi</label><br></br>
                </div>
            </div>

            {/* last one show results button */}
            <div className="show-result-container">
                <div className="clear-txt">Clear</div>
                <div className="show-results"><button>Show Results</button></div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Filter
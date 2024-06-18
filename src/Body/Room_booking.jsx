import React,{useState} from 'react'
import { Link, useParams , } from 'react-router-dom'
import Data from '../Apis/Data'
import BookingForm from './BookingForm'
import NewContext from './NewContext'
import Categories2 from './Categories2'
function Room_booking() {
  let {pict} = useParams()
  const getid = Data.filter((x)=>x.id === Number(pict))

  if (!getid){
    return <div>
      Room not found
    </div>
  }
  let [book,setbook] = useState(null)
  const handlebook =() => {
      if (book== null){
          setbook(<BookingForm/>)
      }
      
  }
  const crossbook = () =>{
      if (book != null){
          setbook(null)
  }}
  // }
  return (
    <NewContext.Provider value={crossbook}>
    <>
    {/* <div> */}
      {book}
    <section id="room_booking">
      
        <div className="top-booking">
          <div className="row">
            <Link to="/"><div className="left-arrow col"><i class="fa-solid fa-arrow-left"></i></div></Link>
            </div>
            
            
           
           <div className="combine">
           {getid.map((x)=>
            <div className="row">
            <div className="left-booking col-lg-6 col-sm-12">
            <img src={x.image}  />
            </div>
            
            <div className="right-booking col-lg-5 col-sm-12">
                <div className="booking-content">
                    <div className="booking-intro">{x.title}</div>
                    <div className="combine-profile">
                    
                    <div className="row d-flex">
                      <div className="c col-9">
                      <div className="profile-name">Room Type <br/>
                    <h5 className='down-profile-name'>category</h5>
                    </div>
                    </div>
                    <div className="p col-3 "><p className='text-end'>price</p></div>
                    {/* </div> */}
                    </div>
                    </div>
                    <div className="booking-desc">
                      </div>
                    </div>

                    <div className="room-con ">
                    <div className="row py-3">
                      
                      <div className="col-6">
                      <div className="right-booking">
  <div className="booking-content">
  <div className="combine-pro">
                     <div className="booking-right-profile px-2"><i class="fa-solid fa-mountain-sun"></i></div>
                     <div className="profile-name-2">Room View <br/>
                     <h5 className='down-profile-name-2'>Normal View</h5>
                     </div>
                     </div>
  </div>
</div>
                      </div>
                      
                      <div className="col-6">
                      <div className="right-booking">
  <div className="booking-content">
  <div className="combine-pro">
                     <div className="booking-right-profile px-2"><i class="fa-solid fa-bed"></i></div>
                     <div className="profile-name-2">No. Of Bed <br/>
                     <h5 className='down-profile-name-2'>2</h5>
                     </div>
                     </div>
  </div>
</div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-6">
                      <div className="right-booking">
  <div className="booking-content">
  <div className="combine-pro">
                     <div className="booking-right-profile px-2"><i class="fa-solid fa-people-group"></i></div>
                     <div className="profile-name-2">Max Guest <br/>
                     <h5 className='down-profile-name-2'>4</h5>
                     </div>
                     </div>
  </div>
</div>
                      </div>
                      
                      
                      <div className="col-6">
                      <div className="right-booking">
  <div className="booking-content">
  <div className="combine-pro">
                     <div className="booking-right-profile px-2"><i class="fa-solid fa-maximize"></i></div>
                     <div className="profile-name-2">Room Size <br/>
                     <h5 className='down-profile-name-2'>20 Sq/m</h5>
                     </div>
                     </div>
  </div>
</div>
                      </div>
                      
                      {/* </div> */}
                      </div>
                    </div>
              
                {/* <div className="booking-button-1"><button className='place-offer'>Place Offer</button></div> */}
                <div className="booking-button-1" onClick={handlebook}><button className='booking-book-now'>Book Now</button></div>
                </div>
            
            </div>
           
           )}
            </div>
            
        </div>





    </section>
    {/* </div> */}
    <Categories2/>
    </>
    </NewContext.Provider>
  )
}

export default Room_booking



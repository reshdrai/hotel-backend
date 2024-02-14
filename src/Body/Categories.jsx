import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Apis/Data'
function Categories() {
  return (
    <section id="categories">
    <header className='categories'>Room categories</header>
    <div className="rooms">
      <div className="row">
        
        <div className="standard-room col">
        {Data.filter((x)=>x.category === "Standard").slice(0,1).map((x)=>
        <div className="combine-categories">
        <div className="standard">{x.category}</div>
        <Link to={`/search_result/${x.id}`}><div className="standard-icon"><img src={x.image}  /></div></Link>
        </div>
        )}
        </div>
        <div className="standard-room col">
        {Data.filter((x)=>x.category === "Deluxe").slice(0,1).map((x)=>
        <div className="combine-categories">
        <div className="standard">{x.category} </div>
        <Link to={`/search_result/${x.id}`}><div className="standard-icon"><img src={x.image}  /></div></Link>
        </div>
        )}
        </div>
        <div className="standard-room col">
        {Data.filter((x)=>x.category === "Suite").slice(0,1).map((x)=>
        <div className="combine-categories">
        <div className="standard">Suite</div>
        <Link to={`/search_result/${x.id}`}>
          <div className="standard-icon"><img src={x.image}  /></div>
          </Link>
        </div>
        )}
        </div>
        <div className="standard-room col">
        {Data.filter((x)=>x.category === "Family").slice(0,1).map((x)=>
        <div className="combine-categories">
        <div className="standard">Family</div>
        <Link to={`/search_result/${x.id}`}><div className="standard-icon"><img src={x.image}  /></div></Link>
        </div>
        )}
        </div>
        <div className="standard-room col">
          {Data.filter((x)=>x.category === "Presidental").slice(0,1).map((x)=>
          <div className="combine-categories">
        <div className="standard">Presidental</div>
        <Link to={`/search_result/${x.id}`}><div className="standard-icon"><img src={x.image}  /></div></Link>
        </div>
        )}
        </div>
    </div>
    </div>
    </section>
  )
}

export default Categories


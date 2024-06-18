import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewContext from '../Body/NewContext'
import Login from '../Body/BookingForm'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  let [login, setLogin] = useState(false)
  const navigate = useNavigate()
  const clickHome =()=>{
    navigate('/')
  }
  const handleloginclick = () =>{
    setLogin(!login);
  }


  let [search, setSearch] = useState(null)
  const searchbuttonclick = () =>{
    if (search == null){
      setSearch(<input className="navbar-searched" type="search" placeholder="&nbsp;Enter your search criteria" ></input>);
    }
    else{
      setSearch(null);
    }
  }
 
  return (
    

    <div>
    
    {login? (
      
      <Login />
      
    ) : (
<>

<nav class="nav-bg fixed-top navbar navbar-expand-lg bg-body-tertiary navbar-light ">
  <div class="container-fluid">
  {/* <Link to='/'><a class="image-logo navbar-brand px-4 ms-5"><img src="" alt="" width="150"/></a></Link> */}
    <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex me-5" >
        
        <li class="nav-item">
          <a onClick={clickHome} class="nav-link px-3 text-light">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 text-light" href="#">About Us</a>
        </li><li class="nav-item">
         <a class="nav-link px-3 text-light">Category</a>
        </li><li class="nav-item">
          <a class="nav-link px-3 text-light" href="#">Contact Us</a>
        </li><li class="nav-item">
          <a class="nav-link px-3 text-light" href="#">Location</a>
        </li>
      </ul>
      <div class="d-flex me-5 "  role="search">
      <div className="text-light fs-4 mx-3"><i class="fa-brands fa-instagram"></i></div>
      <div className="text-light fs-4"><i class="fa-brands fa-facebook"></i></div>
        
      </div>
    </div>
  </div>
</nav>

</>
      )}
    </div>
  )
}

export default Navbar

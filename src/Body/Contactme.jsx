import React from 'react'

function Contactme() {
  return (
    <section id ="contactpage">
          <div id="contact">
        <h1 className="contacttitle">Contact me</h1>
        <span className="contactdesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactform">
            <input type="text" className='name' placeholder='Your name'/>
            <input type="email" className='email' placeholder='Your Email'/>
            <textarea name="message" className='textarea'  rows="5" placeholder='Your message'></textarea>
            <button type='submit' value='send' className="submitbton">Submit</button>
          
        </form>
    </div>
    </section>
  )
}

export default Contactme
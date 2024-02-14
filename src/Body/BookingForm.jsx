import React, { useContext, useState } from 'react';
import NewContext from './NewContext';

function BookingForm({handlebook}) {
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    specialRequests: '',
    price: '',
    numberOfRooms: 1, // Defaulting to one room
  });
  const crossbook = useContext(NewContext)

  const handlebookingclose = () => {
  
   crossbook();
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/booking-details/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include other headers as needed, for example, authorization headers
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      alert('Booking submitted successfully.');

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Error submitting booking. Check console for details.');
    }
  };
<BookingForm handlebookingclose={handlebookingclose} />
  return (

    <div className="fuck">
    
    <form onSubmit={handleSubmit} className='login-form'>
    <div className="submit-cross-button" onClick={()=>handlebookingclose()}>
        <button><i class="fa-solid fa-xmark"></i></button></div>
      <div>
        <label htmlFor="guestName">Guest Name:</label>
        <input type="text" id="guestName" name="guestName" value={formData.guestName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="checkIn">Check-In Date:</label>
        <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="checkOut">Check-Out Date:</label>
        <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} />
      </div>
      {/* <div>
        <label htmlFor="specialRequests">Special Requests:</label>
        <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange}></textarea>
      </div> */}
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
      </div>
      {/* <div>
        <label htmlFor="numberOfRooms">Number of Rooms:</label>
        <input type="number" id="numberOfRooms" name="numberOfRooms" value={formData.numberOfRooms} onChange={handleChange} min="1" />
      </div> */}
      <div className="submit-button"><button type="submit" className='submit'>Submit Booking</button></div>
    </form>
    </div>
   
  );
}

export default BookingForm;

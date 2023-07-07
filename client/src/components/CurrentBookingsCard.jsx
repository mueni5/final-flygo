import React, { useContext } from 'react';
import './CurrentBookingsCard.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const CurrentBookingsCard = ({ id, date, from, to, price, departureTime, arrivalTime, airport, onDelete }) => {
  const { currentuser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCancelFlight = () => {
    // Implement cancellation logic here
     if (currentuser && currentuser.id) {
      fetch(`/bookings/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Booking cancelled");
          navigate('/profile');
        })
        .catch((error) => alert(error.message));
    }
    
    console.log("Flight cancelled.");
  }


  return (
    <div className="flight-card">
      <h3 className="flight-card__header">Flight Details</h3>
      <div className="flight-card__row">
        <span>Date:</span>
        <span>{date}</span>
      </div>
      <div className="flight-card__row">
        <span>From:</span>
        <span>{from}</span>
      </div>
      <div className="flight-card__row">
        <span>To:</span>
        <span>{to}</span>
      </div>
      <div className="flight-card__row">
        <span>Price:</span>
        <span>${price}</span>
      </div>
      <div className="flight-card__row">
        <span>Departure Time:</span>
        <span>{departureTime}</span>
      </div>
      <div className="flight-card__row">
        <span>Arrival Time:</span>
        <span>{arrivalTime}</span>
      </div>
      <div className="flight-card__row">
        <span>Airport:</span>
        <span>{airport}</span>
      </div>
      <button className="flight-card__cancel" onClick={handleCancelFlight}>Cancel Flight</button>
      {/* <button className="flight-card__cancel" onClick={onDelete}>Cancel Flight</button> */}
    </div>
  );
};

export default CurrentBookingsCard;



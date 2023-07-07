import React from "react";
import StarRatings from 'react-star-ratings';
import { useNavigate } from "react-router-dom";
import './AirportCard.css';

function AirportCard({ id, image, rating, name, contact }) {
  const navigate = useNavigate()

  function handleClick() {
    // navigate(`/airports/${id}`);
    navigate(`/airports/${id}?name=${encodeURIComponent(name)}`);
  }
  
  return (
    <div className="airport-card" onClick={handleClick}>
      <img className="airport-card__image" src={image} alt={name} />
      <div className="airport-card__name">{name}</div>
      <div>{contact}</div>
      <div className="airport-card__rating">
        <StarRatings
          rating={parseFloat(rating)}
          starDimension="20px"
          starSpacing="2px"
          starRatedColor="gold"
        />
      </div>
    </div>
  );
}



export default AirportCard;
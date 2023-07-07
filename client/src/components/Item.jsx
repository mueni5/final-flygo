// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from 'react-router-dom';
// import { AuthContext } from "../context/AuthContext";
// import './Item.css';


// const Item = () => {
//   const [flight, setFlight] = useState({});
//   const { id } = useParams();
//   const { currentuser } = useContext(AuthContext);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
  

//   useEffect(() => {
//     fetch(`/flights/${id}`)
//     .then((response) => response.json())
//     .then((data) => { console.log(data); setFlight(data[0]); console.log(flight);})
//     .catch((error) => alert(error.message))
//   }, [id]);


//   if (!flight) {
//     return <div>Loading...</div>;
//   }


//   const handleBack = () => {
//     navigate(-1);
//   }


//   const handleBook = () => {
//     if (currentuser && currentuser.id) {
//       fetch(`/bookings`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user_id: currentuser.id,  
//         flight_id: flight.flight_id,
//       }),
//     }).then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       alert("Booking successful");
//       navigate("/profile");
//     })
//     .catch((error) => alert(error.message));

//     } else {
//       setIsLoading(false); // If currentuser is undefined or doesn't have an id, set isLoading to false
//     }
//   }
  

//   return (
//     <div className="item-container">
//       <div className="item">
//         <h2>Booking Details</h2>
//         <p>Date: {flight.date}</p>
//         <p>Origin: {flight.origin}</p>
//         <p>Destination: {flight.destination}</p>
//         <p>Price: {flight.price}</p>
//         <p>Departure Time: {flight.departureTime}</p>
//         <p>Arrival Time: {flight.arrivalTime}</p>
//         <p>Airport: {flight.airport_name}</p>
//         <p>Class: {flight.flight_class}</p>
//         <button onClick={handleBack}>Back</button>
//         <button onClick={handleBook}>Book</button>
//       </div>
//     </div>
    
//   );
// }

// export default Item;





import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import './Item.css';
import Spinner from "./Spinner";

const Item = () => {
  const { id } = useParams();
  const { currentuser } = useContext(AuthContext);
  const [flight, setFlight] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/flights/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFlight(data[0]);
      })
      .catch((error) => alert(error.message));
  }, [id]);

  // useEffect(() => {
  //   console.log(flight);
  // }, [flight]);
  
  const handleBack = () => {
    navigate(-1);
  };

  const handleBook = () => {
    if (currentuser && currentuser.id) {
      fetch(`/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: currentuser.id,
          flight_id: flight.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Booking successful");
          navigate("/profile");
        })
        .catch((error) => alert(error.message));
    }else{
      navigate('/login');
    }
  };

  // if (!flight) {
  //   return <div>Loading...</div>;
  // }

  if (!flight) {
    return <Spinner />;
  }

  return (
    <div className="item-container">
      <div className="item">
        <h2>Booking Details</h2>
        <p>Date: {flight.date}</p>
        <p>Origin: {flight.origin}</p>
        <p>Destination: {flight.destination}</p>
        <p>Price: ${flight.price}</p>
        <p>Departure Time: {flight.departureTime}</p>
        <p>Arrival Time: {flight.arrivalTime}</p>
        <p>Airport: {flight.airport_name}</p>
        <p>Class: {flight.flight_class}</p>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleBook}>Book</button>
      </div>
    </div>
  );
};

export default Item;


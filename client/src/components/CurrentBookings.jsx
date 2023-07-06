// import React, { useState, useEffect } from "react";
// import './CurrentBookings.css';
// import CurrentBookingsCard from "./CurrentBookingsCard";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";


// function CurrentBookings() {
//   const { currentuser } = useContext(AuthContext);

//   console.log(currentuser);

//   const [flights, setFlights] = useState([]);


//   // useEffect(() => {
//   //   fetch(`/user_flights?user_id=${currentuser.id}`)
//   //   .then((response => response.json()))
//   //   .then((data) => {
//   //     console.log(data);
//   //     setFlights(data);})
//   //   .catch((error) => alert(error.messages));
//   // }, [currentuser]);


//   // const bookings = flights.map((flight) => {
//   //   return <CurrentBookingsCard key={flight.id} date={flight.date} from={flight.origin} to={flight.destination} price={flight.price} departureTime={flight.departureTime}
//   //                               arrivalTime={flight.arrivalTime} airport={flight.airport_name}/>
//   // });


//   const bookingsArray = [{id: 1, date: "5/6/2023", from: "Kisumu", to: "Mombasa", price: 8000, departureTime: "12:00", arrivalTime: "13:00", airport: "Kisumu International airport"},
//                          {id: 2, date: "7/6/2023", from: "Mombasa", to: "Nairobi", price: 10000, departureTime: "11:00", arrivalTime: "12:00", airport: "Moi International airport"}
//                         ];

//   const bookings = bookingsArray.map((booking) => {
//     return <CurrentBookingsCard key={booking.id} date={booking.date} from={booking.from} to={booking.to} price={booking.price} departureTime={booking.departureTime}
//                                 arrivalTime={booking.arrivalTime} airport={booking.airport}/>
//   });

  
//   return(
//     <>
//     <div className="current-bookings-header">
//       <h2>My Flights</h2>
//     </div>
//       <div className="current-bookings">
//         {bookings}
//       </div>
//     </>
//   );
// }

// export default CurrentBookings;




// import React, { useState, useEffect, useContext } from "react";
// import './CurrentBookings.css';
// import CurrentBookingsCard from "./CurrentBookingsCard";
// import { AuthContext } from "../context/AuthContext";

// function CurrentBookings() {
//   const { currentuser } = useContext(AuthContext);
//   const [flights, setFlights] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (currentuser) {
//       fetch(`/user_flights?user_id=${currentuser.id}`)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setFlights(data);
//           setIsLoading(false);
//         })
//         .catch(error => alert(error.message));
//     }
//   }, [currentuser]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const bookings = flights.map(flight => (
//     <CurrentBookingsCard
//       key={flight.id}
//       date={flight.date}
//       from={flight.origin}
//       to={flight.destination}
//       price={flight.price}
//       departureTime={flight.departureTime}
//       arrivalTime={flight.arrivalTime}
//       airport={flight.airport_name}
//     />
//   ));

//   return (
//     <>
//       <div className="current-bookings-header">
//         <h2>My Flights</h2>
//       </div>
//       <div className="current-bookings">{bookings}</div>
//     </>
//   );
// }

// export default CurrentBookings;




import React, { useState, useEffect, useContext } from "react";
import './CurrentBookings.css';
import CurrentBookingsCard from "./CurrentBookingsCard";
import { AuthContext } from "../context/AuthContext";

function CurrentBookings() {
  const { currentuser } = useContext(AuthContext);
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFlights([]); // Reset flights state when the user changes
    setIsLoading(true); // Set isLoading state to true when the user changes

    if (currentuser && currentuser.id) {
      fetch(`/user_flights?user_id=${currentuser.id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setFlights(data);
          setIsLoading(false);
        })
        .catch(error => alert(error.message));
    } else {
      setIsLoading(false); // If currentuser is undefined or doesn't have an id, set isLoading to false
    }
  }, [currentuser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const bookings = flights.map(flight => (
    <CurrentBookingsCard
      key={flight.id}
      date={flight.date}
      from={flight.origin}
      to={flight.destination}
      price={flight.price}
      departureTime={flight.departureTime}
      arrivalTime={flight.arrivalTime}
      airport={flight.airport_name}
    />
  ));

  return (
    <>
      <div className="current-bookings-header">
        <h2>My Flights</h2>
      </div>
      <div className="current-bookings">{bookings}</div>
    </>
  );
}

export default CurrentBookings;

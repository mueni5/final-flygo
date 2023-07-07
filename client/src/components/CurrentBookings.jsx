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




// import React, { useState, useEffect, useContext } from "react";
// import './CurrentBookings.css';
// import CurrentBookingsCard from "./CurrentBookingsCard";
// import { AuthContext } from "../context/AuthContext";

// function CurrentBookings() {
//   const { currentuser } = useContext(AuthContext);
//   const [flights, setFlights] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setFlights([]); // Reset flights state when the user changes
//     setIsLoading(true); // Set isLoading state to true when the user changes

//     if (currentuser && currentuser.id) {
//       fetch(`/user_flights?user_id=${currentuser.id}`)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setFlights(data);
//           setIsLoading(false);
//         })
//         .catch(error => alert(error.message));
//     } else {
//       setIsLoading(false); // If currentuser is undefined or doesn't have an id, set isLoading to false
//     }
//   }, [currentuser]);
  
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const bookings = flights.map(flight => (
//     <CurrentBookingsCard
//       key={flight.id}
//       id={currentuser.id}
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




// import React, { useState, useEffect, useContext } from "react";
// import './CurrentBookings.css';
// import CurrentBookingsCard from "./CurrentBookingsCard";
// import { AuthContext } from "../context/AuthContext";

// function CurrentBookings() {
//   const { currentuser } = useContext(AuthContext);
//   const [bookings, setBookings] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);

//     if (currentuser && currentuser.id) {
//       fetch(`/user_bookings?user_id=${currentuser.id}`)
//         .then(response => response.json())
//         .then(data => {
//           setBookings(data);
//           setIsLoading(false);
//         })
//         .catch(error => alert(error.message));
//     } else {
//       setIsLoading(false);
//     }
//   }, [currentuser]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const renderedBookings = bookings.map(booking => (
//     <CurrentBookingsCard
//       key={booking.id}
//       id={booking.id}
//       date={booking.flight.date}
//       from={booking.flight.origin}
//       to={booking.flight.destination}
//       price={booking.flight.price}
//       departureTime={booking.flight.departureTime}
//       arrivalTime={booking.flight.arrivalTime}
//       airport={booking.flight.airport_name}
//     />
//   ));

//   return (
//     <>
//       <div className="current-bookings-header">
//         <h2>My Flights</h2>
//       </div>
//       <div className="current-bookings">{renderedBookings}</div>
//     </>
//   );
// }

// export default CurrentBookings;







// import React, { useState, useEffect, useContext } from "react";
// import './CurrentBookings.css';
// import CurrentBookingsCard from "./CurrentBookingsCard";
// import { AuthContext } from "../context/AuthContext";
// import Spinner from "./Spinner";

// function CurrentBookings() {
//   const { currentuser } = useContext(AuthContext);
//   const [bookings, setBookings] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [refreshKey, setRefreshKey] = useState(0);  // Add this line

//   useEffect(() => {
//     setBookings([]); // Reset bookings state when the user changes
//     setIsLoading(true); // Set isLoading state to true when the user changes

//     if (currentuser && currentuser.id) {
//       fetch(`/user_bookings?user_id=${currentuser.id}`)
//         .then(response => response.json())
//         .then(data => {
//           setBookings(data);
//           setIsLoading(false);
//         })
//         .catch(error => alert(error.message));
//     } else {
//       setIsLoading(false); // If currentuser is undefined or doesn't have an id, set isLoading to false
//     }
//   }, [currentuser, refreshKey]);  // Add refreshKey here

//   const handleDelete = (bookingId) => {
//     // Assuming you have a DELETE endpoint set up at `/bookings/:id`
//     fetch(`/bookings/${bookingId}`, { method: 'DELETE' })
//       .then(res => {
//         if (res.ok) {
//           // After deleting a booking successfully
//           setRefreshKey(oldKey => oldKey + 1);  // Add this line
//         } else {
//           throw new Error('Failed to delete booking');
//         }
//       })
//       .catch(error => console.log(error.message));
//   }

//   if (isLoading) {
//     return <Spinner />
//   }

//   //  if (!flight) {
//   //    return <Spinner />;
//   // }

//   const bookingCards = bookings.map(booking => (
//     <CurrentBookingsCard
//       key={booking.id}
//       id={booking.id}
//       date={booking.flight.date.slice(0, 10)}
//       from={booking.flight.origin}
//       to={booking.flight.destination}
//       price={booking.flight.price}
//       departureTime={booking.flight.departureTime.slice(11, 19)}
//       arrivalTime={booking.flight.arrivalTime.slice(11, 19)}
//       airport={booking.flight.airport_name}
//       onDelete={() => handleDelete(booking.id)}  // Add this line
//     />
//   ));
  
//   return (
//     <>
//       <div className="current-bookings-header">
//         <h2>My Bookings</h2>
//       </div>
//       <div className="current-bookings">{bookingCards}</div>
//     </>
//   );
// }

// export default CurrentBookings;






import React, { useState, useEffect, useContext } from "react";
import './CurrentBookings.css';
import CurrentBookingsCard from "./CurrentBookingsCard";
import { AuthContext } from "../context/AuthContext";
import Spinner from "./Spinner";

function CurrentBookings() {
  const { currentuser } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setBookings([]);
    setIsLoading(true);

    if (currentuser && currentuser.id) {
      fetch(`/user_bookings?user_id=${currentuser.id}`)
        .then(response => response.json())
        .then(data => {
          setBookings(data);
          setIsLoading(false);
        })
        .catch(error => alert(error.message));
    } else {
      setIsLoading(false);
    }
  }, [currentuser, refreshKey]);

  const handleDelete = (bookingId) => {
    fetch(`/bookings/${bookingId}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          setRefreshKey(oldKey => oldKey + 1);
        } else {
          throw new Error('Failed to delete booking');
        }
      })
      .catch(error => console.log(error.message));
  }

  if (isLoading) {
    return <Spinner />
  }

  const bookingCards = bookings.map(booking => (
    <CurrentBookingsCard
      key={booking.id}
      id={booking.id}
      date={booking.flight.date.slice(0, 10)}
      from={booking.flight.origin}
      to={booking.flight.destination}
      price={booking.flight.price}
      departureTime={booking.flight.departureTime.slice(11, 19)}
      arrivalTime={booking.flight.arrivalTime.slice(11, 19)}
      airport={booking.flight.airport_name}
      onDelete={() => handleDelete(booking.id)}
    />
  ));

  return (
    <div className="current-bookings">
      <div className="current-bookings-header">
        <h2>My Bookings</h2>
      </div>
      {bookings.length === 0 ? (
        <div className="no-flights-message">No current flights</div>
      ) : (
        bookingCards
      )}
    </div>
  );
}

export default CurrentBookings;

import React from "react";
import "./List.css";
import { useNavigate } from 'react-router-dom';

const List = ({flights}) => {
  // const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  
   function handleItem(flightId){
    navigate(`/bookinglist/${flightId}`)
   }

  return (
    <div>
      <h2 className="list-title">Booking List</h2>
      <ul className="booking-list">
        {flights.map(flight => (
          <li key={flight.id} className="booking-item" onClick={() => handleItem(flight.id)}>
            <h3 className="booking-user">{flight.airport_name}</h3>
            <p>{flight.date}</p>
            <p>{flight.origin}</p>
            <p>{flight.destination}</p>
            <p>{flight.flight_class}</p>
            <p>{flight.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;








// useEffect(() => {
//     // Simulating fetching bookings from an API
//     const fetchBookings = async () => {
//       try {
//         // Simulated API response
//         const response = await new Promise(resolve => {
//           setTimeout(() => {
//             const bookingsData = [
//               {
//                 id: 1,
//                 user: "John Doe",
//                 airport: "JKIA"
//               },
//               {
//                 id: 2,
//                 user: "Christine Mbuvi",
//                 airport: "Moi International Airport"
//               },
//               {
//                 id: 3,
//                 user: "Amos Wanene",
//                 airport: "Kisumu International Airport"
//               },
//               {
//                 id: 4,
//                 user: "Boniface Mabeche",
//                 airport: "Eldoret International Airport"
//               }
//             ];
//             resolve(bookingsData);
//           }, 1000); // Simulate delay
//         });

//         setBookings(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchBookings();
//   }, []);
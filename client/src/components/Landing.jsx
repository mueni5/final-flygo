// import React,{useState} from "react";
// import './Landing.css'
// import { useNavigate } from "react-router-dom";

// const Landing = ({id}) => {
//   const [firstName, setName] = useState('');
//   const [lastName, setFrom] = useState('');
//   const [destination, setDestination] = useState('');
//   const [departureDate, setDepartureDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const navigate= useNavigate();


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform search or booking logic here
//     // You can use the form data (origin, destination, departureDate) to make API requests or handle the data as needed
//     console.log('Submitted!');
//     navigate('/bookinglist')
//   };

//   return (
//     <div id={id} className="form-container">
  
//     <form onSubmit={handleSubmit}>
//       <label>
//         <input
//           type="text"
//           placeholder="Name"
//           value={firstName}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>

//       <label>
//         Origin
//         <input
//           type="text"
//           placeholder="From"
//           value={lastName}
//           onChange={(e) => setFrom(e.target.value)}
//         />
//       </label>

//       <label>
//         Destination
//         <input
//           type="text"
//           placeholder="Destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//         />
//       </label>
//       <label>
//         Depature Date
//         <input
//           type="date"
//           value={departureDate}
//           onChange={(e) => setDepartureDate(e.target.value)}
//         />
//       </label>

//       <label>
//         Return Date
//         <input
//           type="date"
//           value={returnDate}
//           onChange={(e) => setReturnDate(e.target.value)}
//         />
//       </label>

//       <button type="submit" onSubmit={handleSubmit}>Submit</button>
//     </form>
//     </div>
//   );
// };

// export default Landing;






// import React, { useState } from "react";
// import './Landing.css'
// import { useNavigate } from "react-router-dom";

// const Landing = ({ id }) => {
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');
//   const [date, setDate] = useState('');
//   const [flightClass, setFlightClass] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch('/flights')
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
//       console.log('Submitted!');
      
//     // Perform search or booking logic here
//     // You can use the form data (origin, destination, date, flightClass) to make API requests or handle the data as needed

//       navigate('/bookinglist');
//     } )
//     .catch((error) => console.log(error.messages))

    
//   };

//   return (
//     <div id={id} className="form-container">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Origin
//           <input
//             type="text"
//             placeholder="Origin"
//             value={origin}
//             onChange={(e) => setOrigin(e.target.value)}
//           />
//         </label>

//         <label>
//           Destination
//           <input
//             type="text"
//             placeholder="Destination"
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//           />
//         </label>

//         <label>
//           Date
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>

//         <label>
//           Class
//           <select
//             value={flightClass}
//             onChange={(e) => setFlightClass(e.target.value)}
//           >
//             <option value="">Any</option>
//             <option value="First Class">First Class</option>
//             <option value="Business Class">Business Class</option>
//             <option value="Economy Class">Economy Class</option>
//           </select>
//         </label>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Landing;







// import React, { useState } from "react";
// import './Landing.css'
// import { useNavigate } from "react-router-dom";

// const Landing = ({ id }) => {
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');
//   const [date, setDate] = useState('');
//   const [flightClass, setFlightClass] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch('/flights')
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
//       console.log('Submitted!');
      
//     // Filter the flights based on the form data
//     const filteredFlights = data.filter(flight => {
//         const sameOrigin = origin === '' || flight.origin === origin;
//         const sameDestination = destination === '' || flight.destination === destination;
//         const sameDate = date === '' || flight.date.slice(0,10) === date; // assuming date is in 'yyyy-mm-dd' format
//         const sameClass = flightClass === '' || flight.flightClass === flightClass;
        
//         return sameOrigin && sameDestination && sameDate && sameClass;
//       });

//     // Navigate to the new page with the filtered flights
//     navigate('/bookinglist', { state: { flights: filteredFlights } });
//     } )
//     .catch((error) => console.log(error.messages))
//   };

//   return (
//     <div id={id} className="form-container">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Origin
//           <input
//             type="text"
//             placeholder="Origin"
//             value={origin}
//             onChange={(e) => setOrigin(e.target.value)}
//           />
//         </label>

//         <label>
//           Destination
//           <input
//             type="text"
//             placeholder="Destination"
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//           />
//         </label>

//         <label>
//           Date
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>

//         <label>
//           Class
//           <select
//             value={flightClass}
//             onChange={(e) => setFlightClass(e.target.value)}
//           >
//             <option value="">Any</option>
//             <option value="First Class">First Class</option>
//             <option value="Business Class">Business Class</option>
//             <option value="Economy Class">Economy Class</option>
//           </select>
//         </label>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Landing;





import React, { useState } from "react";
import './Landing.css'
import { useNavigate } from "react-router-dom";

const Landing = ({ id }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [flightClass, setFlightClass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/flights')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      console.log('Submitted!');
      console.log(date);
      
    // Filter the flights based on the form data
    const filteredFlights = data.filter(flight => {
        const sameOrigin = origin === '' || flight.origin.toLowerCase() === origin.toLowerCase();
        const sameDestination = destination === '' || flight.destination.toLowerCase() === destination.toLowerCase();
        const sameDate = date === '' || flight.date.slice(0,10) === date; // assuming date is in 'yyyy-mm-dd' format
        const sameClass = flightClass === '' || (flight.flight_class && flight.flight_class.toLowerCase() === flightClass.toLowerCase());
        
        console.log("Same origin", sameOrigin);
        console.log("Same destination", sameDestination);
        console.log("Same date", sameDate);
        console.log("Same class", sameClass);

        return sameOrigin && sameDestination && sameDate && sameClass;
      });

    // console.log(filteredFlights);

    // Navigate to the new page with the filtered flights
    navigate('/bookinglist', { state: { flights: filteredFlights } });
  })
    .catch((error) => console.log(error.messages))
  };

  return (
    <div id={id} className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Origin
          <input
            type="text"
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </label>

        <label>
          Destination
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>

        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Class
          <select
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
          >
            {/* <option value="">Any</option> */}
            <option value="First">First</option>
            <option value="Business">Business</option>
            <option value="Economy">Economy</option>
          </select>
        </label>

        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default Landing;
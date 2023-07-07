import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './AirportList.css';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";


function AirportList() {
  const {id} = useParams();
  const [airportFlights, setAirportFlights] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {
    fetch(`/airport_flights?airport_id=${id}`)
      .then(response => response.json())
      .then(data => setAirportFlights(data))
      .catch((error) => alert(error));
  }, [id]);

  
  const flights = airportFlights.map((airportFlight) => {
    return {
      id: airportFlight.id,
      origin: airportFlight.origin,
      destination: airportFlight.destination,
      date: airportFlight.date,
      departureTime: airportFlight.departureTime,
      arrivalTime: airportFlight.arrivalTime,
      flightClass: airportFlight.flight_class,
      airportName: airportFlight.airport_name
    }
  })

  function handleBook(id){
    navigate(`/bookinglist/${id}`);
  }


  if (!airportFlights) {
    return <Spinner />;
  }
  
  // const flight = flight[0];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{minWidth: "100%"}}>
            <div className="card-header">{name}</div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Flight</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Depature Time</th>
                    <th>Arrival Time</th>
                    <th>Flight Class</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map((flight, index) => (
                    <tr key={flight.id} onClick={() => handleBook(flight.id)}>
                      <td>{index + 1}</td>
                      <td>{flight.origin}</td>
                      <td>{flight.destination}</td>
                      <td>{flight.date}</td>
                      <td>{flight.departureTime}</td>
                      <td>{flight.arrivalTime}</td>
                      <td>{flight.flightClass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default AirportList;
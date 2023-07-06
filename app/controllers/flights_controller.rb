class FlightsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    flights = Flight.all
    flights = serialize_flight(flights)
    render json: flights, status: :ok
  end
  

  def show
    flight = Flight.find(params[:id])
    flight = serialize_flight([flight])
    render json: flight, status: :ok
  end
  

  def create
    flight = Flight.new(airport_params)
    if flight.save
      flight = serialize_flight([flight])
      render json: flight, status: :created
    else
      render json: { error: flight.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def update
    flight = Flight.find(params[:id])
    if flight.update(airport_params)
      flight = serialize_flight([flight])
      render json: flight
    else
      render json: { error: flight.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def destroy
    flight = Flight.find(params[:id])
    flight.destroy
    head :no_content
  end

  
  def user_flights
    user = User.find(params[:user_id])

    flights = user.flights.map do |flight|
      {
        id: flight.id,
        origin: flight.origin,
        destination: flight.destination,
        date: flight.date,
        price: flight.price,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        flight_class: flight.class,
        airport_name: Airport.find(flight.airport_id).name
      }
    end

    render json: flights
  end



  def airport_flights
    airport = Airport.find(params[:airport_id])
    flights = airport.flights

    flights = airport.flights.map do |flight|
      {
        id: flight.id,
        origin: flight.origin,
        destination: flight.destination,
        date: flight.date,
        price: flight.price,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        flight_class: flight.class,
        airport_name: Airport.find(flight.airport_id).name
      }
    end
    render json: flights
  end



  def user_flight
    user = User.find(params[:user_id])
    flight = user.flight.find(params[:flight_id])
    render json: flights
  end


  def airport_flight
    airport = Airport.find(params[:airport_id])
    flight = airport.flights.find(params[:flight_id])
    render json: flights
  end


 
  private
  def render_not_found_response
    render json: {error: "Flight not found"}, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: {error: invalid.record.full_messages }, status: :unprocessable_entity
  end
 
  def serialize_flight flights
    flights.map do |flight|
      {
        id: flight.id,
        origin: flight.origin,
        destination: flight.destination,
        date: flight.date,
        price: flight.price,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        flight_class: flight.flight_class,
        airport_name: flight.airport.name,
      }
      
    end
  end
end





# private
#   def airport_params
#     params.require(:airport).permit(:name, :location)
#   end

#   def render_not_found_response
#     render json: { error: "Airport not found" }, status: :not_found
#   end
  
#   def render_unprocessable_entity_response(invalid)
#     render json: { error: invalid.record.full_messages }, status: :unprocessable_entity
#   end
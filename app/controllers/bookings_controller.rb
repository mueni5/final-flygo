class BookingsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  def index
    bookings = Booking.all
    # flights= serialize_flight(flights)
    render json: bookings, except: [:created_at, :updated_at], status: :ok
  end


  def show
    booking = Booking.find_by(id: params[:id])
    render json: booking, except: [:created_at, :updated_at], status: :ok
  end
  

  def create
    booking = Booking.new(booking_params)
    if booking.save
      render json: booking, status: :created
    else
      render json: { error: booking.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def update
    booking = Booking.find(params[:id])
    if booking.update(booking_params)
      render json: booking
    else
      render json: { error: booking.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def destroy
    booking = Booking.find(params[:id])
    booking.destroy
    head :no_content
  end


  # def user_bookings
  #   user = User.find(params[:user_id])
  #   bookings = user.bookings
  #   render json: bookings, except: [:created_at, :updated_at], status: :ok
  # end


  def user_bookings
  user = User.find(params[:user_id])
  bookings = user.bookings.map do |booking|
    flight = booking.flight
    {
      id: booking.id,
      user_id: user.id,
      flight: {
        id: flight.id,
        origin: flight.origin,
        destination: flight.destination,
        date: flight.date,
        price: flight.price,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        flight_class: flight.flight_class,
        airport_name: flight.airport.name
      }
    }
  end
  render json: bookings, except: [:created_at, :updated_at], status: :ok
end



  private

  def booking_params
    params.require(:booking).permit(:user_id, :flight_id)
  end

  def render_not_found_response
    render json: { error: "Booking not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: { error: invalid.record.full_messages }, status: :unprocessable_entity
  end

  # def serialize_booking bookings
  #   bookings.map do |booking|
  #     {
  #       id: review.id,
  #       user: review.review,
  #       rating: review.rating,
  #       user_name: review.user.username,
  #       airport_name: review.airport.name
  #     }
      
  #   end
  # end

end
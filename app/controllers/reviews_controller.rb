class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid,  with: :render_unprocessable_entity_response

  def index
    reviews = Review.all
    reviews = serialize_review(reviews)
    render json: reviews, status: :ok
  end

  def show
    review = Review.find(params[:id])
    review = serialize_review([review])
    render json: review, status: :ok
  end


  def user_reviews
    user = User.find(params[:user_id])
    reviews = serialize_review(user.reviews)
    render json: reviews, except: [:user_name], status: :ok
  end
  

  def airport_reviews
    airport = User.find(params[:airport_id])
    reviews = serialize_review(airport.reviews)
    render json: reviews, except: [:airport_name], status: :ok
  end

  

  def create
    airport = Airport.find_by(name: params[:airport_name])
    review = Review.new(review: params[:review] , rating: params[:rating], user_id: params[:user_id], airport_id:airport.id)
    if review.save
      render json: review, status: :created
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end




  def update
    review = Review.find(params[:id])

    if review.update(review_params)
      render json: review
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end



  def destroy
    review = Review.find(params[:id])
    review.destroy
    # head :no_content
  end


  private
  def review_params
    # params.require(:review).permit(:review, :rating, :airport_id, :user_id)
    params.permit(:review, :rating)
  end


  def render_not_found_response
    render json: { error: "Review not found" }, status: :not_found
  end


  def render_unprocessable_entity_response(invalid)
    render json: { error: invalid.record.full_messages }, status: :unprocessable_entity
  end

  def serialize_review reviews
    reviews.map do |review|
      {
        id: review.id,
        review: review.review,
        rating: review.rating,
        user_name: review.user.username,
        airport_name: review.airport.name
      }
      
    end
  end

end
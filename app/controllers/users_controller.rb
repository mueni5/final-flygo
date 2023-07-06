class UsersController < ApplicationController
  before_action :authorize, only: [:show]

  def index
    users = User.all
    render json: users, except: [:created_at, :updated_at]
  end


  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end


  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id]= user.id
      render json: {success: "Account succesfully created"}, status: :created
    else
      render json: {error: user.errors.full_messages}, status: :unprocessable_entity
    end
  end


  def authorize
    return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end

  
  def user_params
    params.permit(:first_name, :last_name, :username, :email, :password )
  end
end












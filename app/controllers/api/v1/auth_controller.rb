class Api::V1::AuthController < ActionController::API
  before_action :authorize_request, except: :login

  def signup
    if (user_params[:password] == user_params[:password_confirmation])
      @user = User.signup(user_params)
      render json: { user: @user.email }, status: :created
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by_email(params[:email])
    p "found user: #{@user}"
    p @user
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"), email: @user.email, id: @user.id }, status: :ok
    else
      render json: { error: @user&.authenticate(params[:password]) }, status: :unauthorized
    end
  end

  def logout

  end

  private
  def user_params
    params.permit(:email, :password, :password_confirmation)
  end

end
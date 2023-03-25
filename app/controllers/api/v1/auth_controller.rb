class Api::V1::AuthController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorize_request, except: [:signup, :login]

  # PUT signup
  def signup
    @user = User.new({email: params[:email], password: params[:password]})

    if (user_params[:password] == user_params[:password_confirmation])
      if @user.save
        @user = User.signup(user_params)
        render json: { message: "User #{@user.email} created!" }, status: :created
      else
        render json: { errors: @user.errors }, status: :unprocessable_entity
      end
    else
      render json: { errors: {passwords: "do not match"}}, status: :unprocessable_entity
    end
  end

  # PUT login
  def login
    @user = User.find_by_email(params[:email])
    if (params[:email] == "" || params[:password] == "")
      return render json: { error: "Email and password can't be blank." }, status: :unauthorized
    end

    if (!@user)
      return render json: { error: "User #{params[:email]} not found." }, status: :unauthorized
    end

    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      @user.update({password: params[:password], token: token})
      time = Time.now + 24.hours.to_i
      render json: { error: @user.errors, token: token, exp: time.strftime("%m-%d-%Y %H:%M"), email: @user.email, id: @user.id }, status: :ok
    else
      render json: { error: "Incorrect password. Please try again." }, status: :unauthorized
    end
  end

  # PUT logout
  def logout
    @user = User.find_by_email(params[:email])
    if (!@user)
      return render json: { error: "Invalid action." }, status: :bad_request
    end

    if @user.update( token: nil)
      render json: { message: "Logout successful." }, status: :ok
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.permit(:email, :password, :password_confirmation, :token)
  end

end
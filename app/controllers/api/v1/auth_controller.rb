class Api::V1::AuthController < ActionController::API
  def signup
    if (user_params[:password] == user_params[:password_confirmation])
      @user = User.signup(user_params)
      render json: { user: @user.email }, status: :created
    else
      render json: {errors: @user }, status: :unprocessable_entity
    end
  end

  def login

  end

  def logout

  end

  private
  def user_params
    params.permit(:email, :password, :password_confirmation)
  end

end
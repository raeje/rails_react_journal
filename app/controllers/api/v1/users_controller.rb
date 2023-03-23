class  Api::V1::UsersController < ActionController::API

  def create
    @user = User.new({email: params[:email], password: params[:password]})

    if (user_params[:password] == user_params[:password_confirmation])
      if @user.save
        #render json: { message: "User created successfully." }, status: :created
        render json: @user, status: :created
      else
        render json: { errors: @user.errors }, status: :unprocessable_entity
      end
    else
      render json: { errors: "Passwords do not match." }
    end
  end

  private
  def user_params
    params.permit(:email, :password, :password_confirmation)
  end
end

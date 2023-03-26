class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  def not_found
    render json: { error: 'not_found' }
  end

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header

    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: [e.message, "active record"] }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: [e, e.message, "jwt"] }, status: :unauthorized
    end
  end

  private
  def user_params
    params.permit(:email, :password, :password_confirmation)
  end
end

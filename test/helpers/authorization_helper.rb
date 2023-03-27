module AuthorizationHelper
  def signup(user)
    put '/api/v1/signup',
      params: { email: user[:email],
                password: user[:password],
                password_confirmation: user[:password] },
      as: :json
  end

  def auth_token_for_user(user)
    put '/api/v1/login',
      params: { email: user[:email],
                password: user[:password] },
      as: :json

    p "==============================="
    p response.to_s
    p response.parsed_body['token']
    p "==============================="
    response.parsed_body['token']
  end
end
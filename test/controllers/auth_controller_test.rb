require "test_helper"
require_relative '../helpers/authorization_helper'

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  include AuthorizationHelper

  test 'signup and login user' do
    user = { email: "jose@rizal.com", password: "unique_password83" }
    signup(user)
    assert_response :success

    (user)
    assert_response :success
  end
end

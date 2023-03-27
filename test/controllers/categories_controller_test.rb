require "test_helper"
require_relative '../helpers/authorization_helper'

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  include AuthorizationHelper

  def setup
    test_user = { email: "juan@luna.com", password: "juanluna" }
    signup(test_user)
    @auth_token = auth_token_for_user(test_user)
  end


  test "should get index" do
    get api_v1_categories_url, headers: { Authorization: @auth_token }
    assert_response :success
  end


  test "should get new" do
    get categories_new_url, headers: { Authorization: @auth_token }
    assert_response :success
  end

=begin
  test "should get create" do
    post categories_url, params: { category: { name: @category.name, description: @category.description } }
    assert_response :redirect
  end

  test "should go to new category form and create category" do
    get categories_new_url
    assert_response :success
    assert_difference "Category.count", 1 do
      post categories_url, params: { category: { name: @category.name, description: @category.description } }
      assert_response :redirect
    end
    follow_redirect!
    assert_response :success
  end

  test "should get show" do
    get category_url(@category)
    assert_response :success
  end

  test "should get delete" do
    delete category_path(@category)
    assert_response :redirect
    follow_redirect!
    assert_response :success
  end
=end
end
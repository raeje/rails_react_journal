class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    p @categories
    render json: { categories: @categories}
  end
end
class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    p @categories
    render json: { categories: @categories}
  end

  def show
    @category = Category.find(params[:id])
    @tasks = Task.where(category_id: params[:id])
    render json: { categories: [@category] }
  end
end
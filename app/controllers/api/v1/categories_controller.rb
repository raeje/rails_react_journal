class Api::V1::CategoriesController < ApplicationController
  protect_from_forgery with: :null_session
  #before_action :set_category
  before_action :authorize_request

  # GET /categories
  def index
    #@categories = Category.all.order(created_at: :desc)
    #p "================================================="
    #p "  index"
    #p params[:user_id]
    #p "================================================="
    @categories = Category.where(user_id: params[:user_id]).order(created_at: :desc)
    render json: { categories: @categories }
  end

  def create
    p "================================================="
    p "create category"
    p params
    p "================================================="
    #@category = Category.new(user_id: params[:user_id], name: params[:name], description: params[:description])
    @category = Category.new(category_params)

    if @category.save
      render json: { message: "Category '#{@category.name}' created!" }, status: :created
    else
      render json: { errors: @category.errors }, status: :unprocessable_entity
    end
  end

  # GET /categories/:id
  def show
    @category = Category.find(params[:id])
    @tasks = Task.where(category_id: params[:id])
    render json: { categories: [@category] }
  end

  def update
    @category = Category.find(params[:id])

    if @category.update(category_params)
      render json: { message: "Category '#{@category.name}' updated!" }, status: :ok
    else
      render json: { errors: @category.errors }, status: :unprocessable_entity
    end
  end

  private
  def set_category
    @category = Category.find(params[:id])
  end

  def create_params
    params.require(:category).permit(:user_id, :name, :description).permitted?
  end

  def category_params
    params.permit(:user_id, :name, :description)
  end
end
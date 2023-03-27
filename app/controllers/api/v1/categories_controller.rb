class Api::V1::CategoriesController < ApplicationController
  protect_from_forgery with: :null_session
  #before_action :set_category
  before_action :authorize_request

  # GET /categories
  def index
    @categories = Category.where(user_id: @current_user.id).order(created_at: :desc)
    render json: { categories: @categories }
  end

  # PUT /categories
  def create
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

  # PATCH /categories/:id
  def update
    @category = Category.find(params[:id])

    if @category.update(category_params)
      render json: { message: "Category '#{@category.name}' updated!" }, status: :ok
    else
      render json: { errors: @category.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /categories/:id
  def delete
    @category = Category.find(params[:id])
    @category.destroy
    render json: { message: "Category '#{@category.name}' deleted!"}, status: :ok
  end

  private
  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.permit(:user_id, :name, :description)
  end
end
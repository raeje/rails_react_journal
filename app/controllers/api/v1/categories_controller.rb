class Api::V1::CategoriesController < ActionController::API
  #before_action :set_category

  def index
    @categories = Category.all
    p @categories
    render json: { categories: @categories }
  end

  def show
    @category = Category.find(params[:id])
    @tasks = Task.where(category_id: params[:id])
    render json: { categories: [@category] }
  end

  def update
    @category = Category.find(params[:id])
    p "update params #{category_params}"
    if @category.update(category_params)
      render json: { categories: @category }, status: :ok
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  private
  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name, :description)
  end
end
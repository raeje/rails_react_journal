class Api::V1::TasksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @tasks = Task.where(category_id: params[:id])
    render json: { tasks: @tasks }
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render json: { tasks: @task }, status: :created
    else
      render json: { errors: @task.errors }, status: :unprocessable_entity
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update
      render json: { tasks: @task }, status: :ok
    else
      render json: { errors: @task.errors }, status: :ok
    end
  end

  def delete
    @task = Task.find(params[:id])
    render json: { head: :no_content }
  end

  private
  def task_params
    params.require(:task).permit(:category_id, :name, :description)
  end
end

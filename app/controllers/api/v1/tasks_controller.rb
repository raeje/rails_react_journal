class Api::V1::TasksController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorize_request

  def index
    @tasks = Task.where(category_id: params[:id])
    render json: { tasks: @tasks }
  end

  # PUT /categories/:id/tasks
  def create
    @task = Task.new(task_params)

    if @task.save
      render json: { message: "Task '#{@task.name}' created!" }, status: :created
    else
      render json: { errors: @task.errors }, status: :unprocessable_entity
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update(task_params)
      render json: { message: "Task '#{@task.name}' updated!" }, status: :ok
    else
      render json: { errors: @task.errors }, status: :unprocessable_entity
    end
  end

  def delete
    @task = Task.find(params[:id])
    @task.destroy
    render json: { message: "Task '#{@task.name}' deleted!"}, status: :ok
  end

  private
  def task_params
    params.require(:task).permit(:category_id, :name, :description, :due_date)
  end
end

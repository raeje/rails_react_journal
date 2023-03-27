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

  def due_today
    p "===================================================="
    p params
    @categories = Category.where(user_id: params[:user_id])

    @due_tasks = []
    for category in @categories do
      @tasks = category.tasks

      for task in @tasks do
        if !task.due_date.nil?
          p "===================================================="
          p task.due_date.today?
          p task.due_date.to_s.split(" ")[0] == Date.today.to_s
          p Date.today.to_s
          p "#{task.name} #{task.due_date} #{task.due_date.today?}"
          p category.name
          p "===================================================="
          @due_tasks.push([task, category.name]) if task.due_date.to_s.split(" ")[0] == Date.today.to_s
        end
      end
    end

    render json: { tasks: @due_tasks }
  end

  private
  def task_params
    params.permit(:category_id, :name, :description, :due_date, :status)
  end
end

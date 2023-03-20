class Api::V1::TasksController < ApplicationController

  def index
    @tasks = Task.where(category_id: params[:id])
    render json: { tasks: @tasks }
  end
end

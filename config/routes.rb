Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "categories" => "categories#index"
      get "categories/:id" => "categories#show"

      get "categories/:id/tasks" => "tasks#index"
    end
  end

  root "homepage#index"
  get "/*path" => 'homepage#index'
end
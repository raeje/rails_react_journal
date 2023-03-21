Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "categories" => "categories#index"
      get "categories/:id" => "categories#show"
      patch "categories/:id" => "categories#update"
      put "categories" => "categories#create"

      #get "categories/:id/tasks" => "tasks#index"
      scope :"categories/:id" do
        get "tasks" => "tasks#index"
      end
    end
  end

  root "homepage#index"
  get "/*path" => 'homepage#index'
end
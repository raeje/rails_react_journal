Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Custom routes
      get "tasks/due_today" => "tasks#due_today"
      get "tasks/all" => "tasks#all"

      # Auth routes
      put "signup" => "auth#signup"
      put "login" => "auth#login"
      put "logout" => "auth#logout"

      # User routes
      #put "signup" => "users#create"

      # Category routes

      get "categories" => "categories#index"
      get "categories/:id" => "categories#show"
      patch "categories/:id" => "categories#update"
      put "categories" => "categories#create"
      delete "categories/:id" => "categories#delete"


      # Task routes
      scope :"categories/:id" do
        get "tasks" => "tasks#index"
        put "tasks" => "tasks#create"
        patch "tasks/:id" => "tasks#update"
        delete "tasks/:id" => "tasks#delete"
      end

    end
  end

  root "homepage#index"
  get "/*path" => 'homepage#index'
end
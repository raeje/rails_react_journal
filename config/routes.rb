Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Category routes
      get "categories" => "categories#index"
      get "categories/:id" => "categories#show"
      patch "categories/:id" => "categories#update"
      put "categories" => "categories#create"

      # Task routes
      scope :"categories/:id" do
        get "tasks" => "tasks#index"
        put "tasks" => "tasks#create"
        patch "tasks/:id" => "tasks#update"
        delete "tasks/:id" => "tasks#delete"
      end

      # Auth routes
      #put "signup" => "auth#signup"
      put "login" => "auth#login"
      delete "logout" => "auth#logout"

      # User routes
      put "signup" => "users#create"
    end
  end

  root "homepage#index"
  get "/*path" => 'homepage#index'
end
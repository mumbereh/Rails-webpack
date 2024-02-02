Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :greetings, only: :index
    end
  end

  # Add a catch-all route to render your React application
  get '*path', to: 'root#index', via: :all
end

Rails.application.routes.draw do
  resources :destinations
  resources :users

  resources :users do
    resources :trips
  end

  post '/login', to: 'auth#create'
  
end

Rails.application.routes.draw do
  resources :mains, only: [:index]
  resources :contact_us, only: [:create]
  resources :email_lists, only: [:create]

  root 'mains#index'
end

Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :mains, only: [:index]
  resources :contact_us, only: [:create]
  resources :email_lists, only: [:create]

  root 'mains#index'
end

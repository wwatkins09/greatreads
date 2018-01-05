Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :show]
    resources :bookshelves, except: [:new, :edit]
    resources :books, only: [:index, :show]
    resource :session, only: [:new, :create, :destroy]
  end

  root to: 'static_pages#root'

end

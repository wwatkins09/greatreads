Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :show]
    resources :bookshelves, except: [:new, :edit]
    resources :books, only: [:index, :show]
    resources :bookshelf_ownerships, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, except: [:new, :edit]
    resource :session, only: [:new, :create, :destroy]
  end

  delete "api/bookshelves/:id/:book_id", to: "api/bookshelves#delete_ownership"

  root to: 'static_pages#root'

end

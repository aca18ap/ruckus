Rails.application.routes.draw do
  class OnlyAjaxRequest
    def matches?(request)
      request.xhr?
    end
  end

  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      delete 'users/:id', to: 'users#destroy'

      get 'products/index'
      post 'products/create'
      patch 'products/:id', to: 'products#update'
      delete 'products/:id', to: 'products#destroy'
    end
  end

  get 'subscribers/index'
  get 'products', to: 'products#index'
  resources :subscribers
  devise_for :users
  resources :users

  get 'admin', to: 'admin#index'
  get 'products', to: 'products#index'

  root 'welcome#landing'
  get 'about', to: 'welcome#about'
  get 'faq', to: 'welcome#faq'
  get 'contacts', to: 'welcome#contacts'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

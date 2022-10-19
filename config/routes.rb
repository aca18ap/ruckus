Rails.application.routes.draw do
  class OnlyAjaxRequest
    def matches?(request)
      request.xhr?
    end
 end
  get 'subscribers/index'
  resources :products
  resources :subscribers
  devise_for :users
  resources :users

  root 'welcome#index'
  get 'about', to: 'welcome#about'
  get 'faq', to: 'welcome#faq'
  get 'contacts', to: 'welcome#contacts'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  class OnlyAjaxRequest
    def matches?(request)
      request.xhr?
    end
 end
  post '/subscribers', to: 'subscribers#create'
  get '/subscribers', to: 'subscribers#index'


  root 'welcome#landing'
  get 'about', to: 'welcome#about'
  get 'faq', to: 'welcome#faq'
  get 'contacts', to: 'welcome#contacts'
  get '*path', to: 'welcome#landing'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

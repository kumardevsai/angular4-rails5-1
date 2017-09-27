Rails.application.routes.draw do
  get "post", to: "post#index", defaults: {format: :json}
  get "/", to: "frontend#index"
  get '*path', to: 'frontend#index'
end

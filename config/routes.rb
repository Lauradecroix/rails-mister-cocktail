Rails.application.routes.draw do
  resources :cocktails do
    resources :doses, only: [:new, :create, :show]
end
  resources :doses, only: [:destroy]
end

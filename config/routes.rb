Truckspy::Application.routes.draw do
  root "pages#root"

  namespace :api, defaults: { format: 'json' } do
    resources :trucks, only: [:index]
  end
end

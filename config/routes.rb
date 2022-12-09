Rails.application.routes.draw do
  resources :users, only: [:create, :show, :index]
  resources :stores, only: [:create, :index,:show, :update, :destroy]
  resources :requested_items
  resources :items

 # merchant/user sign in routes  
  post "/signup",  to: "users#create"
  post '/auth/login', to: 'sessions#user_login'
  delete '/auth/logout', to: 'sessions#user_logout'
  # clerk sign in routes
  resources :clerks, only: [:index, :show, :create, :update, :destroy ]
  post '/clerk/login', to: 'sessions#clerk_login'
  delete 'clerk/logout', to: 'sessions#clerk_logout'
   post'/stores', to: "stores#create"
   get '/stores', to:"stores#index"
 # admin sign in routes  
  post"/admins",to: "admins#create"
  get"/stores/:id/items", to: "stores#store_items"
  post"/items", to: "items#create"
  delete"/items/:id", to: "items#destroy"
  patch '/items/:id',to:"items#update"


  resources :admins
 # post'/alog-in',to: 'sessions#admin_login'
  post '/admin/login', to: 'sessions#admin_login'
  delete 'admin/logout', to: 'sessions#admin_logout'
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

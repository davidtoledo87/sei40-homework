
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# Initialise the stick library just once
#and reuse it every time we look up


#1. show a blank form for typing stocks into
get '/'do
  erb :form
end

#2 form submits to here, does the lookup, print results
get "/movie_finder" do

  movies = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{params[:movie_name]}"


p params[:movie_name]

p movies['results']

@total_results = movies['total_results']
@total_pages = movies['total_pages']
@c = movies['results']



  erb :movie_info
end

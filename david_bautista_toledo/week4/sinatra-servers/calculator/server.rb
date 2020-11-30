require 'sinatra'
require 'sinatra/reloader'

get '/' do
  # "Hello from the calculator"
  erb :intro
end

#1 Show the blank form

get '/calc/form' do
  erb:form
end

#2 Define a route that the form is submitted to, which processes the form data, and print a results page

get '/calc/result' do
  @a = params[:num1].to_i
  @c = params[:op]
  @b = params[:num2].to_i

  if @c=="+"
    @t=@a+@b
  elsif @c=="*"
    @t=@a*@b
  end
  erb :calc
end



get '/calc/:num1/:op/:num2' do
  @a=params[:num1].to_i
  @b=params[:num2].to_i
  @c=params[:op]
  if @c=="+"
    @t=@a+@b
  elsif @c=="*"
    @t=@a*@b
  end
  erb :calc
end

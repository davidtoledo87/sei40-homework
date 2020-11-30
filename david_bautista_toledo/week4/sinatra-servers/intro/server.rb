# Tell ruby that we want to use oned of the pre-installed gem libraries in this particular pogram ie: <script src = "js/something.js">

require 'sinatra'

#reload server automatically on changes
require 'sinatra/reloader'

#Define some routes that our webserver will respond to. ie; when this server sees a particular request, such as for the root page of the site "/", how should it respond?

# We will respond, initially, by sending strings of text directly back to the browser

get '/'do
  #here is where we respond to request for "/"
  puts "Got a request for / !!!"

  #what we send to the browser is whatever the last line of our "get" block evaluates to: here, a string
  "Hello from Sinatra"
end # get '/'


get '/luckynumber' do
  @num = Random.rand 100

  # "<html><head></head><body><h1>here is your lucky number yoy yoy:#{num} <h1></body></html>"

#Go into the views folder (default template location), and find the file called 'lucky.erb' Return the contents of that file

  erb :lucky
end


# get '/hello/zara' do
#   'Hi there Zara'
# end
#
# get '/hello/kyle' do
#   'Hi there Kyle'
# end

#respond to any request for "/hello/anything"
get '/hello/:student_name' do
  "Hello there, #{params[:student_name]}"
end

get '/hello/:name/:mood' do
  # puts "PARAMS:",params
  # "hello, #{params[:name]}, I hope you are #{params[:mood]} "
  @student_name= params[:name]
  @student_name.upcase!
  erb :mood_ring
end

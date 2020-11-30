
require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'


def db_query(sql)

  puts '===================================='
  puts sql
  puts '========================================'

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  results = db.execute sql
  db.close # clean up after ourselves

  results
end

# establish a connection to the database, by using Ruby gem, and telling it the name of our DB file

# db = SQLite3::Database.new 'database.db'
# db.results_as_hash = true
#
# @pets = db.execute 'SELECT * FROM pets;'
#
# db.close # clean up after ourselves


# to debug
# require 'pry'; binding.pry


# ROOT ROUTE:

get '/'do
  erb :home
end


# CRUD ROUTES FOR OUR PETS DB


# CREATE  ============================================

# 1. Show blank form for entering new pet details

get '/pets/new' do
  erb :new
end # get/pets/new (blank form)





# 2. Form submits to here, (this is the form action URL) where we add the details to the database, and then redirect to another page such as the index


post '/pets' do
  params.to_s

  # db = SQLite3::Database.new 'database.db'
  # db.results_as_hash = true

  insert_sql = "INSERT INTO pets (name, species, description, roundness, alive, age, image_url)
  VALUES (
    '#{params[:name]}',
    '#{params[:species]}',
    '#{params[:description]}',
    #{params[:roundness]},
    #{params[:alive]},
    #{params[:age]},
    '#{params[:image_url]}'
  );
"

  db_query insert_sql

  # @pets = db.execute sql

  # db.close # clean up after ourselves

  #after processing this form submit and inserting the details into the DB, we dont want this rout to show its own template.
  redirect '/pets'
end  #post/pets (form submit & insert)




#READ ====================================================
#1 Index - list all the rows in the table
get '/pets' do

  # db = SQLite3::Database.new 'database.db'
  # db.results_as_hash = true
  #
  # @pets = db.execute 'SELECT * FROM pets;'
  #
  # db.close # clean up after ourselves

  # p pets
  @pets = db_query 'SELECT * FROM pets;'

  erb :index
end # Get / pets index

#2 Details (show) - show detailed info for a single row

get '/pets/:id'do

# db = SQLite3::Database.new 'database.db'
# db.results_as_hash = true
# @pet = db.execute "SELECT * FROM pets WHERE id = #{params[:id]};"
# @pet = @pet.first #remove the hash from the array, easier to work with
#
# db.close # clean up after ourselves

@pet = db_query "SELECT * FROM pets WHERE id = #{params[:id]};"
@pet = @pet.first
  params.to_s

  erb :show
end



#UPDATE ====================================================

# 1.show a form whose fields are pre-populated from the item's row in the DB table

get '/pets/:id/edit' do

  #we ned to query the DB to get the item data so we can prepopulate the form

  @pet = db_query "SELECT * FROM pets WHERE id = #{params[:id]};"
  @pet = @pet.first

  erb :edit
end


#2. form submits to here, update the DB and redirect to the show page

post '/pets/:id' do
  # params.to_s
  db_query "UPDATE pets SET
  name ='#{params[:name]}',
  species ='#{params[:species]}',
  description = '#{params[:description]}',
  roundness =#{params[:roundness]},
  alive =#{params[:alive]},
  age =#{params[:age]},
  image_url='#{params[:image_url]}'
  WHERE id = #{params[:id]};
"

redirect "/pets/#{params[:id]}"
end

#DELETE =====================================================

  get '/pets/:id/delete' do
    db_query "DELETE FROM pets WHERE id = #{params[:id]}"
      redirect '/pets' #back to index
  end

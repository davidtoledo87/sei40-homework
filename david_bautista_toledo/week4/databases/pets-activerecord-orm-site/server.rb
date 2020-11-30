
require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

require 'active_record'


# set up the active record connection to our DB

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',#what format of DB is this
  database: 'database.db' #where is the actual data
)

#Show us all the SQL you are writing for us
ActiveRecord::Base.logger = Logger.new(STDOUT)

#Tell AR how to talk to our pets table. To do this we make a class with the capitalised singular name of our table, and that class has to inherit from AR

class Pet < ActiveRecord::Base
  belongs_to :owner #must be singular (use the owner_id column to get to the owner of this pet)
end

class Owner < ActiveRecord::Base
  has_many :pets #must be plural (go into the pets table and use the owner_id column to find out which pets you own)
end


# require 'pry'
#
# binding.pry




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
@owners = Owner.all

  erb :new
end # get/pets/new (blank form)





# 2. Form submits to here, (this is the form action URL) where we add the details to the database, and then redirect to another page such as the index


post '/pets' do
  params.to_s

  # db = SQLite3::Database.new 'database.db'
  # db.results_as_hash = true

#   insert_sql = "INSERT INTO pets (name, species, description, roundness, alive, age, image_url)
#   VALUES (
#     '#{params[:name]}',
#     '#{params[:species]}',
#     '#{params[:description]}',
#     #{params[:roundness]},
#     #{params[:alive]},
#     #{params[:age]},
#     '#{params[:image_url]}'
#   );
# "
#
#   db_query insert_sql

  # @pets = db.execute sql

  # db.close # clean up after ourselves
  @owners = Owner.all

  Pet.create(
    name: params[:name],
    species: params[:species],
    description: params[:description],
    roundness: params[:roundness],
    alive: params[:alive],
    age: params[:age],
    image_url: params[:image_url]
  )


  #after processing this form submit and inserting the details into the DB, we dont want this rout to show its own template.
  redirect '/pets'
end  #post/pets (form submit & insert)




#READ ====================================================
#1 Index - list all the rows in the table
get '/pets' do

  @pets = Pet.all

  # db = SQLite3::Database.new 'database.db'
  # db.results_as_hash = true
  #
  # @pets = db.execute 'SELECT * FROM pets;'
  #
  # db.close # clean up after ourselves

  # # p pets
  # @pets = db_query 'SELECT * FROM pets;'

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

# @pet = db_query "SELECT * FROM pets WHERE id = #{params[:id]};"
# @pet = @pet.first
  params.to_s
@pet = Pet.find params[:id]
  erb :show
end



#UPDATE ====================================================

# 1.show a form whose fields are pre-populated from the item's row in the DB table

get '/pets/:id/edit' do

  #we ned to query the DB to get the item data so we can prepopulate the form

  # @pet = db_query "SELECT * FROM pets WHERE id = #{params[:id]};"
  # @pet = @pet.first
  @pet = Pet.find params[:id]
  erb :edit
end


#2. form submits to here, update the DB and redirect to the show page

post '/pets/:id' do
  # params.to_s
#   db_query "UPDATE pets SET
#   name ='#{params[:name]}',
#   species ='#{params[:species]}',
#   description = '#{params[:description]}',
#   roundness =#{params[:roundness]},
#   alive =#{params[:alive]},
#   age =#{params[:age]},
#   image_url='#{params[:image_url]}'
#   WHERE id = #{params[:id]};
# "

pet = Pet.find params[:id]
pet.update(
  name: params[:name],
  species: params[:species],
  description: params[:description],
  roundness: params[:roundness],
  alive: params[:alive],
  age: params[:age],
  image_url: params[:image_url]
)

redirect "/pets/#{params[:id]}"
end

#DELETE =====================================================

  get '/pets/:id/delete' do
    # db_query "DELETE FROM pets WHERE id = #{params[:id]}"
      Pet.destroy params[:id]

      redirect '/pets' #back to index
  end



################################################################

# CRUD routes for Owners


#Create
# form details
# 1. Show blank form for entering new pet details
 get "/owners/new" do
   erb :new_owners
 end

# form goes here
# 2. Form submits to here, (this is the form action URL) where we add the details to the database, and then redirect to another page such as the index


 post '/owners' do
   params.to_s

   Owner.create(
   name: params[:name],
   email: params[:email],
 )
 redirect '/owners'
end
#Read
#1. index of owners

get '/owners' do

  @owners = Owner.all
  #in Rails, the convention will be nested folders: views/owners/index.erb vs views/pets/index.erb

  erb :owners_index
end


#Update
#2. show page (details) for one owner
get '/owners/:id' do
  @owner= Owner.find params[:id]
  erb :owners_show #Rails uses nested folders
end

#Delete


get '/owners/:id/delete' do
  Owners.destroy params[:id]
  redirect '/owners'
end

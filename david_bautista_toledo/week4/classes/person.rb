require 'pry'

#classes are always capitalised camel case in ruby

class Person


#shortcut to get a setter and a getter for an instance variable (attribute)

  attr_accessor :age, :height

  #attr_accessor :age, :height,


  #this is a class method - you call it directly on the class itself, not an object instance of the class
  def self.describe
    puts "this class for create people"

  end

  #create a method which will expose the hidden instance variable @name to any code outside this class which is working with an instance of this class (an object made with Person.new)
  # this gets the value for us, its a Getter

  def name
    @name # implicit return
  end



  #create a setter: a method that let us change whats in this instance variable, from outside this class(ie. when working with an object)

  def name=(val)
    @name = val
  end


  #This is called the 'constructor' method. If we define it in our class this is the methos that actually gets called when you run "person.new"
  def initialize (name,age)
    puts "Making a new Person called #{name}"

    #save the arguments into and instance variable so we can use this data in all the methods of this class - it becomes global within the object (but each new object will have a unique version of this variable)
    @name = name #save the arguments into an instance variable
    @age = age
  end # initialize

  def hello
    puts "Hello there! My name is #{@name} and I am #{@age}"
  end #hello()

  def goodbye
    puts "It was great to meet you! Please follow me"
  end
end #Person


#Inheritance!
#lets make a new, more specific type of person called a comedian
#they will inherit most of their data and behaviour (methods) from the "parent" class, person
#But they might add some specific behaviour of their own


#Classes are closed for modification
#but open for extension .... via inheritance


class Comedian < Person

  def initialize (name)
    super name, 20  #hardcore the age argument
    puts "Making a comedian"
  end

  def tell_joke
    print "Whats brown and sticky?"
    5.times do
      print '.'
      sleep 0.2
    end
    print "a stick!"
  end # tell_joke
  #Redifine (override) a method that this class inherited from its parent class, Person
  def hello
    #Run the versiion of 'hello' that is defined in the parent class
    super
    puts "hello, love my shows"

  end

end #comedian






binding.pry

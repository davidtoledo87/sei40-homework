# Title: Guess The Number
# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

# print "guess a number mate:"
# number = gets.to_i
# p number


# tell this program that you want to use a library(gem)
require 'colorize'

secret_number= Random.rand(10)
# p secret_number

# if number == secret_number
#   p "good guess mate"
# else
#   p "not a good guess. Try again:"
#   number = gets.to_i
# end
number = -1

until number == secret_number
  print "enter number".red
  number= gets.to_i

#
# while number != secret_number
if number != secret_number
  p "bad luck"
  print "guess again:"
  # number = gets.to_i
end

puts "Congratulations"
end

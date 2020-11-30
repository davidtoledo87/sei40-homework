
# 1. Drinking age?
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.



puts "what is your age?"
# use gets to capture the user input and save into a variable

age = gets.to_i


if age>18
  p "welcome"
else
  p "not welcome"
end

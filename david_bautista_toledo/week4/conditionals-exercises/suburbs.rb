# 3. Sydney Suburbs
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).


print "what is your suburb?"
suburb = gets.chomp.downcase

# case suburb
# when "bondi" then puts "Nice"
# when "manly" then puts "surfs up!"
# when "newtown" then puts "Cool!"
# else              puts "good bro"
# end

output = case suburb
when "bondi" then  "Nice"
when "manly" then "surfs up!"
when "newtown" then "Cool!"
else              "good bro"
end

puts output

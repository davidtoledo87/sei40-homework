# 2. Air Conditioning
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."



puts "what is the current temperature?"
temp = gets.chomp

temp_num = temp.to_i



puts "Is the A/C functional?"
works = gets.chomp



puts "What temperature would you like to set"
desired_temp= gets.chomp

desired_temp_num = temp.to_i

p temp_num, works, desired_temp_num

if works == "yes" #&& temp_num>desired_temp_num
    p "turn on A/C please"
  else
    p "AC not working"
  end

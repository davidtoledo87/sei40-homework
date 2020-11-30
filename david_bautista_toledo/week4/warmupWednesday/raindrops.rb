# Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:

n=rand(1000)
p n

case
when n%3==0 && n%5==0 && n%7==0
  puts "plingPlangPlong"
when n%3==0 && n%5==0
  puts "plingPlang"
when n%3==0 && n%7==0
  puts "plingPlong"
when n%3==0
  puts "pling"
when n%5==0
  puts "plang"
when n%7==0
  puts "plong"
else
  puts n
end


def raindrops(number)

  output= ''
  if number %3 ==0
    output += 'Pling'
  end
  output += 'Plang' if number % 5 == 0
  output += "Plong" if number % 7 == 0

  # if output.empty?
  #   return number
  # end

  return number if output.empty?

  output

end

puts "input 6: #{raindrops(6)}"
puts "input 10: #{raindrops(10)}"



# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.
# - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# ### Examples
# - 28 has 7 as a factor.
#  * In raindrop-speak, this would be a simple "Plong".
# - 1755 has 3 and 5 as factors.
#  * In raindrop-speak, this would be a "PlingPlang".
# - 34 has neither 3, 5 nor 7 as a factor.
#  * Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
# New file setup today. You will need to create a ```raindrops.rb``` file that can be executable in your terminal.

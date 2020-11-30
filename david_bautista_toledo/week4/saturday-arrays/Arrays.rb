# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday


week =[
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

# print "days of the week are: #{week}"
s=week.pop
# p s
week.unshift(s)
# puts "exercise 1 is : #{week}"
b= week[1..5]
# p b
c = week[6],week[0]
# p c
d = [b,c]
p "array of arrays #{d}"
e=d.pop(1)
puts "new array #{d}"

# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.
# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
# Your choice...
#
# 5. Sort the remaining days alphabetically

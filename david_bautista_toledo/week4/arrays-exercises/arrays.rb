#
require 'pry'

# . Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday


days_of_the_week = ["Mon","Tue","Wed", "Thu","Fri","Sat", "Sun"]
p days_of_the_week
a=days_of_the_week.pop
p a
days_of_the_week.unshift(a)
p days_of_the_week

binding.pry # this causes pry to open at particular line, pausing your program

days_of_the_week = ["Mon","Tue","Wed", "Thu","Fri","Sat", "Sun"]
week_parts = [days_of_the_week[0..4],days_of_the_week[5..6]]
p week_parts

# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.
# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
# Your choice...
#
# 5. Sort the remaining days alphabetically

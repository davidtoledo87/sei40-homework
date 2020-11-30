puts "Trip planner - MTA!"

p "single Trip"


#
# $mta = {
#   n:["times square", "34th", "28th", "union square", "8th"],
#   l:["8th","6th", "union square", "3rd", "1st" ],
#   6=>["grand central","33rd", "28th", "23rd", "union square", "astor place"]
# }
#
# p $mta[:n]
#
# lane = :n
# start_station= "times square"
# end_station= "8th"
#
# def index_start (lane,start_station)
# a=$mta[lane].find_index(start_station)
# # p a
# p "the start index is #{a}"
# end
#
# def index_end (lane,end_station)
# b=$mta[lane].find_index(end_station)
# p "the end index is #{b}"
# end
#
# index_start(lane,start_station)
#
# index_end(lane,end_station)
#
# def calculate_stations(lane,start_station,end_station)
#   total=($mta[lane].find_index(start_station)-$mta[lane].find_index(end_station)).abs
#   p "total of stations is #{total}"
# end
#
# # calculate_stations(lane,start_station,end_station)
#
# def plan_trip (lane, start_station, end_station)
#   p "hola"
# end
#
#
#
# plan_trip("n", "times square", "8th")
#
# # def trip (lane, start_station, end_station)
# # puts $mta[lane][a..b]
# # end
# #
# # trip()
# $end=5
# $start=4
#
# def stations_in_between()
#   if ($end>$start)
#     p "end is greater"
#   else
#     p "start is greater"
#   end
#
#   end
# stations_in_between

# p "Whats the start line? (:n/:l/6)"
#   start_lane= gets.chomp
#
# p "Whats the start station?"
#   start_station= gets.chomp
#
# p start_lane.to_sym,start_station

p "Whats the start line? (n/l/6)"
  start_lane= gets.chomp.to_sym

p "Whats the start station?"
  start_station= gets.chomp

# p "Whats the end line?(n/l/6)"
#   end_lane= gets.chomp.to_sym
#
# p "Whats the end station?"
#   end_station= gets.chomp

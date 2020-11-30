
p "Whats the start line? (n/l/6)"
  start_lane= gets.chomp.to_sym

p "Whats the start station?"
  start_station= gets.chomp

p "Whats the end line?(n/l/6)"
  end_lane= gets.chomp.to_sym

p "Whats the end station?"
  end_station= gets.chomp

  p(start_lane, start_station, end_lane, end_station)




def plan_trip (start_lane, start_station, end_lane, end_station)
  p "========================================================="

  $mta = {
    n:["times square", "34th", "28th", "union square", "8th"],
    l:["8th","6th", "union square", "3rd", "1st" ],
    :"6" => ["grand central","33rd", "28th", "23rd", "union square", "astor place"]
  }

  if start_lane == end_lane

    p "single Trip"

    $start=$mta[start_lane].index(start_station)
    $end=$mta[start_lane].index(end_station)

    def stations_in_between (start_lane)
      if ($end>$start)
        puts "then the stations to follow are:"
        puts $mta[start_lane][$start+1...$end]
      else
        puts "then the stations to follow are:"
        puts $mta[start_lane][$end+1...$start].reverse
      end #end of the if
    end # end of the function

    def calculate_stations
      total=($start-$end).abs
      p "total of stations of your trip is #{total}"
    end

    puts "first you have to board at #{start_station}"
    stations_in_between(start_lane)
    puts "and you have reached #{end_station}"
    calculate_stations

  else
    p "Multi-trip"
    $start=$mta[start_lane].index(start_station)
    $start_connection =$mta[start_lane].index("union square")
    $end_connection =$mta[end_lane].index("union square")
    $end=$mta[end_lane].index(end_station)

    def stations_in_between1 (start_lane)
      if ($start_connection>$start)
        puts "then the stations to follow are:"
        puts $mta[start_lane][$start+1...$start_connection]
      else
        puts "then the stations to follow are:"
        puts $mta[start_lane][$start_connection+1...$start].reverse
      end #end of the if
    end # end of the function

    def stations_in_between2 (end_lane)
      if ($end_connection>$end)
        puts "then the stations to follow are:"
        puts $mta[end_lane][$end+1...$end_connection]
      else
        puts "then the stations to follow are:"
        puts $mta[end_lane][$end_connection+1...$end].reverse
      end #end of the if
    end # end of

    def calculate_stations
      total=($start-$start_connection).abs+($end-$end_connection).abs
      p "total of stations of your trip is #{total}"
    end

    puts "first you have to board at #{start_station}"
    stations_in_between1(start_lane)
    puts "transboard at Union Square"
    stations_in_between2(end_lane)
    puts "and you have reached #{end_station}"
    calculate_stations

  end #end of the if single/multi trip

end #end of the main function


plan_trip(start_lane, start_station, end_lane, end_station)

# plan_trip(6, "33rd", :l, "1st")

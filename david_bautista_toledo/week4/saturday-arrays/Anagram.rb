# // # Anagram Detector
# // Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
# // In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
# // ## Suggestions
# // - Start out by getting this working with discrete functions.
# // - If you feel comfortable with that, try to put all your functions, collections, etc, into an object.
# (edited)

# for each word of the list
# will check if its an anagram of the "word"
#if it is an anagram of the word it will print the list word
def anagram (word, list)
list.each do |current_word|
  puts current_word
end


end




anagram("listen", ["enlists", "google", "inlets", "banana"])

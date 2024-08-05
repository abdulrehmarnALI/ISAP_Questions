# Q2
# Write code to read from a text file containing a list of numbers, each on a new line
# The code should output the top five most frequent numbers, each on a new line - and nothing else
#  

import os

# function to read numbers.txt file
def readFile():
    f = open('numbers.txt', 'r')
    # splitlines func used to turn each new line into an array entry
    return f.read().splitlines


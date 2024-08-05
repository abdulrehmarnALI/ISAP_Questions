# Q2
# Write code to read from a text file containing a list of numbers, each on a new line
# The code should output the top five most frequent numbers, each on a new line - and nothing else
#  

import os

# function to read numbers.txt file, found in same working directory as .py file
def readFile():
    f = open('numbers.txt', 'r')
    # splitlines func used to turn each new line into an array entry
    return f.read().splitlines()

def getMostFrequent(data):
    # dict to store number:frequency pairs
    frequencies = {}
    # step through each number in the data array and check if its in the frequency dict
    # if number is in frequency dict, increase frequency / value by 1
    # if number is NOT in frequency dict, set frequency / value to 1
    for number in data:
        if number in frequencies:
            frequencies[number] += 1
        else:
            frequencies[number] = 1

    # sorted function puts values in ascending order
    sorted_dict = sorted(frequencies, key=frequencies.get, reverse=True)
    print("The 5 most frequent numbers found in the file are:")
    # print top 5 most frequent
    for number in sorted_dict[:5]:
        print(number)

if __name__  == "__main__":
    print("Current working directory:", os.getcwd())
    getMostFrequent(readFile())
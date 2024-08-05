# had to Google how to do this question
# found this most tricky of the four, others were simple
sort numbers.txt | uniq -c | sort -nr | head -n 5 | tr -s ''
# sort to group identical numbers together
# numbers.txt can be refernced directly
# uniq -c counts each unique number found
# sort -nr sorts in descending order
# head -n 5 selects the 5 top / most frequent values
# tr -s '' trims to remove extra spaces
# cut -d '' -f3 gets rid of the frequency values and leaves just the number
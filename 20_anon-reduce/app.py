# Robin Han
# SoftDev2 pd7
# K20 -- Reductio ad Absurdum
# 2019-04-18

from functools import reduce

f = open('book.txt', 'r')
text = f.read().replace('.', ' ').replace(',', ' ').replace('?', ' ').replace('!', ' ')
words = text.split()

def getFreq(word):
    lst = [0] + words
    return reduce((lambda x, y: x + 1 if y == word else x), lst)

def totalFreq(txt):
    freq = [getFreq(x) for x in txt]
    return reduce((lambda x, y: x + y), freq)

def count(tmp, word):
    if word in tmp:
        tmp[word] += 1
    else:
        tmp[word] = 1
    return tmp

def mostFreq():
    lst = [{}] + words
    tmp = reduce(count, lst)
    return max(tmp, key=tmp.get)

print(getFreq('that'))
print(mostFreq())

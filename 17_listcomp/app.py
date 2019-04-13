a = [0,1,2,3,4]
import math

# question 1
print ([x*22 for x in a])
temp = []
for i in range(5):
    temp.append(i*22)
print(temp)

#question 2
print ([x*10+7 for x in a])
temp = []
for i in range(5):
    temp.append(i*10+7)
print (temp)

#question 3
b = [0,1,2]
temp2 = []
for u in range(3):
    for i in range(3):
        temp2.append(i*u)
print(temp2)

print([x * y for x in b for y in b])

#question 4
temp = []
for i in range(101):
    for j in range(2,int(math.sqrt(i)) + 1):
        if (i % j == 0):
            temp.append(i)
            break
print (temp)
not_primes = []
[not_primes.append(x) for x in range(101) for y in range(2,int(math.sqrt(x)+1)) if x%y == 0 and x not in not_primes]
print(not_primes)

#question 5
temp = []
flag = True
for i in range(2, 101):
    for j in range(2,int(math.sqrt(i)) + 1):
        if (i % j == 0):
            flag = False
            break
        else:
            flag = True
    if (flag):
        temp.append(i)
print(temp)

primes = []
[primes.append(e) for e in range(2, 100) if e not in not_primes]
print(primes)


#question 6
num = 68
temp3 = []
for i in range(1,num+1):
    if (num % i == 0):
        temp3.append(i)
print (temp3)

factors = []
[factors.append(x) for x in range(1,num+1) if num%x == 0]
print(factors)

#question 7
matrix= [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12]
        ]
result = [[0 for x in range(len(matrix))] for y in range(len(matrix[0]))]
for i in range(len(matrix)):
   for j in range(len(matrix[0])):
       result[j][i] = (matrix[i][j])
print(result)
tran = [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]
print(tran)

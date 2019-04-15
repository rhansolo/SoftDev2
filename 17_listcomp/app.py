'''
DiscoAtThePanic - Robin Han, Vincent Chi
SoftDev2 pd7
K #17: PPFTLCW
2019-04-14
'''
import math

not_primes = []


def q1_loop():
    temp = []
    for i in range(5):
        temp.append(i*22)
    print(temp)
def q1_list():
    print ([x*22 for x in range(5)])

def q2_loop():
    temp = []
    for i in range(5):
        temp.append(i*10+7)
    print (temp)
def q2_list():
    print ([x*10+7 for x in range(5)])


def q3_loop():
    temp2 = []
    for u in range(3):
        for i in range(3):
            temp2.append(i*u)
    print(temp2)
def q3_list():
    print([x * y for x in range(3) for y in range(3)])

def q4_loop():
    temp = []
    for i in range(101):
        for j in range(2,int(math.sqrt(i)) + 1):
            if (i % j == 0):
                temp.append(i)
                break
    print (temp)
def q4_list():
    [not_primes.append(x) for x in range(101) for y in range(2,int(math.sqrt(x)+1)) if x%y == 0 and x not in not_primes]
    print(not_primes)

def q5_loop():
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
def q5_list():
    primes = []
    [primes.append(e) for e in range(2, 100) if e not in not_primes]
    print(primes)

def q6_loop(num):
    temp3 = []
    for i in range(1,num+1):
        if (num % i == 0):
            temp3.append(i)
    print (temp3)

def q6_list(num):
    factors = []
    [factors.append(x) for x in range(1,num+1) if num%x == 0]
    print(factors)

def q7_loop(matrix):
    result = [[0 for x in range(len(matrix))] for y in range(len(matrix[0]))]
    for i in range(len(matrix)):
       for j in range(len(matrix[0])):
           result[j][i] = (matrix[i][j])
    print(result)
def q7_list(matrix):
    tran = [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]
    print(tran)

q1_list()
q1_loop()
q2_list()
q2_loop()
q3_list()
q3_loop()
q4_list()
q4_loop()
q5_list()
q5_loop()
num = 72
q6_list(num)
q6_loop(num)
matrix = [[1,2,3],[4,5,6],[7,8,9]]
q7_list(matrix)
q7_loop(matrix)

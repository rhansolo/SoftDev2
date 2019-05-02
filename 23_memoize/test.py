'''
Robin Han
SoftDev2 pd07
K #23: Closure
2019-05-01
'''

def memoize(f):
    memo = {}
    def helper(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return helper

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

for x in range(0,50):
    print(fib(x))




'''
import random

def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

@make_HTML_heading
def greet():
    greetings = ['hello','Welcome','Ayo','suhsuhG','bonjour']
    return random.choice(greetings)

greet_heading = make_HTML_heading(greet)
print(greet_heading())

print(greet())
'''

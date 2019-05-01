'''
Robin Han
SoftDev pd07
K #22: Closure
2019-05-01
'''
def make_counter():
    count = 0
    def inc():
        nonlocal count
        count += 1
        return count
    def get_count():
        return counter
    def option(print=False):
        if print:
            return get_count()
        else:
            return inc()
    return option

ctr1 = make_counter()
print(ctr1())
print(ctr1())
print("count is ")
print(ctr1(True))
ctr2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())






'''
def inc(x):
    return x+1
f = inc
print(inc)
print(f)
print(f(10))


def adder(a,b):
    return a + b

def caller(c):
    print(c(2,4))
    print(c(3,5))

caller(adder)

def outer(x):
    def contains(l):
        return x in l
    return contains

#contains_15 = outer(15)

print(contains_15([1,2,3,4,5]))
print(contains_15([13,14,15,16,17]))
print(contains_15(range(1,20)))
#del outer
contains_15(range(14,20))

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x
print(outer())
'''

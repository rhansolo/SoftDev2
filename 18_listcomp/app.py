def pyTriples(a):
    print([(2*m*n,m^2-n^2,m^2+n^2) for m in range(1,a) for n in range(1,a)])

pyTriples(10)

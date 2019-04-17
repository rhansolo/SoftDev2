
def pyTriples(a):
    return([(m**2-n**2,2*m*n,m**2+n**2) for m in range(1,a) for n in range(1,a) if 2*m*n > 0 if m**2-n**2 > 0 if m**2+n**2 > 0])
def quickSort(arr):
    if len(arr) <=2:
        return arr
    return quickSort([y for y in arr if y < arr[0]]) + [arr[0]] + quickSort([x for x in arr if x > arr[0]])


print(pyTriples(10))
print(quickSort([1,5,3,7,8,2,3,7,1,4,7,2,20]))

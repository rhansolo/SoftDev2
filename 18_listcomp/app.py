
def pyTriples(a):
    return([(m**2-n**2,2*m*n,m**2+n**2) for m in range(1,a) for n in range(1,a) if 2*m*n > 0 if m**2-n**2 > 0 if m**2+n**2 > 0])
def quickSort(arr):
    if arr == []:
        return []
    pivot = arr[0]
    lower = quickSort([x for x in arr[1:] if x < pivot])
    upper = quickSort([x for x in arr[1:] if x >= pivot])
    return lower + [pivot] + upper

print(pyTriples(10))
print(quickSort([1,5,3,7,8,2,3,7,1,4,7,2,20]))

def isPrime(x):
    for i in range(2, x):
        if (x % i) == 0:
            return False
    return True


def findFactors(x):
    arr = []
    for i in range(1, x + 1):
        if (x % 1) == 0:
            arr.append(i)
    return arr


value_x = int(input("Input an integer number:"))

if isPrime(value_x):
    print(f"{value_x} is a Prime number")
else:
    print(f"{value_x} is not a Prime number")
    factors = findFactors(value_x)
    print(f"Factor of {value_x} = {factors}")

for x in range(-5, 6):
    y = (8 * (x**2)) + 1
    print(f"x= {x} => y = 8({x})² + 1 = {y}")

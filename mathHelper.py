import math

while True:
    print("Welcome to the simple math helper \n What would you like to calculate?")
    print("1. Sqrt")
    print("2. Log")
    print("1. Factorial")
    select_menu = int(input("Select Menu: "))
    if select_menu == 1:
        number = int(input("Enter number: "))
        print(math.sqrt(number))
    elif select_menu == 2:
        number = int(input("Enter number: "))
        print(math.log(number))
    elif select_menu == 3:
        number = int(input("Enter number: "))
        print(math.factorial(number))

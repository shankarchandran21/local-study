n = 5

for i in range(n):

    for j in range(n):
        print('*', end='')

    print('') 


for i in range(1,n+1):

    row = ''
    for j in range(i):
        row += '* '
    print(row)


for i in range(1,n+1):

    row = ''
    for j in range(1,i):
        row += str(j) + ' '

    print(row)

printValue = 1
for i in range(1,n+1):
    printValue = 0 if i % 2 == 0 else 1
    for j in range(1,i+1):
        print(printValue, end=' ')
        printValue = 0 if printValue == 1 else 1
    print('')


printValueNum = 1

for i in range(1,n+1):

    for j in range(1,i+1):
        print(printValueNum, end=' ')
        printValueNum += 1

    print('')


for i in range(1,n+1):
    for j in range(1,n+2-i):
        print('*', end=' ')

    print('')


for i in range(1,n+1):
    for j in range(1,n+2-i):
        print(n+1-i, end=' ')
    print('')

for i in range(1,n+1):
    for j in range(1,n+2-i):
        print(j, end=' ')
    print('')


for row in range(1,n*2):
    totalColsInRow = row if row <= n else 2*n - row
    for col in range(1, totalColsInRow +1 ):
        print('*', end=' ')
    print('')

for row in range(1,n+1):

    for space in range(1,n-row+1):
        print(' ', end=' ') 
    for col in range(1, row):
        print('*', end=' ')
    print('')

print("---------------------")

for row in range(1, n + 1):
        colTimes = n - row + 1
        for space in range(1, n - colTimes + 1):
            print(" ", end="")
        for col in range(1, colTimes + 1):
            print("*", end="")
        print()
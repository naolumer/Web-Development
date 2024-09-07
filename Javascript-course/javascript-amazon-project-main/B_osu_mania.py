t= int(input())

for i in range(t):
    n = int(input())
    finalResult= []
    for j in range(n):
        rows = input().strip()
        column = rows.index('#') + 1
        
        finalResult.append(column)
        
    print(' '.join(map(str , finalResult[::-1])))    
    
    
    
            
def testLocation(cards,query, mid):
    mid_number = cards[mid]
    
    if cards[mid]== query:
        if mid -1 >=0 and cards[mid-1] == query:
            return 'left'
        else:
            return 'found'
    
    elif mid_number < query:
        return 'left'
    
    else:
        return 'right'

def locatePosition(cards, query):
    lo,hi = 0, len(cards)-1
    
    
    testLocation()
    while hi >= lo:
        
        mid = lo + hi // 2
        result = testLocation(cards, query, mid)
        
        if result == 'found':
            return mid
        elif result == 'left':
            hi = mid -1
        elif result =='right':
            lo = mid + 1
    return -1
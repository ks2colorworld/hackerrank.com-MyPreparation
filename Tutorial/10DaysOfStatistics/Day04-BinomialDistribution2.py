#python
import math
p=0.12
q=1-p
case1=0
case2=0
for x in range(0, 3):
    case1+=math.comb(10, x)* (p**x)*(q**(10-x))
for x in range(2, 11):
    case2+=math.comb(10, x)* (p**x)*(q**(10-x))
print(round(case1, 3), round(case2, 3), sep='\n')
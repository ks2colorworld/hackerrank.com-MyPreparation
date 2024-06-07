import math
def cdf(m, std, x):
    return 0.5 * (1 + math.erf((x-m)/(std*2**.5)))
n, m0, std0, x=49, 205, 15, 9800
m=n*m0
std=math.sqrt(n)*std0
print(round(cdf(m, std, x), 4))
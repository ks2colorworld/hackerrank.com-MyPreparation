import scipy.stats as stats

# 주어진 값
mean = 20
std_dev = 2
x = 19.5

# Z값 계산
z = (x - mean) / std_dev

# 누적 분포 함수 값 계산
probability = stats.norm.cdf(z)

print(f"자동차가 19.5시간 이내에 조립될 확률: {probability:.3f}")

# 구간의 값
x1 = 20
x2 = 22

# Z값 계산
z1 = (x1 - mean) / std_dev
z2 = (x2 - mean) / std_dev

# 누적 분포 함수 값 계산
probability1 = stats.norm.cdf(z1)
probability2 = stats.norm.cdf(z2)

# 두 값의 차이를 계산하여 구간 확률을 구함
probability_between = probability2 - probability1

print(f"자동차가 20시간에서 22시간 사이에 조립될 확률: {probability_between:.3f}")
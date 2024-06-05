import scipy.stats as stats

# 평균과 표준 편차 설정
mu = 70
sigma = 10

# 조건 1: 점수가 80점보다 높은 학생들의 비율
z1 = (80 - mu) / sigma
p1 = 1 - stats.norm.cdf(z1)
print(f"{p1 * 100:.2f}%")

# 조건 2: 시험에 통과한 학생들의 비율 (점수 >= 60)
z2 = (60 - mu) / sigma
p2 = 1 - stats.norm.cdf(z2)
print(f"{p2 * 100:.2f}%")

# 조건 3: 시험에 실패한 학생들의 비율 (점수 < 60)
p3 = stats.norm.cdf(z2)
print(f"{p3 * 100:.2f}%")

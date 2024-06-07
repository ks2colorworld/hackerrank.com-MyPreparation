import numpy as np
import matplotlib.pyplot as plt

# 설정
np.random.seed(0)
sample_size = 30  # 각 표본의 크기
num_samples = 1000  # 표본의 수

# 임의의 분포에서 표본 추출 (여기서는 지수 분포 사용)
samples = np.random.exponential(scale=2.0, size=(num_samples, sample_size))

# 각 표본의 평균 계산
sample_means = np.mean(samples, axis=1)

# 히스토그램 그리기
plt.hist(sample_means, bins=30, density=True, alpha=0.6, color='g')

# 정규 분포와 비교 (이론적 정규 분포)
mean = np.mean(sample_means)
std = np.std(sample_means)
xmin, xmax = plt.xlim()
x = np.linspace(xmin, xmax, 100)
p = np.exp(-((x - mean) ** 2) / (2 * std ** 2)) / (np.sqrt(2 * np.pi) * std)
plt.plot(x, p, 'k', linewidth=2)
title = "Fit results: mean = %.2f,  std = %.2f" % (mean, std)
plt.title(title)

plt.show()

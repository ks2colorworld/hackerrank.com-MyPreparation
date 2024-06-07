import scipy.stats as stats

# 주어진 값 설정
cargo_capacity = 9800  # 화물기 최대 수송 무게(kg)
num_boxes = 49  # 수송해야 할 박스의 갯수
mean_box_weight = 205  # 박스의 평균 무게(kg)
std_dev_box_weight = 15  # 무게의 표준편차(kg)

# 한 개의 박스를 대표하는 정규 분포 설정
box_distribution = stats.norm(loc=mean_box_weight, scale=std_dev_box_weight)

# 49개의 박스를 선택했을 때 무게의 합의 평균과 표준편차 계산
mean_sum_weight = num_boxes * mean_box_weight
std_dev_sum_weight = (num_boxes ** 0.5) * std_dev_box_weight  # 표준편차는 각 박스의 표준편차를 제곱근한 값에 개수를 곱함

# 화물기 수송 무게인 9800kg 이하일 확률 계산
probability = box_distribution.cdf(cargo_capacity / num_boxes)

# print("화물기로 49개의 박스를 한 번에 수송할 확률:", probability)
print(round(probability,4))

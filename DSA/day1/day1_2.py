price=list(map(int,input().split()))
max=0
for i in range(len(price)):
	for j in range(i+1,len(price)):
		if price[i]>price[j] and max<price[i]-price[j]:
			max=price[i]-price[j]
print(max)
n=int(input())
k=int(input())
res=[]
for i in range(1,n+1):
	if n%i==0:
		res.append(i)
		i+=1
	else:
		i+=1
if len(res)<=k:
	print(res[0])
else:
	print(res[k])


#include <stdio.h>
int main(){
	int a[100],i,j,t,n;
	scanf("%d",&n);//输入一个数，表示接下来有N个数
	for(int i=1;i<=n;i++){
		scanf("%d",&a[i]);
	}
	for(int i=1;i<=n-1;i++){//只需n-1趟排序
		for(int j=1;j<=n-1;j++){//进行比较换位
			if(a[j]<a[j+1]){
				t=a[j];
				a[j]=a[j+1];a[j+1]=t;
			}
		}
		for (int i = 0; i < n; i+=)
		{
			printf("%d\n",a[i] );
		}
		getchar();getchar();
		return 0;
	}
}
#include <stdio.h>
struct student
{
	char name[21];
	char score;
};
int main(){
	strut student a[100],t;
	int i,j,n;
	scanf("%d",&n);//输入一个数，表示接下来有N个ren
	for(int i=1;i<=n;i++){
		scanf(" %s %d",&a[i].name,&a[i].score);
	}
	for(int i=1;i<=n-1;i++){//只需n-1趟排序
		for(int j=1;j<=n-1;j++){//进行比较换位
			if(a[j].score<a[j+1].score){
				t=a[j];
				a[j]=a[j+1];a[j+1]=t;
			}
		}
		for (int i = 0; i < n; i+=)
		{
			printf("%s\n",a[i].name );
		}
		getchar();getchar();
		return 0;
	}
}
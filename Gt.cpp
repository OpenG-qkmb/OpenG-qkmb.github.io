#include <iostream>
#include <cstdio>
using namespace std;
typedef long long lld;
const int S=65536;
int n,m,a[S],opt,s,t,ans(0);
inline bool CheckDigit(char c)
{
	return ((c>='0')&&(c<='9'));
}
inline int getint()
{
	int x(0),f(1);
	char c(getchar());
	for(;(!CheckDigit(c));c=getchar())if(c=='-')f=-1;
	for(;CheckDigit(c);c=getchar())x=(x<<3)+(x<<1)+(c^48);
	return x*f;
}
inline void putint(int x)
{
	if(x<0)putchar('-'),x=-x;
	if(x>9)putint(x/10);
	putchar(x%10+'0');
	return;
}
int main()/*OpenG-qkmb*/
{
	n=getint(),m=getint();
	while(m--)
	{
		opt=getint(),s=getint(),t=getint();
		if(opt)
		{
			++a[s];
			--a[t+1];
		}
		else
		{
			ans=0;
			for(register int i=1;i<=s;++i)
				ans+=a[i];
			putint(ans),putchar(10);
		}
	}
	return 0;
}//Don't put on your face mask, fxxk!
//              ----The Master Teacher of Class 24
#include <bits/stdc++.h>
using namespace std;

int maxLenLIS(int arr[],int sol[],int i,int j,int prev,int n) {
    if(i >= n || j >= n ) return 0;
    
    if(prev == -1 || arr[i] > sol[prev]) {
        sol[j] = arr[i];
        int len1 = 1 + maxLenLIS(arr,sol,i+1,j+1,j,n);
        sol[j] = -1;
        int len2 = maxLenLIS(arr,sol,i+1,j,prev,n);
        return (len1 > len2) ? len1 : len2;
    }
    return maxLenLIS(arr,sol,i+1,j,prev,n);
}

int main()
{
	int t;
	cin>>t;
	while(t--)
	{
        int n;
        cin>>n;
        int *arr = new int[n];
        for(int i=0;i<n;i++) {
            cin>>arr[i];
        }
        int *sol = new int[n];
        for(int i=0;i<n;i++) {
            sol[i] = -1;
        }
        cout<<maxLenLIS(arr,sol,0,0,-1,n);
	}
	return 0;
}

#include <bits/stdc++.h>
#define RANGE 255
using namespace std;

void countSort(char arr[])
{
    int count[RANGE + 1], i;
    char output[strlen(arr)];

    memset(count, 0, sizeof(count));

    for (i = 0; arr[i]; i++)
    {
        count[arr[i]]++;
    }

    //modify the count array to maintain the stablity of sorting
    for (i = 1; i <= RANGE; i++)
    {
        count[i] += count[i - 1];
    }

    for (i = strlen(arr) - 1; arr[i]; i--)
    {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    for (i = 0; arr[i]; i++)
    {
        arr[i] = output[i];
    }
}

int main()
{
    char arr[] = "geeksforgeeks";
    countSort(arr);
    printf("Sorted character array is %s\n", arr);
    return 0;
}
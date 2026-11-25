// Finds a word in a list by recursively searching both halves.
// Prints its position (starting from 1), or "Not found".
#include <cstring>
#include <iomanip>
#include <iostream>
using namespace std;

#define NMAX 10

struct something{
  const char *name; //replaced with char pointer so that i can save values the way i have done
}a[NMAX];

int myFunction(const char *choice, int l,int r)   // starting with l==0 && r==NMAX-1
{
    if(l>r) //return if l has become greater than r
        return -1;
    int m=(l+r)/2;

    if(strcmp(a[m].name,choice)==0)
            return m+1;
    else if(l==r) //returned -1 as the value has not matched and further recursion is of no use
                return -1;
    else{

            int left= myFunction(choice,l,m-1);//replaced return
            int right= myFunction(choice,m+1,r);//by saving values returned
            if(left!=-1)                      //so that i can check them,
                return left;                  //otherwise returning from here onlywould never allow second satatement to execute
            if(right!=-1)
                return right;
            else
                return -1;
    }
}

int main(){

a[0].name="abc";
a[1].name="a";
a[2].name="abcd";
a[3].name="abcf";
a[4].name="abcg";
a[5].name="abch";
a[6].name="abcj";
a[7].name="abck";
a[8].name="abcl";
a[9].name="abcr";
char choice[200];
cin>>setw(sizeof(choice))>>choice;
int k=myFunction(choice,0,NMAX-1);  // will return the position, -1 otherwise
                           // of course, could be more parameters
if( k !=-1)
 cout<<k;
 else
    cout<<"Not found";
return 0;
}

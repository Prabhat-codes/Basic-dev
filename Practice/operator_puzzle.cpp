#include <stdio.h>
int main(){
    int a=10,b=2,c;
    a=!(c=c==c)&&++b;
    printf("%d %d %d",a,b,c);
    return 0;
}
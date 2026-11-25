#include <stdio.h>
int main()
{
    int n = 11, r = 4;
    int s;
    s = n++ % r-- / 2;
    do {
    switch (s++){
    case 0:
        printf("%d", r << 2) ; break;
case 1:
    printf("d", --r);
case 3:
    ++r;
case 2:
    --r;
default:
    printf("%d", s >> 2 - !0);
    }
} while (--n >&r);
return 0;
    }

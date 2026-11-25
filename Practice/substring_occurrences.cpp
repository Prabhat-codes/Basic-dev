// C++ program for the above approach
#include <bits/stdc++.h>
using namespace std;

void findOccurrences(string S, string T)
{
	int n1 = S.size();
	int n2 = T.size();
	int ans = 0;

	int last = 0;

	for (int i = 0; i <= n1 - n2; i++) {
		bool chk = true;
		for (int j = 0; j < n2; j++) {
			if (T[j] != S[i + j]) {
				chk = false;
				break;
			}
		}

		if (chk) {
			ans += (i + 1 - last)
				* (n1 - (i + n2 - 1));
			last = i + 1;
		}
	}
	cout << ans;
}

// Driver code
int main()
{
	string S = "dabc", T = "ab";

	// Function Call
	findOccurrences(S, T);
}

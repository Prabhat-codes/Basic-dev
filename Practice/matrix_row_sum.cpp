// Reads an n x m matrix and prints the running total along each row.
// Example input: 2 3  1 2 3  4 5 6
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n, m;
    if (!(cin >> n >> m) || n < 1 || m < 1)
    {
        cout << "Enter the number of rows and columns, then the values." << endl;
        return 1;
    }

    vector<vector<int>> a(n, vector<int>(m));
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> a[i][j];
        }
    }

    // Row-wise running sum
    for (int i = 0; i < n; i++)
    {
        int sum = 0;
        for (int j = 0; j < m; j++)
        {
            sum += a[i][j];
            cout << sum << " ";
        }
        cout << endl;
    }
    return 0;
}

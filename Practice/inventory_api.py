# Practice: fetch JSON from a public test API and print the first three items.
import requests


def printl(barcode):
    print("Hello World")
    url="https://jsonmock.hackerrank.com/api/inventory"
    print(url)
    x=requests.get(url)
    a=x.json()
    for i in range(0,3,1):
        print(a['data'][i]['item'])
printl(74001755)
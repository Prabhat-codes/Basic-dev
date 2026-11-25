# Basic-dev

## About

Small projects from when I was learning web development and programming. It is for anyone who wants to try the apps or read beginner-level code. It has nine small web apps, a set of Django and REST practice projects, and a few C++, C, Java and Python exercises.

**Tech stack:** HTML, CSS, JavaScript, React with Vite, Python with Django and Django REST Framework, C, C++ and Java.

## Web apps

| Folder | What it does |
|---|---|
| Analog_Clock | A ticking analog clock face |
| Digital Clock | The time in 12-hour format |
| Countdown Timer | Counts down to a date and time you pick, and remembers it |
| Calculator | A calculator that works by tap or keyboard |
| BMI_Calculator | Body mass index and category from height and weight |
| Loan Calculator | Monthly loan repayment, total and interest |
| Quote_generator | A random quote on each click |
| Contact Form | Form validation practice (nothing is sent or saved) |
| Sidebar-react | A file explorer in React: add, rename and delete files and folders |

## Django and REST projects

| Folder | What it practises | Open |
|---|---|---|
| Django-start/add | Numbers passed in the address | `/number/2/3/` |
| Django-start/addition, addition | A first page from a template | `/` |
| Django-start/blogger | A blog with a post form | `/blog/` |
| Django-start/formschecking | Login form and sessions | `/first/connection/` |
| Django-start/gfgpolls | Polling app with voting | `/` |
| Django-start/mysite | The Django polls tutorial | `/polls/` |
| Django-start/rishabh, Django-start/voting | Two more versions of the polling app | `/polls/` |
| Django-start/learn | Two apps with their own pages | `/form/`, `/check/` |
| Django-start/learn2 | Simple forms and an event calendar | `/` |
| Django-start/myfirstproject | A comment form with validation | `/first/` |
| myfirstproject | A first view and template | `/` |
| Django-start/pass_parameters | Passing form values to a page | `/login/` |
| Rest-trials/rest1 | A small REST API for a list of employees | `/employees/` |

These are learning projects with development settings (`DEBUG = True` and a throwaway secret key). Do not deploy them as they are.

## Practice

| File | What it does |
|---|---|
| switch_puzzle.c | Puzzle on `switch` fall-through and operators |
| operator_puzzle.cpp | Puzzle on logical and increment operators |
| matrix_row_sum.cpp | Running totals along each row of a matrix |
| recursive_search.cpp | Recursive search through a list of words |
| substring_occurrences.cpp | Counts substrings that contain a pattern |
| ThreadPractice.java | Threads sharing a synchronized method |
| inventory_api.py | Reads data from a public test API |

## Run

**Web apps:** open `index.html` in a browser and pick an app. The React sidebar needs Node.js:

```
cd Sidebar-react
npm install
npm run dev
```

To build the whole website into `_site/`, run `node build-site.mjs`.

**Django projects:** use Python 3.9 to 3.12.

```
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cd Django-start/voting
python manage.py migrate
python manage.py runserver
```

Then open the address in the table above at http://127.0.0.1:8000. `migrate` creates the database, with sample data for the polls and employees projects. Run `python manage.py createsuperuser` to use `/admin/`.

**Practice files:**

```
cd Practice
g++ matrix_row_sum.cpp -o matrix_row_sum
gcc switch_puzzle.c -o switch_puzzle
java ThreadPractice.java
python inventory_api.py
```

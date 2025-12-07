# Event Reminder App

A simple and efficient Event Reminder Application built using Django + Django REST Framework for the backend and React + Tailwind CSS for the frontend.
This app allows users to create reminders, set dates, and receive upcoming reminder alerts.

# Tech Stack
Backend

Django

Django REST Framework (DRF)

SQLite / PostgreSQL (database)

CORS Headers

Frontend

React

Tailwind CSS

Axios for API calls

# Features

Create new reminders

Edit and delete reminders

View list of all reminders

Stores reminders in backend database

API-based architecture using DRF

Clean UI built with Tailwind CSS

Real-time updates without page reload

Proper backend–frontend integration

# Project Structure
<h1>
reminder-app/
│
├── backend/
│   ├── manage.py
├.  ├── core
│   │   ├── models.py
│   │   ├── settings.py
│   │   ├── celery.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── reminder/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── settings.py
│   │   └── tasks.py
│       └──admin.py
│
└── reminder-frontend/
    ├── src/
    │   ├── components/
    │   │     └──Footer.jsx
    │   │     └──Navbar.jsx   
    │   │ 
    │   ├── pages/
    │        └── Home.jsx        
    |        └── login.jsx
    |        └── register.jsx
    |        └── reminder.jsx
    ├── App.js
    ├── App.css
    ├── index.js
    ├── public/
    └── package.json
    </h1>

# How to Run the Project
# Backend

cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend

cd frontend
npm install
npm start

API Endpoints

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| GET    | /api/reminders/      | Get all reminders     |
| POST   | /api/reminders/      | Create a new reminder |
| GET    | /api/reminders/<id>/ | Get single reminder   |
| PUT    | /api/reminders/<id>/ | Update reminder       |
| DELETE | /api/reminders/<id>/ | Delete reminder       |


# Build & Deployment

Backend can be deployed on Render / Railway / VPS

Frontend can be deployed on Vercel / Netlify

CORS enabled for frontend-backend communication

Author

Rahul Maurya
Full Stack Developer
GitHub: https://github.com/Rahulmaurya1234/Event_project
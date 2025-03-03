# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


🏰️ Floor Planner Application

A web-based Floor Planner using React, Node.js, Express, MongoDB, and React-DnD for drag-and-drop functionality.

🚀 Setup Guide

🔧 Prerequisites

Install Node.js (v18 or later) 

Install MongoDB 

Install Git 

Install Postman (for API testing) 

📺 Frontend Setup (React)

Navigate to the frontend folder:

cd frontend

## Install dependencies:

npm install

Start the React app:

npm run dev

The frontend will run on `` (Vite default).

# 💪 Backend Setup (Node.js & Express)

Navigate to the backend folder:

cd backend

Install dependencies:

npm init

Set up environment variables:

Create a .env file in the backend folder.

Add the following details:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the API server:

npm start

The backend will run on ``.

Check if the server is running: Open a browser and go to:

http://localhost:5000

The Frontend will run on ``.

Check if the server is running: Open a browser and go to:

http://localhost:3000

You should see a response confirming the server is running.


### Postman API Testing

Import Collection:

Open Postman and click Import.

Select the provided Postman collection JSON file (floor-planner.postman_collection.json).

Ensure the Base URL is set correctly in the environment (http://localhost:5000).

Sample API Endpoints:

1️⃣ User Registration

Endpoint: GET [/api/users/register](http://localhost:5000/api/floorplan)

Body: (JSON)    
{
  "rooms": [
    { "name": "Living Room", "width": 200, "height": 150, "x": 50, "y": 50 },
    { "name": "Kitchen", "width": 150, "height": 120, "x": 300, "y": 50 }
  ],
  "doors": [
    { "room": "Living Room", "position": "center", "width": 30, "height": 10, "x": 125, "y": 200 }
  ],
  "windows": [
    { "room": "Kitchen", "position": "top", "width": 50, "height": 10, "x": 350, "y": 40 }
  ]
}



#### 🔄 Running Both Frontend & Backend Simultaneously

Open two terminals (one for the backend and one for the frontend).

In Terminal 1 (Backend):

cd backend
npm start

In Terminal 2 (Frontend):

cd frontend
npm run dev

Now, your app is fully functional!




##### 🌟 Features

✅ Draw Rooms, Walls, Doors, Windows✅ Drag & Drop Components✅ Save and Load Floor Plans✅ REST API for Storing Data✅ Secure Authentication with JWT✅ MongoDB Integration

###### 📚 Tech Stack

Frontend: React.js, Tailwind CSS, React-DnD, Fabric.js

Backend: Node.js, Express.js, MongoDB

Database: MongoDB (with Mongoose)

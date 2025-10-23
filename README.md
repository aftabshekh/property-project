🏡 Property Listing React App
📌 Objective
A basic yet complete React frontend application that fetches, displays, filters, and manages property listings with a user-friendly UI.

🚀 Project Overview
This project demonstrates how to build a React-based property management dashboard that interacts with an API (mock or Express backend).
Users can view, filter, and add new properties easily — all in one clean interface.

🛠️ What You’ll Build
🏠 1. Property Listings Page
Fetch properties from a mock GET API endpoint
Display each property in a card layout showing:
Title
Type
Location
Price
Short description
Allow filtering by property type
Include a search bar to filter by name or location

➕ 2. Add Property Form
Form fields:
Name
Type
Price
Location
Description
On form submission:
Send data to a POST API endpoint
Fetch updated data and update property list dynamically

🔍 3. View Details Modal
Clicking “View” opens a modal showing:
Full property details
Optional image and Google Map (if coordinates are available)

⚙️ API Setup (Required)
You can use any of these options:
json-server
MockAPI
Express backend

Endpoints:
GET  /api/properties   → Fetch all property listings  
POST /api/properties   → Add a new property

👨‍💻 User Flow
App loads → fetches property list using GET
Properties displayed as cards
User filters/searches or adds new property
POST request adds the new property → UI updates dynamically
Clicking “View” opens the modal with complete details

🧩 Tech Stack
Frontend: React.js, JSX, CSS
Mock API: json-server / MockAPI / Express
State Management: useState, useEffect
UI Components: Modal, Forms, Cards

📂 Folder Structure
property-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── PropertyCard.js
│   │   ├── PropertyForm.js
│   │   └── PropertyModal.js
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md

# Property Project
This is a property listing project built with React + Vite.
#Live Demo
Check out the live project here: [https://property-project01.vercel.app](https://property-project01.vercel.app)

👨‍💻 Author
Aftab Shekh
💼 MERN Stack Developer | Passionate about Frontend + Backend integration

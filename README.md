

🏡 AirBnB Clone (Full-Stack Web App)

A full-stack AirBnB-style web application built using Node.js, Express, MongoDB, Passport.js, and EJS, featuring user authentication, listings, reviews, image uploads, and authorization control.

This project focuses on real-world backend concepts, production-ready architecture, and deployment best practices.

🚀 Features
👤 User Authentication

User signup & login using Passport.js

Secure password hashing with passport-local-mongoose

Session-based authentication

Flash messages for user feedback

🏠 Listings

Create, read, update, delete (CRUD) listings

Image upload support using Cloudinary

Only listing owners can edit or delete their listings

Ownership-based authorization

⭐ Reviews

Logged-in users can add reviews

Reviews linked to authors

Star-based rating system

Only review owners can delete their reviews

🔐 Authorization & Security

Protected routes using custom middleware

Redirect users back to intended page after login

MongoDB-backed sessions using connect-mongo

🌍 Database & Deployment

MongoDB Atlas integration

Production-ready session store

Environment variables using dotenv

Deployed on Render

🛠️ Tech Stack

Frontend

EJS (Embedded JavaScript Templates)

Bootstrap 5

Custom CSS

Backend

Node.js

Express.js

MongoDB + Mongoose

Passport.js (Authentication)

Cloud & Tools

MongoDB Atlas

Cloudinary (image storage)

Multer & multer-storage-cloudinary

Render (deployment)

Git & GitHub

📁 Project Structure
AirBnB/
│
├── models/
│   ├── user.js
│   ├── listing.js
│   └── review.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
│
├── public/
│   ├── css/
│   └── js/
│
├── middleware.js
├── schema.js
├── app.js
└── README.md

⚙️ Environment Variables

Create a .env file in the root directory:

ATLASDB_URL=your_mongodb_atlas_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret

▶️ How to Run Locally
git clone https://github.com/your-username/AirBnB.git
cd AirBnB
npm install
node app.js


Then open:

http://localhost:8080

🧠 Learning Highlights

Implemented authentication + authorization from scratch

Solved real-world dependency & deployment issues

Used MongoDB Atlas + Cloudinary in production

Built reusable middleware

Handled edge cases like deleted resources & redirects

📌 Future Improvements

Map integration for listings

Search & filter functionality

Pagination

User profiles

Better UI animations

🙌 Author

Parikshit Patil
Engineering Student | Full-Stack Developer
GitHub: Parikshit006

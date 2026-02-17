📁 File Upload API (Node.js + Express + MongoDB)

A backend REST API built using Node.js, Express, and MongoDB that allows users to upload, store, and retrieve files efficiently.
This project was developed as part of an internship task to demonstrate backend development skills, API design, and file handling.

🚀 Features

📤 Upload files using Multer

🗄️ Store files in MongoDB (GridFS)

📥 Retrieve uploaded files by filename

🛡️ Middleware-based request handling

📦 Clean project structure (routes, middleware, config)

🔐 Environment variable support using .env

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB, GridFS

File Handling: Multer

Tools: Postman, Git, GitHub

📂 Project Structure
task_2_SYN/
│── config/
│── middleware/
│── routes/
│── server.js
│── package.json
│── package-lock.json
│── .gitignore

🔗 API Endpoints
📤 Upload File
POST /api/files/upload


Body (form-data):

file : Select a file to upload

📥 Get File
GET /api/files/:filename

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/TASK_2_SYN.git


Install dependencies

npm install


Create a .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string


Start the server

npm start


Server will run on:

http://localhost:5000

🧪 Testing

Use Postman to test file upload and retrieval

Ensure MongoDB is running before starting the server

🎯 Purpose of the Project

This project was built to:

Understand backend architecture

Work with file uploads and storage

Practice REST API development

Gain hands-on experience with MongoDB GridFS

👨‍💻 Author

Rishi Singh
Backend Developer | Node.js Enthusiast

⭐ Acknowledgement

Thanks to the internship team for providing this task and learning opportunity.

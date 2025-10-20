# 📝 MERN Todo App

A simple yet complete **MERN Stack Todo Application** I built while learning full-stack development.  
It includes all CRUD operations (Create, Read, Update, Delete) — with a clean UI and solid backend integration.

---

## ⚙️ Tech Stack

| Layer | Technologies Used |
|-------|--------------------|
| 🎨 **Frontend** | React.js, Axios, FontAwesome Icons |
| 🧩 **Backend** | Node.js, Express.js |
| 🗄️ **Database** | MongoDB (via Mongoose) |
| ⚡ **Runtime** | Node + Vite Dev Server | 

---

## ⚙️ Features
- Add new todos 🆕  
- Edit existing todos ✏️  
- Delete todos 🗑️  
- Fetch todos from MongoDB in real time  
- Fully connected REST API (Express + Mongoose)  
- Clean and responsive UI  

---

## 🧠 What I Learnt
- Complete **CRUD** flow in MERN stack  
- Working with **Axios** for frontend-backend communication  
- Using **MongoDB + Mongoose** for schema design  
- Building modular APIs with **Express.js**  
- Managing state and props in **React**  
- Integrating **FontAwesome** icons  
- Writing clean, reusable component structures  

---

## ⚡️ How to Run Locally

### 🔹 Backend
```bash
cd Backend
npm install
npm run dev 
```
Runs on → http://localhost:5000

### 🔹 Frontend
``` bash
cd Frontend
npm install
npm run dev
```
Runs on → http://localhost:5173


## Folder Structures - 
```bash
Backend/
├── models/
│   └── schema.js           # Mongoose schema definition
│
├── src/
│   └── app.js              # All Express APIs
│
├── utils/
│   └── database.js         # Database connection logic
│
└── package.json

Frontend/
├── src/
│   ├── components/
│   │   ├── TodoCard.jsx
│   │   ├── Todolist.jsx
│   │   └── TodoInput.jsx
│   └── App.jsx
│
└── package.json 
```

## 📸 Preview
![SS of the Application](ss.png)


💪 Author

JayaVardhan Tummala

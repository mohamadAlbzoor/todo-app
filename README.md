# 📝 Fullstack To-Do App

A modern fullstack To-Do list application with:

- **Frontend**: React + Tailwind CSS + Vite
- **Backend**: ASP.NET 9 Web API + Entity Framework Core + PostgreSQL
- **Database**: PostgreSQL
- API Features: Create, Read, Update, Delete Todos

---

## Project Structure
```
todo-app/
├── client/ 
│ └── todo/ # React + Tailwind frontend
├── server/
│ └── TodoApi/ # ASP.NET 9 Web API backend
├── .gitignore
├── README.md
└── todo-app.sln
```
---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Setup the Backend (ASP.NET)

```bash
cd server/TodoApi
dotnet restore
dotnet ef database update
dotnet run
```
### 3. Setup the Frontend (React + Vite)

```bash
cd frontend/todo
npm install
npm run dev
```

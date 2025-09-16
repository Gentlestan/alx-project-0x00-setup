# ALX Project 0x00 – Setup

This repository contains the starter scaffold for the **ALX Project 0x00** exercise.  
The goal is to learn how to bootstrap a Next.js application using the **create-next-app** CLI with specific options.

---

## 📚 Objective

Understand how to create a Next.js project from the command line using `npx create-next-app`, including:

- Selecting project options interactively
- Enabling TypeScript, ESLint, Tailwind CSS, and import alias
- Running the development server on a custom port

---

## 🛠️ Steps to Reproduce

1. **Open VS Code**  
   Start a new VS Code instance and open the integrated terminal  
   (_Terminal → New Terminal_).

2. **Navigate to your desired directory**  
   cd /path/to/your/projects

Scaffold the Next.js app

npx create-next-app@latest alx-project-0x00 --typescript

When prompted, select:

Yes: ESLint, Tailwind CSS, Import alias

No : /src directory, App Router

Start the development server

cd alx-project-0x00
npm run dev -- -p 3000

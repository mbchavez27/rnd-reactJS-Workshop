# 🛠️ ReactJS Workshop — R&D Project

Welcome to the **ReactJS Workshop** repository!  
This project serves as a sandbox for learning and experimenting with core ReactJS concepts and frontend development practices using Vite.

---

## 📚 Overview

This repository is part of a research and development initiative focused on:

- Practicing React fundamentals (components, props, state, hooks)
- Understanding project structure and modular design
- Working with Vite for fast frontend tooling
- Building small features and layouts in a controlled environment

---

## ⚙️ Tech Stack

- **ReactJS** (via Vite)
- **JavaScript (ES6+)**
- **Node.js** (v18+ recommended)
- **npm / yarn**

---

## 📁 Project Structure

```
rnd-reactJS-Workshop/
├── public/             # Static assets
├── src/                # Application source code
│   ├── components/     # Reusable components
│   ├── assets/         # Images, fonts, etc.
│   ├── App.jsx         # Root component
│   └── main.jsx        # Entry point
├── index.html          # Base HTML file
├── package.json        # Project metadata and scripts
├── vite.config.js      # Vite configuration
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mbchavez27/rnd-reactJS-Workshop.git
cd rnd-reactJS-Workshop
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Dev Server

```bash
npm run dev
# or
yarn dev
```

Open your browser at `http://localhost:5173`.

---

## ✅ Workshop Topics Practiced

- React functional components
- React hooks (`useState`, `useEffect`)
- Props and event handling
- Vite project setup and hot reload
- Basic file/folder organization

---

## 👨‍💻 Author

**Max Benedict Chavez**  
De La Salle University  
📧 [mbchavez27@dlsu.edu.ph](mailto:max_chavez@dlsu.edu.ph)

---

## 📄 License

MIT License. Feel free to use and modify for learning purposes.

---

> “Code is like humor. When you have to explain it, it’s bad.” — Keep it simple, keep it clean.


---

## 🔍 In-Depth Code Explanation

This section highlights the key components and logic used throughout the project.

### 🧩 `main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- This is the entry point of the application.
- It renders the root `App` component inside a DOM element with the ID `root`.
- `React.StrictMode` is used to help identify potential problems during development.

### 🧩 `App.jsx`

```jsx
function App() {
  return (
    <div className="App">
      <h1>Hello React Workshop</h1>
    </div>
  );
}

export default App;
```

- This is the root component of the app.
- It acts as the main wrapper for your UI and can include global layout or routing logic.
- The current example renders a simple greeting.

### 🧩 `components/`

- This folder is intended for reusable UI components like buttons, headers, or input fields.
- Each component is typically stored in its own file, promoting modularity and clarity.

### 🧩 `assets/`

- This directory stores static resources like images, SVGs, and fonts used across components.

---

## 📌 Development Tips

- Use `useState` for managing local component state.
- Use `useEffect` for handling side effects like fetching data.
- Keep components small and focused on one responsibility.
- Use meaningful file and folder names for maintainability.

Feel free to expand the components and experiment with more React features such as:

- Routing with `react-router-dom`
- Global state with Context API or Redux
- Styled components or utility-first CSS like Tailwind

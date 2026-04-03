# 🤖 AI Conversational Chatbot

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![OpenAI](https://img.shields.io/badge/OpenAI-412991.svg?style=for-the-badge&logo=OpenAI&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

A real-time, aesthetically rich web application that allows users to chat with a friendly AI conversational bot. This project utilizes LangChain to seamlessly retain conversational history, wrapped beautifully inside a React JS / Glassmorphism UI.

---

## ✨ Features
- **Real-Time AI Interactivity:** Smooth, fast chat responses powered by OpenAI (`gpt-3.5-turbo`) and LangChain.
- **Contextual Awareness:** The backend efficiently remembers prior conversation logic, providing a seamless chat buddy experience.
- **Premium UI / UX:** Built with Bootstrap paired with heavily customized Vanilla CSS for glassmorphism elements, vibrant gradients, and CSS micro-animations.
- **Clean Architecture:** Disconnected React Frontend and Python Backend architectures communicating effortlessly via REST APIs.

## 🛠️ Technology Stack
* **Frontend:** React.js, Vite, Bootstrap, Vanilla CSS
* **Backend:** Python, FastAPI, PyDantic, Uvicorn
* **AI & Logic:** LangChain, OpenAI API

---

## 🚀 Getting Started

Follow these instructions to run the conversational AI chatbot on your local machine.

### Prerequisites
- Node.js installed on your machine
- Python 3.8+ installed
- An active OpenAI API Key

### 1. Backend Setup (FastAPI & LangChain)
1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the necessary Python packages:
   ```bash
   pip install -r requirements.txt
   ```
3. Set your OpenAI API Key:
   - Rename the `backend/.env.example` file to `backend/.env`
   - Open that `.env` file and replace the placeholder text with your actual OpenAI API Key.
   ```env
   OPENAI_API_KEY=sk-your-actual-secret-key-goes-here
   ```
4. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```
   *The server should now be running on `http://localhost:8000`.*

### 2. Frontend Setup (React & Vite)
1. Open a **new** terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the Node modules:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173` and start chatting!

---

## 📁 Repository Structure

```text
Conversational-Bot/
├── backend/
│   ├── chat_agent.py      # LangChain & OpenAI logic
│   ├── main.py            # FastAPI Application & Endpoints
│   ├── requirements.txt   # Python Dependencies
│   └── .env.example       # Template for API secrets
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI pieces (ChatBubble, etc.)
│   │   ├── App.jsx        # Main React Logic and Axios API Calls
│   │   ├── main.jsx       # Intercepts React DOM & Bootsrap CSS
│   │   └── index.css      # Custom styling, animations, & glassmorphism
│   ├── package.json       # Node Dependencies
│   └── vite.config.js     # Bundler configuration
└── README.md
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page or make a pull request.

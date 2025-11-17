# Smart Baby Monitor using Visual Language Models (VLM)

A full-stack AI-powered baby monitoring application that uses Visual Language Models (VLMs) to detect and describe baby activities such as crying, sleeping, and playing from images. Designed with a React frontend and a Flask backend, the app provides natural language summaries and optional alerts based on baby behavior.

---

## 🚀 Features

* 🧠 **AI-based Image Analysis** using Hugging Face VLM models
* 📷 **Upload & Preview** baby images in real time
* 📝 **Natural Language Description** of detected baby activity
* 🔔 **Alert System** for abnormal activity (e.g. crying)
* 👤 **Login & Register** system via `localStorage` (frontend only)
* ❌ **Analyze button disabled** until user is logged in
* 🐳 **Dockerized backend** with optional full-stack deployment
* 🎨 **Responsive Tailwind UI** with clean design

---

## 🧱 Tech Stack

| Layer    | Technology               |
| -------- | ------------------------ |
| Frontend | React (Vite) + Tailwind  |
| Backend  | Flask + Blueprint        |
| AI Model | Hugging Face (BLIP)      |
| Auth     | Context + localStorage   |
| Deploy   | Docker / Render / Vercel |

---

## 📁 Project Structure

```
VLMmonitor/
├── backend/
│ ├── routes/ # Flask Blueprints: generate_bp, auth_bp
│ ├── static/ # Output images
│ ├── app.py # Flask entry
│ ├── model_utils.py # BLIP model logic
│ └── requirements.txt
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/ # (optional)
│ │ ├── components/ # UploadForm, LoginForm, RegisterForm
│ │ └── context/ # AuthContext
│ ├── App.jsx / App.css
│ ├── main.jsx
│ └── index.css / index.html
├── .env
├── Dockerfile # Full-stack container
├── docker-compose.yml # Optional multi-service deploy
├── docker_test_log.md # Deployment log
├── README.md # You're here
└── .gitignore
```

---

## 🧪 Usage

### 1. 🔧 Local Development

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (in another terminal)
cd backend
pip install -r requirements.txt
python app.py
```

### 2. 🐳 Docker Fullstack Build & Run

```bash
docker build -t baby-monitor .
docker run -p 5000:5000 baby-monitor
```

Then open [http://localhost:5000](http://localhost:5000) in your browser.

---

## 🔐 Authentication System

* **Register & Login** are handled via `localStorage` (for demo purposes)
* No backend database is used; credentials are stored in-browser
* Users must log in to run inference
* Auto-logout and logout UI are supported

> *Note: Do not use real credentials. This is a frontend-only demo system.*

---

## 📸 Screenshots

<img width="2560" height="943" alt="image" src="https://github.com/user-attachments/assets/4cf14e26-5eaf-47a5-bf68-9494d3548668" />
<img width="2560" height="1193" alt="image" src="https://github.com/user-attachments/assets/0e40b583-8942-4b8b-97a1-9c7b5300928c" />
<img width="2560" height="1169" alt="image" src="https://github.com/user-attachments/assets/9edddb10-38f9-4cb9-afdb-2245afaa472a" />
<img width="2558" height="1269" alt="image" src="https://github.com/user-attachments/assets/e1c19d01-0279-42ce-963a-488cc48ab490" />
<img width="2560" height="381" alt="image" src="https://github.com/user-attachments/assets/5bd8b928-ef39-46b7-9cd5-cfce73a768ec" />









---

## 📦 Deployment Options

* **Option 1**: All-in-one Docker to [Render.com](https://render.com)
* **Option 2**: Vercel (frontend) + Render (backend API)
💻 Frontend: Deployed on Vercel

🧠 Backend/Model: Not deployed due to compute/memory limits on free Render plan. Model requires ~512Mi+ RAM for inference with blip-image-captioning-base.

---

## 🧠 Model Reference

* Hugging Face VLMs: [https://huggingface.co/docs/transformers/main/en/model_doc/llava](https://huggingface.co/docs/transformers/main/en/model_doc/llava)
* Paper: [https://arxiv.org/abs/2306.14895](https://arxiv.org/abs/2306.14895)

---

## 👤 Author

Jingwen Shang

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
smart-baby-monitor/
├── frontend/              # React frontend (Vite)
│   └── src/
│       └── components/    # UploadForm, LoginForm, RegisterForm
├── backend/               # Flask backend
│   ├── routes/            # generate_bp (image handling), auth_bp (optional)
│   └── model_utils.py     # VLM inference logic
├── static/                # Generated images (auto-saved)
├── Dockerfile             # Full-stack container
├── app.py                 # Flask entry point
└── README.md              # You are here
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

<img width="2560" height="1073" alt="image" src="https://github.com/user-attachments/assets/da1b6107-cc24-4dd6-8708-a838ce3c85d6" />
<img width="2560" height="1223" alt="f5b7d13c889f07a94d2ce9f2d5c26fa3" src="https://github.com/user-attachments/assets/d2c29adf-8c51-4eaa-a40e-fda2ae1f8e4d" />
<img width="2083" height="1350" alt="image" src="https://github.com/user-attachments/assets/ce0cb8a6-9a66-4fa9-a3cd-8b1f44329a44" />








---

## 📦 Deployment Options

* **Option 1**: All-in-one Docker to [Render.com](https://render.com)
* **Option 2**: Vercel (frontend) + Render (backend API)

> Deployment-ready. Contact points configurable in `.env` or fetch headers.

---

## 🧠 Model Reference

* Hugging Face VLMs: [https://huggingface.co/docs/transformers/main/en/model_doc/llava](https://huggingface.co/docs/transformers/main/en/model_doc/llava)
* Paper: [https://arxiv.org/abs/2306.14895](https://arxiv.org/abs/2306.14895)

---

## 👤 Author

Jingwen Shang — Smart Baby Monitor @ ECE 635 Course Pro

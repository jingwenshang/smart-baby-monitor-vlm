# Smart Baby Monitor using Visual Language Models (VLM)

A full-stack AI-powered baby monitoring application that uses Visual Language Models (VLMs) to detect and describe baby activities such as crying, sleeping, and playing from images. Designed with a React frontend and a Flask backend, the app provides natural language summaries and optional alerts based on baby behavior.


------

## 👀 Demo




https://github.com/user-attachments/assets/d95e7100-8b5c-46c7-bad2-c77a3afbd54e




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

## 🔪 Usage

### 1. 💻 Frontend Development (with Hugging Face API - Default)

```bash
cd frontend
npm install
npm run dev
```

> ⚠️ Make sure you’ve added your Hugging Face API token to a `.env` file:
>
> ```
> VITE_HF_TOKEN=hf_...
> ```
>
> This will launch the React frontend with image analysis handled by the Hugging Face `blip-image-captioning-base` model.

> 💡 If you do **not** wish to use Hugging Face and prefer running locally, simply:
> - **Comment out** the Hugging Face block in `UploadForm.jsx`
> - **Uncomment** the `/generate/` logic (already included & marked clearly)
> - Then run the backend as below.



### 2. 🧠 Local Flask Backend (Optional: Instead of Hugging Face)

If you prefer using your own Flask backend at `/generate/` (e.g., to run offline or for full control), you can:

1. **Uncomment** the `/generate/` logic in `UploadForm.jsx` (clearly marked in the file).
2. Start the backend manually:

```bash
cd backend
pip install -r requirements.txt
python app.py
```


### 3. 🐳 Docker Fullstack Build & Run

> This runs both frontend + backend inside one container. It does **not** use Hugging Face.
> Make sure you're using the `/generate/` version of `UploadForm.jsx`.

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

🚀 Option 1: Full Stack (Docker + Render)

❌ Not used due to memory limits on free Render tier.

The backend model (blip-image-captioning-base) requires more than 512MiB RAM for inference.

Render’s free plan does not support this reliably.

⚡ Option 2: Vercel (Frontend) + Hugging Face Inference API (Backend)

✅ Frontend
Hosted on Vercel:
🔗 https://smart-baby-monitor-vlm.vercel.app

✅ Backend (Model)
Powered by Hugging Face’s hosted inference endpoint using blip-image-captioning-base
Token managed securely via Vercel environment variables.

---

## 🧠 Model Reference

* Hugging Face VLMs: [https://huggingface.co/docs/transformers/main/en/model_doc/llava](https://huggingface.co/docs/transformers/main/en/model_doc/llava)
* Paper: [https://arxiv.org/abs/2306.14895](https://arxiv.org/abs/2306.14895)

---

## 👤 Author

Jingwen Shang

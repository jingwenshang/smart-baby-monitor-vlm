from flask import Blueprint, request, jsonify
import os
import requests
from werkzeug.utils import secure_filename

generate_bp = Blueprint("generate_bp", __name__)
HF_API_TOKEN = os.getenv("HF_API_TOKEN")  # set this in your backend .env

@generate_bp.route("/", methods=["POST"])
def generate():
  
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer mock-token-"):
        return jsonify({"error": "Unauthorized. Please log in first."}), 401

    if "image" not in request.files:
        return jsonify({"error": "No image uploaded."}), 400

    image_file = request.files["image"]
    filename = secure_filename(image_file.filename)

 
    output_dir = os.getenv("OUTPUT_DIR", "static/generated_images")
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, filename)
    image_file.save(output_path)

    
    try:
        headers = {
            "Authorization": f"Bearer {HF_API_TOKEN}",
            "Content-Type": image_file.mimetype
        }
        response = requests.post(
            "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base",
            headers=headers,
            data=open(output_path, "rb")  # or use image_file.stream
        )
        response.raise_for_status()
        result = response.json()
        caption = result[0].get("generated_text", "No description.")
    except Exception as e:
        print("🔥 Hugging Face API error:", str(e))
        return jsonify({"description": "Error from Hugging Face", "alert": False})


    CRYING_KEYWORDS = ["crying", "wailing", "screaming", "upset", "distress", "tears", "yelling"]
    alert = any(word in caption.lower() for word in CRYING_KEYWORDS)

    return jsonify({
        "description": caption,
        "alert": alert,
        "filename": filename
    })



// ============================
// 🧠 Want to run locally instead of using Hugging Face API?
// Comment out the Hugging Face section below, and UNCOMMENT this original version
// 👉 This block uses your own Flask backend at /generate/
// 👉 Useful if you don't want to deploy a model to Hugging Face
// ============================

/*
from flask import Blueprint, request, jsonify
from model_utils import predict_baby_activity
import os
from werkzeug.utils import secure_filename

generate_bp = Blueprint("generate_bp", __name__)

@generate_bp.route("/", methods=["POST"])
def generate():

    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer mock-token-"):
        return jsonify({"error": "Unauthorized. Please log in first."}), 401


    if "image" not in request.files:
        return jsonify({"error": "No image uploaded."}), 400

    image_file = request.files["image"]
    filename = secure_filename(image_file.filename)


    output_dir = os.getenv("OUTPUT_DIR", "static/generated_images")
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, filename)


    image_file.save(output_path)


    result = predict_baby_activity(output_path)
    result["filename"] = filename

    return jsonify(result)

*/

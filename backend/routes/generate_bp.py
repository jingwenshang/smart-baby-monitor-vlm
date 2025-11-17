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



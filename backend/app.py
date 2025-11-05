import os
from flask import Flask, send_from_directory
from flask_cors import CORS
from routes.generate_bp import generate_bp
from dotenv import load_dotenv
from routes.auth_bp import auth_bp

load_dotenv()

app = Flask(__name__, static_folder="../frontend/dist", static_url_path="/")
CORS(app)

app.config["OUTPUT_DIR"] = os.getenv("OUTPUT_DIR", "static/generated_images")
os.makedirs(app.config["OUTPUT_DIR"], exist_ok=True)



app.register_blueprint(generate_bp, url_prefix="/generate")
app.register_blueprint(auth_bp)



@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True)



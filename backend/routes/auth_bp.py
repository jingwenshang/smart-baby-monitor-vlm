from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth", __name__)

fake_users = {
    "testuser": "123456"
}

@auth_bp.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username in fake_users and fake_users[username] == password:
        return jsonify({"token": f"mock-token-{username}"}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401

@auth_bp.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username in fake_users:
        return jsonify({"error": "Username already exists"}), 400

    fake_users[username] = password
    return jsonify({"message": "User registered successfully"}), 201

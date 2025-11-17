import React, { useState, useRef, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UploadForm = ({ triggerLogin }) => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!token) {
      triggerLogin(); // preserve login modal logic
      return;
    }

    if (!image) return;

    setLoading(true);
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
          },
          body: image,
        }
      );

      const data = await response.json();
      const text = data?.[0]?.generated_text || "No description.";

      setResult({
        description: text,
        alert: text.toLowerCase().includes("crying"),
      });
    } catch (err) {
      console.error("Upload failed:", err);
      setResult({ description: "Error from Hugging Face", alert: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg space-y-6">
      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        <label className="text-lg font-medium text-gray-700">
          Upload a baby image:
        </label>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Upload Image
          </button>

          <span className="text-gray-600 text-sm">
            {image ? image.name : "No file selected"}
          </span>
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="hidden"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-auto rounded-lg border mt-2"
          />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          disabled={!image || loading}
        >
          {loading ? "Analyzing..." : "Analyze Baby Activity"}
        </button>
      </form>

      {result && (
        <div
          className={`p-4 rounded-md ${
            result.alert
              ? "bg-red-100 border border-red-400 text-red-700"
              : "bg-green-100 border border-green-400 text-green-700"
          }`}
        >
          <p className="text-lg font-semibold mb-2">
            📝 Description: {result.description}
          </p>
          {result.alert ? (
            <p className="font-bold text-lg">⚠️ ALERT: Baby might be crying!</p>
          ) : (
            <p className="font-bold text-lg">✅ Baby looks fine. No alert.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadForm;

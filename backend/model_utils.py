from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image
import torch

# Load processor and model
processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")
model = model.to("cuda" if torch.cuda.is_available() else "cpu")

# Define alert keywords
CRYING_KEYWORDS = ["crying", "wailing", "screaming", "distress", "upset", "yelling", "tears"]

def predict_baby_activity(image_path):
    try:
        image = Image.open(image_path).convert("RGB")
        inputs = processor(image, return_tensors="pt")
        inputs = {k: v.to(model.device) for k, v in inputs.items()}  # ✅ safe move

        output_ids = model.generate(**inputs)
        caption = processor.decode(output_ids[0], skip_special_tokens=True)

        alert = any(keyword in caption.lower() for keyword in CRYING_KEYWORDS)

        return {
            "description": caption,
            "alert": alert
        }

    except Exception as e:
        print("🔥 Model error:", e)
        return {
            "description": "Error from Hugging Face",
            "alert": False
        }

from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image
import torch


processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained(
    "Salesforce/blip-image-captioning-base"
).to("cuda" if torch.cuda.is_available() else "cpu")


CRYING_KEYWORDS = [
    "crying",
    "wailing",
    "screaming",
    "weeping",
    "sobbing",
    "upset",
    "distressed"
]

def predict_baby_activity(image_path):

    image = Image.open(image_path).convert("RGB")
    inputs = processor(image, return_tensors="pt").to(model.device)


    output_ids = model.generate(**inputs)
    caption = processor.decode(output_ids[0], skip_special_tokens=True)

    
    caption_lower = caption.lower()
    alert = any(word in caption_lower for word in CRYING_KEYWORDS)

    return {
        "description": caption,
        "alert": alert
    }

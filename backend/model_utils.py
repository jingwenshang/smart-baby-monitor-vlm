from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image
import torch

processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")
model = model.to("cuda" if torch.cuda.is_available() else "cpu")


CRYING_KEYWORDS = [
    "crying", "wailing", "screaming", "upset", "distress", "tears", "yelling"
]

def predict_baby_activity(image_path):
  
    image = Image.open(image_path).convert("RGB")
    inputs = processor(image, return_tensors="pt")
    inputs = {k: v.to(model.device) for k, v in inputs.items()}  # move to correct device


    output_ids = model.generate(**inputs)
    caption = processor.decode(output_ids[0], skip_special_tokens=True)


    alert = any(keyword in caption.lower() for keyword in CRYING_KEYWORDS)

    return {
        "description": caption,
        "alert": alert
    }

# smart-baby-monitor-vlm
ECE 635 Course Project: Smart Baby Monitor using VLM

# Smart Baby Monitor using Visual Language Models (VLM)

## Motivation
AI-powered baby monitoring can provide an extra layer of safety and peace of mind for parents. By leveraging Visual Language Models (VLMs), we aim to automatically detect and describe common baby activities (e.g., crying, sleeping, playing) from images or video frames.

## Design Goals
- Build a lightweight pipeline to process visual input and detect baby activity.
- Generate natural language descriptions for detected behavior.
- Optionally, trigger alerts if abnormal activity (e.g., crying) is detected.

## Deliverables
- A working codebase that:
  - Accepts an image or frame
  - Uses a VLM to classify baby activity
  - Outputs a short natural language summary
  - (Optional) Alerts when crying is detected

## System Blocks
- Image/Frame input module
- VLM inference engine (e.g., based on Hugging Face / LLaVA)
- Output summarization
- (Optional) Alert mechanism

## HW/SW Requirements
- Python 3.x
- Google Colab or local laptop with CUDA-enabled GPU
- Hugging Face Transformers, OpenCV, PyTorch

## Team Member Responsibilities
- Solo project by Jingwen
  - VLM research and implementation
  - Data collection/testing
  - Report writing and demo preparation

## Timeline
| Week | Task |
|------|------|
| Week 3 | Confirm project & setup repo |
| Week 4 | VLM research and basic prototype |
| Week 5 | Implement image-based activity classification |
| Week 6 | Add natural language output |
| Week 7 | (Optional) Add alert feature |
| Week 8 | Finalize and test demo |
| Week 9 | Prepare report |

## References
- Hugging Face VLM models: https://huggingface.co/docs/transformers/main/en/model_doc/llava
- https://arxiv.org/abs/2306.14895

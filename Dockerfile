FROM python:3.10-slim

RUN apt-get update && apt-get install -y \
    git \
    libgl1 \
    && rm -rf /var/lib/apt/lists/*


WORKDIR /app


COPY backend/ ./backend


COPY frontend/dist/ ./frontend/dist/


RUN pip install --upgrade pip \
 && pip install -r backend/requirements.txt


ENV OUTPUT_DIR=backend/static/generated_images


RUN mkdir -p backend/static/generated_images


CMD ["python", "backend/app.py"]

from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from docx import Document

from lib.unicode2krutidev import Unicode_to_KrutiDev

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://kruti-dev-converter.vercel.app/"],  # your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Temporary storage for uploaded/converted files
UPLOAD_DIR = "uploads"
CONVERTED_DIR = "converted"

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(CONVERTED_DIR, exist_ok=True)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "FastAPI backend is running!"}


@app.post("/convert")
async def convert_file(file: UploadFile = File(...)):
    # Save uploaded file
    upload_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(upload_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Read .docx file
    doc = Document(upload_path)

    # Convert text inside paragraphs
    for para in doc.paragraphs:
        para.text = Unicode_to_KrutiDev(para.text)

    # Save converted file
    converted_path = os.path.join(CONVERTED_DIR, "converted_" + file.filename)
    doc.save(converted_path)

    # Return the converted file
    return FileResponse(
        converted_path,
        filename="converted.docx",
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )

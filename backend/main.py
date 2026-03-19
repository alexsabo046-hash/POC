from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class LoginRequest(BaseModel):
    email: str
    password: str
    role: str

# TEST
@app.get("/")
def root():
    return {"message": "API running"}

# LOGIN
@app.post("/login")
def login(data: LoginRequest):
    return {
        "token": "sample_token",
        "role": data.role
    }
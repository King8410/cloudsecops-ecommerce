from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="CloudCart API",
    description="Secure e-commerce backend for the CloudSecOps project",
    version="1.0.0",
)

# Allow our React frontend to communicate with the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


products = [
    {
        "id": 1,
        "name": "Pro Wireless Headphones",
        "category": "Audio",
        "price": 129,
    },
    {
        "id": 2,
        "name": "Smart Watch Pro",
        "category": "Wearables",
        "price": 199,
    },
    {
        "id": 3,
        "name": "Mechanical Keyboard",
        "category": "Accessories",
        "price": 89,
    },
    {
        "id": 4,
        "name": "Ultra HD Monitor",
        "category": "Displays",
        "price": 299,
    },
]


@app.get("/")
def root():
    return {
        "application": "CloudCart",
        "status": "running",
        "security": "CloudSecOps",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "cloudcart-api",
    }


@app.get("/api/products")
def get_products():
    return products
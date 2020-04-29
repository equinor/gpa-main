import os


class Config:
    SECRET_KEY = os.environ.get("FLASK_SECRET_KEY", os.urandom(64))
    TESTING = False
    DATABASE_URI = os.environ.get("DATABASE_URI")
    PORT = os.environ.get("FLASK_RUN_PORT", 8080)

    LOG_LEVEL = os.environ.get("LOG_LEVEL", "INFO").upper()
    LNG_URL = os.environ.get("LNG_URL")

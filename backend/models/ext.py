# backend/models/ext.py
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import datetime, timezone

db = SQLAlchemy()
bcrypt = Bcrypt()

# For consistency, you can expose datetime & timezone
# (Your models use datetime.now(timezone.utc))

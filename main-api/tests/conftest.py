import pytest
from app import create_app
from config import Config
from database import Base
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

flask_app = create_app(Config).app

engine = create_engine(Config.DATABASE_URI, convert_unicode=True, echo=False)
session_factory = scoped_session(
    sessionmaker(autocommit=False, autoflush=False, bind=engine)
)


@pytest.fixture(scope="module")
def connection():
    conn = engine.connect()
    yield conn
    conn.close()


@pytest.fixture(scope="function")
def session(connection):
    session = session_factory(bind=connection)
    yield session
    session_factory.remove()


@pytest.fixture
def test_client(connection):
    Base.metadata.create_all(bind=connection)
    with flask_app.test_client() as client:
        yield client
    Base.metadata.drop_all(bind=connection)

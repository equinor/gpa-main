from sqlalchemy import (
    Column,
    DateTime,
    Float,
    ForeignKey,
    Integer,
    String,
    create_engine,
    func,
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, scoped_session, sessionmaker

Base = declarative_base()


def init_db(connection_string, echo=False):
    engine = create_engine(connection_string, convert_unicode=True, echo=echo)
    db_session = scoped_session(
        sessionmaker(autocommit=False, autoflush=False, bind=engine)
    )
    Base.query = db_session.query_property()
    return db_session, Base.metadata, engine


class Fluid(Base):
    __tablename__ = "fluid"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    components = relationship("Component", backref="fluid", uselist=True)
    created_date = Column(DateTime, server_default=func.now())


class Component(Base):
    __tablename__ = "component"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    value = Column(Float, nullable=False)
    fluid_id = Column(Integer, ForeignKey("fluid.id"))

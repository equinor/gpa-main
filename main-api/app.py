import connexion
from config import Config
from database import init_db
from gpa_api.encoder import JSONEncoder


def create_app(config):
    specification_dir = "openapi/"
    connexion_app = connexion.App(__name__, specification_dir=specification_dir)
    flask_app = connexion_app.app
    flask_app.json_encoder = JSONEncoder
    flask_app.config.from_object(config)
    flask_app.logger.setLevel(config.LOG_LEVEL)
    (flask_app.db_session, flask_app.db_metadata, flask_app.db_engine,) = init_db(
        config.DATABASE_URI
    )
    connexion_app.add_api("api.yaml", pythonic_params=True)

    @flask_app.teardown_appcontext
    def shutdown_session(exception=None):
        flask_app.db_session.remove()

    return connexion_app


if __name__ == "__main__":
    app = create_app(Config)
    app.run(port=app.app.config["PORT"], extra_files=["./openapi/api.yaml"])

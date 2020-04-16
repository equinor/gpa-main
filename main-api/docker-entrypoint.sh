#!/usr/bin/env sh

# Wait until the service is ready before continuing.
# This is to ensure that the service is initialized before the API tries to connect.
service_is_ready() {
    NAME=$1
    HOST=$2
    DB_PORT=$3
    # echo "Using service $NAME: $HOST:$PORT"
    i=1
    while ! nc -z $HOST $DB_PORT; do
        sleep 1
        i=$((i+1));
        if [ $i -eq 600 ]; then
            echo "Service $NAME '$HOST:$DB_PORT' not responding. Exiting..."
            exit 1
        fi;
    done
}

service_is_ready "DATABASE" ${DATABASE_HOST} ${DATABASE_PORT}

if [ "$1" = 'api' ]; then
  OLD_PYTHONPATH=$PYTHONPATH
  export PYTHONPATH=$PYTHONPATH:/code
  alembic upgrade head
  export PYTHONPATH=$OLD_PYTHONPATH
  echo $PYTHONPATH
  echo $OLD_PYTHONPATH

	python app.py
	exit $?
fi

if [ "$1" = 'alembic' ]; then
  export PYTHONPATH=$PYTHONPATH:/code
fi

exec "$@"

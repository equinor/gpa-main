FROM python:3.8

ARG GPA_USER=1000
ARG GPA_GROUP=1000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    netcat \
 && rm -rf /var/lib/apt/lists/*

RUN addgroup --gid $GPA_GROUP gpa \
    && adduser --uid $GPA_USER --gid $GPA_USER --system gpa

COPY requirements.txt /usr/src/app/

RUN pip3 install --no-cache-dir -r requirements.txt

COPY . /usr/src/app

USER gpa

EXPOSE 8080

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]
CMD ["api"]

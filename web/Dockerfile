FROM node:10-alpine as builder

ARG UID=1000
ARG GID=1000
RUN deluser --remove-home node \
 && addgroup -S neqsim -g $GID \
 && adduser -u $UID -G neqsim -S neqsim \
 && mkdir /code \
 && chown neqsim:neqsim /code

USER neqsim
WORKDIR /code

COPY --chown=neqsim:neqsim package.json package-lock.json ./

RUN npm ci --only=production

COPY --chown=neqsim:neqsim . ./

RUN npm run build

EXPOSE 3000

FROM nginx

COPY --from=builder /code/build /var/www/data
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

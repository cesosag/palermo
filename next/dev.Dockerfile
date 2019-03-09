FROM node:lts
LABEL maintainer="cesosag@gmail.com"

ARG PORT

ENV PORT "${PORT}"

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

WORKDIR /app/

RUN yarn

COPY . /app/

EXPOSE ${PORT}
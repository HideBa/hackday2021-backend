FROM node:lts-alpine

ARG PORT=3000
ENV PORT=$PORT
EXPOSE $PORT

WORKDIR /opt/app

COPY . .

COPY package.json .
COPY yarn.lock .

RUN yarn install --prod

CMD [ "sh", "-c", "yarn start -p ${PORT}" ]
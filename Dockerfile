FROM node:10-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
COPY .env ./dist/
WORKDIR /usr/app/dist

EXPOSE 4000
CMD node main.js
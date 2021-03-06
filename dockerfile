FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY source dest

EXPOSE 3000

CMD npm start

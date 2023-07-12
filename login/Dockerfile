FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm build

EXPOSE 3001

CMD ["npm", "serve", "--host", "0.0.0.0"]


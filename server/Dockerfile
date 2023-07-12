FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 8000

CMD [ "pnpm", "start" ]

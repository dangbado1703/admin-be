FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install typescript -g

RUN npm run build

CMD ["npm", "run", "start"]

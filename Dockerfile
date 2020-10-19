FROM node:12.18.3

RUN mkdir -p /usr/Joce/
WORKDIR /usr/Joce

COPY package*.json /usr/Joce/
RUN npm install

EXPOSE 3000
COPY . .

CMD [ "npm run dev",  "redis-server"]

#Dockerfile
# PROD CONFIG
FROM node:14 as prod

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV=production

EXPOSE 6060

CMD [ "yarn", "start" ]
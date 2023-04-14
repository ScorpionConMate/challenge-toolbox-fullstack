FROM node:18.9-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm i
# add curl
RUN apk add --no-cache curl
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]

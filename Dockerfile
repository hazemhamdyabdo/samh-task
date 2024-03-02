# base image, first stage of building Nuxt image 
FROM node:hydrogen-alpine3.19 as builder
RUN mkdir -p /app 

WORKDIR /app

COPY package.json /app/
RUN npm install
COPY . /app/
RUN npm run build 

# final stage 
FROM nginx:alpine3.18-perl 

COPY  --from=builder /app/dist/smah-task /user/share/nginx/html
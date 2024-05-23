FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]


#FROM nginx:stable-alpine
#COPY --from=build /app/dist /usr/share/nginx/html
#COPY --from=build /app/.nginx/nginx.conf /etc/nginx/sites-enabled/default
#
#ENTRYPOINT ["nginx", "-g", "daemon off;"]


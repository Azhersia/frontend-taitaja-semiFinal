FROM node
 
WORKDIR /app
 
COPY package*.json ./

RUN rm -rf node_modules package-lock.json .next
 
RUN npm install 
 
COPY . .
 
RUN npm run build
 
EXPOSE 80
 
CMD ["npm", "start"]
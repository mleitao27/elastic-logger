FROM node:latest
WORKDIR /usr/src/app/elastic-logger-server
COPY . ./
RUN npm install
EXPOSE 5000
CMD ["npm", "run", "dev"]
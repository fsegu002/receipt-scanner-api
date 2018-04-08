FROM node:8.9.4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080


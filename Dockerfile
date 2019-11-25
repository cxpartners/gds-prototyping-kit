# Use an official Node runtime as a parent image If you are using Node.js in production use an LTS version. [source](https://medium.com/@nodejs/october-brings-node-js-10-x-to-lts-and-node-js-11-to-current-ae19f8f12b51)
FROM node:10

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Prevent privilege escalation attacks by configuring container to use unprivileged user (XDXjfwtfYYymOfrX)
# RUN groupadd -r XDXjfwtfYYymOfrX && useradd -r -g XDXjfwtfYYymOfrX XDXjfwtfYYymOfrX

# best practice is to copy your package.json and package-lock.json before you copy your code into the container
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app
COPY . .

# Use user
#USER XDXjfwtfYYymOfrX

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run when the container launches
ENTRYPOINT ["npm", "run", "start"]

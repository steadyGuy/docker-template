FROM node:16-alpine3.11

# Any RUN, CMD, ADD, COPY, or ENTRYPOINT command will be executed in the specified working directory.
# If the WORKDIR command is not written in the Dockerfile, it will automatically be created by the Docker compiler. 
# Hence, it can be said that the command performs mkdir and cd implicitly.
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

# EXPOSE 3001

# CMD ["yarn", "server"]
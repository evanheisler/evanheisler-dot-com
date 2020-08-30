FROM node:12

# real life working directory cmds use
RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN yarn

# Files come from volumes during HMR
# COPY . .

CMD ["yarn", "dev"]
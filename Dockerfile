FROM node:12

# real life working directory cmds use
WORKDIR /client

COPY client/package*.json /client

RUN yarn

COPY client /client

RUN yarn build

CMD ["yarn", "start"]
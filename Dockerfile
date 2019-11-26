FROM node:12

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
WORKDIR /app
ADD package.json yarn.lock /app/
COPY . /app

RUN yarn && yarn build
EXPOSE 3000
USER node
CMD ["yarn", "start"]
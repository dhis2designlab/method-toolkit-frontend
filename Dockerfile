FROM node:16-alpine3.11
WORKDIR /method-toolkit-frontend

COPY package.json /method-toolkit-frontend/package.json
COPY yarn.lock /method-toolkit-frontend/yarn.lock

ENV PATH /app/node_modules/.bin:$PATH

COPY . .
RUN yarn build

CMD ["yarn", "start"]
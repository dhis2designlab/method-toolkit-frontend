FROM node:16-alpine3.11
WORKDIR /method-toolkit-frontend

ENV PATH="./node_modules/.bin:$PATH"

COPY . .
RUN yarn build

CMD ["yarn", "start"]
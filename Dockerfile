FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN yarn

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

RUN yarn build

CMD [ "yarn", "start" ]

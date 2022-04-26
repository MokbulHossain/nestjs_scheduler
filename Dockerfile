FROM node:12.19.0-alpine3.9 AS development

# Create app directory
WORKDIR /home/ubuntu/akash/akash_scheduler

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install

#RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:12.19.0-alpine3.9 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/ubuntu/akash/akash_scheduler

COPY package*.json ./

RUN npm install

#RUN npm install --only=production

COPY . .

COPY --from=development /home/ubuntu/akash/akash_scheduler/dist ./dist

CMD ["node", "dist/main"]
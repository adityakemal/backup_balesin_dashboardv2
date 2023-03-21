FROM node:16

# Create app directory
WORKDIR /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
RUN yarn build

EXPOSE 8010
CMD [ "yarn", "start" ]

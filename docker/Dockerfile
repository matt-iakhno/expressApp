FROM node:22.12-alpine

# set our default port
ARG PORT=3000
# compose can override this on build and run
ENV PORT=$PORT

# set our node environment, either development or production
ARG NODE_ENV=production
# defaults to production, compose overrides this to development on build and run
ENV NODE_ENV=$NODE_ENV

# Create app directory
WORKDIR /app

COPY ../package*.json ./
RUN npm ci

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK --interval=30s \
#   CMD node healthCheck.js

# copy in the remainder of our source code last
COPY . .

# 9229 and 9230 (tests) for debug
EXPOSE $PORT 9229 9230

CMD [ "node", "src/index.js" ]

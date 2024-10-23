
FROM node:22-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install && \
    npm install --save-dev @babel/helper-compilation-targets && \
    npm install --save-dev @babel/core


COPY . .


EXPOSE 3000


ENV CI=true


CMD ["npm", "start"]
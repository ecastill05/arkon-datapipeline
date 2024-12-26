FROM node:16

WORKDIR /app

# Copy package.json 
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

EXPOSE 3002

CMD ["node", "server.js"]
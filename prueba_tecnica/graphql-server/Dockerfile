FROM node:16

WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Apollo Server will use
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]

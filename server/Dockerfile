# Backend Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy application code
COPY . .

# Expose port
EXPOSE 3001

# Create directory for data
RUN mkdir -p /app/data

# Start the server
CMD ["node", "server.js"]


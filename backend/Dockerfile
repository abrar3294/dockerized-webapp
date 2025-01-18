# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose the port for the API
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]

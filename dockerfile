# Use an official Node.js image to build the React application
FROM node:18 AS build

# Set the working directory inside the container
# This is where all commands will run relative to
WORKDIR /app

# Copy the package.json and package-lock.json files
# These files are used to install the required dependencies
COPY package.json ./

# Install the project dependencies
# npm install will download all libraries needed for React to work
RUN npm install

# Copy the remaining application files to the container
# This includes the React app source code and any other files
COPY . .

# Build the React application for production
# This generates optimized static files in the `build/` directory
RUN npm run build


# Stage 2: Serve the built React app using Nginx
# This is the second stage of a multi-stage Docker build
FROM nginx:alpine

# Copy the built files from the first stage (build) to Nginx's default web directory
# /usr/share/nginx/html is where Nginx serves files from
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to make the app accessible to the host machine
# This is the default HTTP port
EXPOSE 80

# Run Nginx in the foreground (daemon off)
# This ensures the container keeps running
CMD ["nginx", "-g", "daemon off;"]



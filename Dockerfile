# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you use Yarn)
COPY package*.json ./

# Install dependencies
# Using npm ci for cleaner, more reliable builds in CI/CD environments
# It requires a package-lock.json or npm-shrinkwrap.json file
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
# Make sure your package.json has a "build" script, e.g., "vite build"
RUN npm run build

# Stage 2: Serve the application using a lightweight Node.js server
FROM node:18-alpine

WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/dist ./dist

# Install 'serve' to serve static files
RUN npm install -g serve

# Expose the port the app will run on. Cloud Run sets the PORT env variable (default 8080).
EXPOSE 8080

# Command to run the application
# -s flag serves the 'dist' folder as a single-page application (handles routing for SPAs)
# -l specifies the listen address. Cloud Run requires listening on 0.0.0.0 and the PORT env var.
# 'serve' will automatically use the PORT environment variable if set.
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:${PORT}"]
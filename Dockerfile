# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies and build the Vite app
COPY package.json package-lock.json* ./
COPY tsconfig.json vite.config.ts ./
COPY . .
RUN npm ci
RUN npm run build

# Runtime stage
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only what's needed from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./server.ts

EXPOSE 3000
CMD ["npx", "tsx", "server.ts"]

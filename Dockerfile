# Dockerfile for GVL2025 Next.js App

# ---- Base Stage ----
# Use a specific Node.js version for reproducibility.
# Alpine Linux is used for its small size.
FROM node:20-alpine AS base

# Set the working directory in the container.
WORKDIR /app

# Install necessary packages.
# libc6-compat is required for Next.js on Alpine.
RUN apk add --no-cache libc6-compat

# ---- Dependencies Stage ----
# This stage is for installing npm dependencies.
# It's a separate stage to take advantage of Docker's layer caching.
FROM base AS deps

COPY package.json package-lock.json* ./

# Use 'npm ci' for clean, reproducible builds from package-lock.json.
RUN npm ci

# ---- Builder Stage ----
# This stage builds the Next.js application.
FROM base AS builder

ARG NEXT_PUBLIC_FIREBASE_API_KEY
ARG NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ARG NEXT_PUBLIC_FIREBASE_PROJECT_ID
ARG NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ARG NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ARG NEXT_PUBLIC_FIREBASE_APP_ID
ARG NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

# Copy dependencies from the 'deps' stage.
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application source code.
COPY . .

RUN NEXT_PUBLIC_FIREBASE_API_KEY=${NEXT_PUBLIC_FIREBASE_API_KEY} \
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN} \
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=${NEXT_PUBLIC_FIREBASE_PROJECT_ID} \
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET} \
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID} \
    NEXT_PUBLIC_FIREBASE_APP_ID=${NEXT_PUBLIC_FIREBASE_APP_ID} \
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=${NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID} \
    npm run build

# Build the Next.js application.
# This will use the 'build' script from your package.json.
#RUN npm run build

# ---- Runner Stage ----
# This is the final stage that will run the application.
FROM base AS runner

ENV NODE_ENV production

# Create a non-root user for security purposes.
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the built application from the 'builder' stage.
# Next.js with `output: 'standalone'` copies all necessary files here.
#COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080

ENV PORT 8080

CMD ["node", "server.js"]
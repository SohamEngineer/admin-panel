# ---------- BASE ----------
FROM node:20-alpine AS base
WORKDIR /app

# ---------- DEPENDENCIES ----------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---------- BUILD ----------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- RUNNER ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Only copy what's needed to run
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]

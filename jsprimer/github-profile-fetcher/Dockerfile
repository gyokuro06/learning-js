FROM node:18.15-bullseye-slim as deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18.15-bullseye-slim as builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# FROM node:18.15-bullseye-slim
# WORKDIR /app
# ENV NODE_ENV production
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/package.json ./package.json
# EXPOSE 13730
# CMD [ "npm", "run", "dev", "--host" ]

FROM nginx:1.23-alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
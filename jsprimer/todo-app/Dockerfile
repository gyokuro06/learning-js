FROM node:18.15-bullseye-slim as deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18.15-bullseye-slim as builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM nginx:1.23-alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

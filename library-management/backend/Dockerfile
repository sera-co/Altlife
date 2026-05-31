FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json ./
# Copy lockfile if present (optional)
COPY package-lock.json ./
RUN npm install --omit=dev



# Copy source
COPY src ./src

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

CMD ["node", "src/start.js"]



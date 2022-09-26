# Stage-1-testing
FROM node:16.1 as react-build
WORKDIR /app
COPY . ./
EXPOSE 3000
RUN npm build
CMD ["npm", "run", "build"]



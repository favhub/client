# my-tv-shows-status

A project made for fun and as an excuse to learn Vue.js, and since i needed a database to store my data why not learn some backend stuff too?

I like to keep track of my favorite tv shows on a text file, so i decided to build this web application instead of continuing to update the boring text files.

## The main technologies used are:

#### Frontend

- Vue.js with Vue Loader, Vue Router and Vuex
- Sass
- webpack

#### Backend

- Node.js with Express and mongoose
- MongoDB

## Dependencies

- Node.js
- [node-gyp](https://github.com/nodejs/node-gyp) and its dependencies
- MongoDB

## Build Setup

```bash
# install dependencies
npm run install-all

# rename server/.env.example into server/.env

# run your MongoDB server

# if you need seed data (requires mongodb tool mongorestore installed on your machine)
# username: test, password: test
npm run seed-data

# serve with hot reload at localhost:8080 and localhost:3000
npm run all
```

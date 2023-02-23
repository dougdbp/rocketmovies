# Rocketmovies

A Node.js "Movie Review App" API  to request and response by http protocol and modify DB

## Tech Stack Dependencies

**Server:** Node.js, Express.js, Bcrypt.js, Knex.js, Nodemon .
## Installation (Test only)

You will need a application like Insomnia to do the requests and see the responses. (The database can be deleted, the app will always re-criate a new DB by itself.)

To install the dependencies with NPM:

```bash
  npm install
```
After this, you will create the Tables inside the Database by this line:

```bash
  npm run migrate
```

Now, you can create a server to develop or to use the API by this 2 codes:
```bash
  npm run dev
```
or
```bash
  npm start
```

To stop the server: ```Ctrl + C``` at the terminal.
## Authors

- Dev: Douglas B Peixoto.

- Instagram ([@bulldog.dev](https://www.instagram.com/bulldog.dev))

- [Github](https://github.com/dougdbp)
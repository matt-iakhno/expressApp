//If you mess up Dockerfile ordering
// you'll see long build times on every code change + build. If done correctly,
// code changes should be only a few seconds to build locally due to build cache.
const express = require('express');
const videoRoutes = require('./routes/videoRoutes');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const secret = process.env.SECRET;

const app = express();

// Middleware
app.use(express.json());
app.use('/', videoRoutes);

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server. Secret is: ' + secret);
});

app.get("/healthz", function (req, res) {
  // do app logic here to determine if app is truly healthy
  // you should return 200 if healthy, and anything else will fail
  // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send("I am happy and healthy, port %s, secret %s \n", port, secret);
});


module.exports = app;
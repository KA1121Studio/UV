const express = require('express');
const { createBareServer } = require('@tomphttp/bare-server-node');

const app = express();
const bareServer = createBareServer('/bare/');

app.use(express.static('public'));
app.use('/uv', express.static('uv'));

// Bare server を HTTP upgrade & fetch に接続
app.use((req, res, next) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    next();
  }
});

app.on('upgrade', (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Running on port ' + port);
});

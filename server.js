const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/uv', express.static('uv'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Running on port ' + port);
});

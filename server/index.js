const express = require('express');
const app = express();
const port = 7474;

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(port, function() {
  console.log('server is running on', port)
});

const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);

app.get('/', (req,res) => {
  res.send('running')
})

app.listen(PORT, function() {
  console.log('server is running on', PORT)
});

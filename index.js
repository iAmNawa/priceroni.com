const express = require('express');
require('./services/passport');
const app = express();
const PORT = process.env.PORT || 5000;

require('./routes/authRoutes')(app);

app.get('/', (req,res) => {
  res.send('running')
})

app.listen(PORT, function() {
  console.log('server is running on', PORT)
});

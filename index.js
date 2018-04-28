const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

authRoutes(app);

app.get('/', (req,res) => {
  res.send('running')
})

app.listen(PORT, function() {
  console.log('server is running on', PORT)
});

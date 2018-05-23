const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require ('./models/User');
require('./services/passport');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI);

app.use(bodyParser.json())
app.use(
  cookieSession({
    // this cookie will last 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  //  Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get('/', (req,res) => {
  res.send('running')
})

app.listen(PORT, function() {
  console.log('server is running on', PORT)
});

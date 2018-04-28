const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/', (req,res) => {
  res.send('running')
})

app.listen(PORT, function() {
  console.log('server is running on', PORT)
});

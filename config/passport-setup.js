const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

passport.use(
  new GoogleStrategy(
    {
      callbackURL: CALLBACK_URL_GOOGLE,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    () => {
      // call back that will fire once the google starts
    }
  )
);

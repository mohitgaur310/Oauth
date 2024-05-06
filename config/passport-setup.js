const passport = require("passport");
require("dotenv").config();
const { register, findUser } = require("../service/user-service");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  findUser(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      done(error, null);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.CLIENT_ID}`,
      clientSecret: `${process.env.CLIENT_SECRET}`,
      callbackURL: `${process.env.CALLBACK_URL_GOOGLE}`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const data = await register(profile);
        if (data) done(null, data);
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  )
);

const passport = require("passport");
require("dotenv").config();
const { register, findUser } = require("../service/user-service");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  console.log("Deserializing user ID:", id);
  findUser(id)
    .then((user) => {
      console.log("Found user:", user);
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
      console.log("callback fired for google passport");
      console.log("profile", profile);
      try {
        console.log("done====>", done);
        const data = await register(profile);
        if (data) done(null, data);
        console.log("Data:", data);
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  )
);

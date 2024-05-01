const passport = require("passport");
require("dotenv").config();
const register = require("../service/user-service");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

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
        const data = await register(profile, done);
        console.log("Data:", data);
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  )
);

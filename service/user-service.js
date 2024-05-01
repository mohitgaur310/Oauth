const { create, findOne } = require("../dal/dal");
const User = require("../model/user-model");
const register = async (profile, done) => {
  if (!profile) return null;

  const existingUser = await findOne(User, {
    googleId: profile.emails[0]?.value,
  });
  console.log("existingUser===>>", existingUser._id);
  if (existingUser) {
    done(null, existingUser._id);
    console.log("user existing");
    // return null;
  }

  const data = {
    username: profile.displayName,
    googleId: profile.emails[0]?.value,
  };

  const response = await create(User, data);
  if (!response) return null;
  done(null, response._id);
  return await response;
};

module.exports = register;

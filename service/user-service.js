const { create } = require("../dal/dal");
const User = require("../model/user-model");
const register = async (profile) => {
  if (!profile) return null;

  const data = {
    username: profile.displayName,
    googleId: profile.emails[0]?.value,
  };

  const response = await create(User, data);
  return await response;
};

module.exports = register;

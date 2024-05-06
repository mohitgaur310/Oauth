const { create, findOne } = require("../dal/dal");
const User = require("../model/user-model");
const register = async (profile) => {
  if (!profile) return null;

  const existingUser = await findOne(User, {
    googleId: profile.emails[0]?.value,
  });

  if (existingUser) {
    return existingUser;
  }

  const data = {
    username: profile.displayName,
    googleId: profile.emails[0]?.value,
    imageUrl: profile.picture,
  };

  const response = await create(User, data);
  if (!response) return null;

  return await response;
};

const findUser = async (id) => {
  try {
    const user = await findOne(User, { _id: id });
    if (!user) return null;

    return user;
  } catch (error) {}
};
module.exports = { register, findUser };

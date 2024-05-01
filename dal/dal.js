const create = async (model, data) => {
  return await model.create(data);
};

const findOne = async (model, filter, projection = {}, populate = null) => {
  return await model.findOne(filter, projection, { populate: populate });
};

module.exports = { create, findOne };

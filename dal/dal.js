const create = async (model, data) => {
  return await model.create(data);
};

module.exports = { create };

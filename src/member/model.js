let members = require("../../database.json");

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(members);
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    const member = members.find((m) => m.id === id);
    if (member) resolve(member);
    else reject("member not found");
  });
};

module.exports = {
  findAll,
  findById,
};

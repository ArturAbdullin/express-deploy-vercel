const Members = require("./model");

const getAllMembers = async (req, res) => {
  res.json(await Members.findAll());
};

const getMember = async (req, res) => {
  try {
    res.json(await Members.findById(req.params.id));
  } catch (err) {
    res.status(404);
    res.send(`can't find member with the id of ${req.params.id}`);
  }
};

module.exports = {
  getAllMembers,
  getMember,
};

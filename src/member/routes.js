const router = require("express").Router();
const { getAllMembers, getMember } = require("./controller");

router.get("/", getAllMembers);
router.get("/:id", getMember);

module.exports = router;

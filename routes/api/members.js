const express = require("express");
const router = express.Router();
const members = require("../../Members");

// Gets all Members
router.get("/", (req, res) => {
	res.json(members);
});

// Gets Single Member
router.get("/:id", (req, res) => {
  const member = members.find((m) => m.id === parseInt(req.params.id));
  if (member) {
    res.json(member);
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
  }
});

module.exports = router;

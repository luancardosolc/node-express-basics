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
		res.status(400).json({
			msg: `No member with the id of ${req.params.id}`,
		});
	}
});

// Create Member
router.post("/", (req, res) => {
	const memberWithHighestId = members.reduce((prev, current) => {
		return prev.id > current.y ? prev : current;
	});

	const newMember = {
		id: memberWithHighestId.id + 1,
		name: req.body.name,
		email: req.body.email,
		status: "active",
	};

	if (!newMember.name || !newMember.email) {
		return res.json(newMember);
	}

	members.push(newMember);
	res.json(newMember);
});

// Update Member
router.put("/:id", (req, res) => {
	const member = members.find((m) => m.id === parseInt(req.params.id));
  const indexOfMember = members.findIndex(m => m.id === member.id);

	if (member) {
    const updMember = req.body;
    member.email = updMember.email;
    member.name = updMember.name;
    member.status = updMember.status;
    members[indexOfMember] = member;
		res.json(member);
	} else {
		res.status(400).json({
			msg: `No member with the id of ${req.params.id}`,
		});
	}
});

module.exports = router;

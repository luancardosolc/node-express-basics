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
	console.log("highestId", memberWithHighestId.id);

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

module.exports = router;

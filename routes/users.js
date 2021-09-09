const router = require("express").Router();
// User Model
const User = require("../models/User");
// Bcrypt
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
	res.send("Hey it's userRoutes");
});

// UPDATE USER
router.put("/:id", async (req, res) => {
	if (req.body.userId === req.params.id || req.user.isAdmin) {
		// User wants to update their password
		if (req.body.password) {
			try {
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(req.body.password, salt);
			} catch (error) {
				return res.status(500).json(error);
			}
		}
		try {
			const user = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			});
			res.status(200).json("Your account has been updated");
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json("You can only update your own account!");
	}
});

// DELETE USER

// GET A USER

// FOLLOW A USER

// UNFOLLOW A USER
module.exports = router;

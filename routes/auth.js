const router = require("express").Router();
// User Model
const User = require("../models/User");

router.get("/", (req, res) => {
	res.send("Hey it's authRoutes");
});

// REGISTER USER
router.post("/register", async (req, res) => {
	const user = await new User({
		username: "john",
		email: "john@gmail.com",
		password: "123456",
	});

	await user.save();
});

module.exports = router;

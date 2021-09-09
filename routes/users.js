const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("Hey it's userRoutes");
});

module.exports = router;

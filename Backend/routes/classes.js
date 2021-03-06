const router = require("express").Router();
const Class = require("../models/class.model");

// Add Class
router.route("/").post((req, res) => {
	const { courseCode, faculty, building, time } = req.body;
	Class.create({ courseCode, faculty, building, time })
		.then((result) => {
			res.json({ status: "Success" });
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

// Returns Array of classes with the courseCode
router.route("/:courseCode").get((req, res) => {
	Class.find({ courseCode: req.params.courseCode })
		.then((result) => {
			console.log("Success");
			res.json({ status: "Success", data: result });
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

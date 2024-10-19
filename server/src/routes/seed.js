const seed = require("./../utils/seed");
const router = require("express").Router();

router.get("/admin", async (req, res) => {
	await seed.seedAdmin();
	res.send("Admin seeded successfully");
});

router.get("/mentor", async (req, res) => {
	await seed.seedMentor();
	res.send("Mentor seeded successfully");
});

router.get("/student", async (req, res) => {
	await seed.seedStudents();
	res.send("Student seeded successfully");
});

router.get("/all", async (req, res) => {
	await seed.seedAll();
	res.send("All seeded successfully");
});

module.exports = router;

const Admin = require("./../models/Admin");
const Mentor = require("./../models/Mentor");
const Student = require("./../models/Student");
const bcrypt = require("bcryptjs");

const seedAdmin = async () => {
	try {
		const admin = await Admin.findOne({ email: "admin@gmail.com" });
		if (!admin) {
			const newAdmin = new Admin({
				email: "admin@gmail.com",
				password: await bcrypt.hash("password", 8),
				firstname: "Gerald",
				middlename: "J",
				lastname: "Mwangi",
				isEmailVerified: true,
			});
			await newAdmin.save();
			console.log("Admin seeded successfully");
		}
	} catch (error) {
		console.log("Error while seeding admin", error);
	}
};

const seedMentor = async () => {
	const designations = ["Senior Mentor", "Junior Mentor", "Intern"];
	const departments = ["CSE", "ECE", "ME", "CE", "EE"];
	try {
		const mentor = await Mentor.findOne({
			email: "mentor1@educonnect.com",
		});
		if (!mentor) {
			for (let i = 0; i < 5; i++) {
				const newMentor = new Mentor({
					email: "mentor" + i + "@educonnect.com",
					password: await bcrypt.hash("password", 8),
					firstname: "John",
					middlename: new String(i),
					lastname: "Doe",
					isEmailVerified: true,
					designation:
						designations[
							Math.floor(Math.random() * designations.length)
						],
					department:
						departments[
							Math.floor(Math.random() * departments.length)
						],
				});
				await newMentor.save();
				console.log("Mentor seeded successfully");
			}
		}
	} catch (error) {
		console.log("Error while seeding mentor", error);
	}
};

const seedStudents = async () => {
	const branches = ["CSE", "ECE", "ME", "CE", "EE"];
	try {
		const student = await Student.findOne({
			email: "student1@educonnect.com",
		});
		if (!student) {
			for (let i = 0; i < 10; i++) {
				const newStudent = new Student({
					email: "student" + i + "@educonnect.com",
					password: await bcrypt.hash("password", 8),
					firstname: "Jane",
					middlename: new String(i),
					lastname: "Doe",
					isEmailVerified: true,
					department:
						branches[Math.floor(Math.random() * branches.length)],
				});
				await newStudent.save();
				console.log("Student seeded successfully");
			}
		}
	} catch (error) {
		console.log("Error while seeding student", error);
	}
};

const seedAll = async () => {
	await seedAdmin();
	await seedMentor();
	await seedStudents();
};

module.exports = { seedAdmin, seedMentor, seedStudents, seedAll };

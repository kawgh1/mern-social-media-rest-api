const express = require("express");
const app = express();

// import libraries
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const multer = require("multer");
const router = express.Router();
const path = require("path");

// Route Configs
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// setup dotenv
dotenv.config();

// mongoose connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
	console.log("connected to MongoDB Cloud!");
});

// set assets
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Base examples - not used since we are making Rest API
// app.get("/", (req, res) => {
// 	res.send("Welcome to Home Page");
// });

// app.get("/users", (req, res) => {
// 	res.send("Welcome to Users Page");
// });

// storage and file upload
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
	try {
		return res.status(200).json("File uploaded successfully");
	} catch (error) {
		console.error(error);
	}
});

// Set routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

// set to listen on port 8800
app.listen(8800, () => {
	console.log("Backend server is running!");
});

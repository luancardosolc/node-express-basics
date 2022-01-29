const express = require("express");
const path = require("path");
const moment = require("moment");
const members = require("./Members");

const app = express();

// app.get('/simpleSend', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
// });

// app.get('/sendFile', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const logger = (req, res, next) => {
	console.log(
		"logger middleware",
		`${req.protocol}://${req.get("host")}${
			req.originalUrl
		}: ${moment().format()}`
	);
	next();
};

// Init middleware
app.use(logger);

// Gets all members
app.get("/api/member", (req, res) => {
	res.json(members);
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

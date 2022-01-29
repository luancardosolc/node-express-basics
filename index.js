const express = require("express");
const path = require("path");
const members = require("./Members");
const logger = require("./middleware/logger");

const app = express();

// app.get('/simpleSend', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
// });

// app.get('/sendFile', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Init middleware
// app.use(logger);

// Gets all Members
app.get("/api/member", (req, res) => {
	res.json(members);
});

// Gets Single Member
app.get("/api/member/:id", (req, res) => {
  const member = members.find((m) => m.id === parseInt(req.params.id));
  if (member) {
    res.json(member);
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
  }
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

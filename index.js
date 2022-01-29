const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');

// const logger = require("./middleware/logger");

const app = express();

// app.get('/simpleSend', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
// });

// app.get('/sendFile', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Init Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handlebars routes
app.get('/', (req, res) => {
  res.render('index');
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

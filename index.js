const express = require('express');
const path = require('path');

const app = express();

// app.get('/simpleSend', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
// });

// app.get('/sendFile', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

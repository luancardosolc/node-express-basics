const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

// app.get('/simpleSend', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
// });

// app.get('/sendFile', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const members = [
  {
    id: 1,
    name: 'Luan Cardoso',
    email: 'luan@luan.com',
    status: 'active',
  },
  {
    id: 2,
    name: 'Julian Pereira',
    email: 'julian@julian.com',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'Pirlo Santos',
    email: 'pirlo@pirlo.com',
    status: 'inactive',
  },
  {
    id: 4,
    name: 'Lionel Oliveira',
    email: 'lionel@lionel.com',
    status: 'active',
  },
];

app.get('/api/member', (req, res) => {
  res.json(members);
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

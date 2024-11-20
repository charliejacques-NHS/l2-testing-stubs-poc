const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'src'))); // Serves other static assets from the root

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html')); // Serves index.html specifically from /src
});

// Existing terms and conditions route
app.get('/terms-and-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'terms-and-conditions.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
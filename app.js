
const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  // Handle the root URL (Home page)
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
  // Handle the /about URL (About page)
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/feedback', (req, res) => {
  // Handle the /feedback URL (Feedback page)
  res.sendFile(__dirname + '/views/feedback.html');
});

// Other middleware and server setup code

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

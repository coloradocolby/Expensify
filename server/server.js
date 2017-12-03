const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;

// Middleware - something that runs for each request
app.use(express.static(publicPath));

/* 
  this allows urls like /create to work 
    same as using historyApiFallback: true in webpack
*/
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is up!');
});
require('dotenv').config();

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;


const server = express();

server.use(express.static(path.join(__dirname, './client/static')));

server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, './client/static/index.html')));

server.listen(PORT, (error) => {
  if (error) {
    console.log(`there was an error on server running on port ${PORT}`);
  } else {
    console.log(`server started and succesfully running on port ${PORT}`);
  }
});

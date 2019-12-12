const express = require('express');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
   res.send(` 
   
   <h1>JSON Web Tokens  - Jashele Tillman</h1>
   <p>Running like Forest Gump baby...</p>
   
   `);
});


module.exports = server; 
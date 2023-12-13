// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "db.redhawks.us",
  user: "nchs_se",
  password: "temp2023!",
  database: "video4ever"
});

db.connect((err) => {
  if(err) throw err;
  console.log('Connected to database');
});

app.get('/data', (req, res) => {
  const branchNum = req.query.branch; // Get the selected branch value from the query parameters
  const sql = `
  SELECT Title, Price, DirectorFirst, DirectorLast, OnHand 
  FROM Inventory
  JOIN Branch ON Branch.BranchNum = Inventory.BranchNum
  JOIN Movie ON Inventory.MovieCode = Movie.MovieCode
  JOIN Directed ON Movie.MovieCode = Directed.MovieCode
  JOIN Director ON Directed.DirectorNum = Director.DirectorNum
  WHERE Branch.BranchNum = ?; 
`;
  db.query(sql, [branchNum], (err, result) => { // Pass branchNum as a parameter
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
const express = require('express');
const app = express()
const { exec } = require("child_process");

const PORT = 3000;

// app.use(express.urlencoded());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/fun', async (req, res) => {
  
  await exec(`yarn run hardhat`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.send('some error happened: 😭');
    }

    return res.status(200).send(stdout);
  });
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5001;

app.get('/get-3pc.json', (req, res) => {
  const filePath = path.join(__dirname, 'get-3pc.json'); // Replace with your JSON file path

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the JSON file', err);
      res.status(500).send('Server Error');
      return;
    }



    // 
    
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData); // Send parsed JSON as response
    } catch (error) {
      res.status(500).send('Invalid JSON format');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

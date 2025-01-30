const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();
const PORT = 5001;


const allowedOrigins = [
  "https://www.greensandbox.fr",
  "http://localhost:60404",
  "http://localhost:5001"
];


const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);

    } else {
      callback(new Error("Not allowed by CORS"));
    }
    console.log(origin);
  },
  optionsSuccessStatus: 200,
};


// cors middleware

//app.use(cookieParser)
app.use(credentials);
app.use(cors(corsOptions));
app.use(cookieParser)

// Route to set a cookie
app.get("/set-3pc.html", (req, res) => {
  // Set a third-party cookie with the appropriate attributes
  res.cookie("3pc", Date.now(), {
    path: "/",
    sameSite: "None",
    secure: true,
  });

  res.send("Third-party cookie set successfully.");
});

// Set a third-party cookie with SameSite=None and Secure attributes
app.get("/set-3pc.json", (req, res) => {
  const cookieValue = Date.now();
  res.cookie("3pc", cookieValue, {
    path: "/",
    sameSite: "None",
    secure: true,
  });
  res.json({ "3pc": cookieValue });
});

// Get the third-party cookie value
app.get("/get-3pc.json", (req, res) => {
  //const cookieValue = document.cookie["3pc"];
  const cookies = req.headers.cookie;
  console.log(cookies)
  const cookieValue = cookies['3pc']

  if (cookieValue) {
    res.json({ "3pc": cookieValue });
  } else {
    res.send("No third-party cookie found.");
  }
});


// // Send json file
// app.get('/get-3pc.json', (req, res) => {
//   const filePath = path.join(__dirname, 'get-3pc.json'); 

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading the JSON file', err);
//       res.status(500).send('Server Error');
//       return;
//     }
    
//     try {
//       const jsonData = JSON.parse(data);
//       res.json(jsonData); // Send parsed JSON as response
//     } catch (error) {
//       res.status(500).send('Invalid JSON format');
//     }
//   });
// });

// // Send html file
// app.get('/set-3pc.html', (req, res) => {
//   const filePath = path.join(__dirname, 'set-3pc.html'); 

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading the JSON file', err);
//       res.status(500).send('Server Error');
//       return;
//     }
    
//     try {
//       const jsonData = JSON.parse(data);
//       res.json(jsonData); // Send parsed JSON as response
//     } catch (error) {
//       res.status(500).send('Invalid JSON format');
//     }
//   });
// });

app.use(express.static('public'));


app.get('/', async (req, res) => {
  res.send('Hello from the backend.')
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



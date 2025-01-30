const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();
const PORT = 5001;


const allowedOrigins = [
  "https://www.greensandbox.fr",
  "https://greensandbox.fr/",
  "http://localhost:62886",
  "http://localhost:5001",
  "http://localhost:3000"
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
    //console.log(origin);
  },
  optionsSuccessStatus: 200,
};


// // cors middleware

//app.use(cookieParser)
app.use(credentials);
app.use(cors(corsOptions));
app.use(cookieParser())

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
  const cookieValue = Date.now().toString() ;
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
  const cookies = req.cookies;
  //console.log(cookies)
  const cookieValue = cookies['3pc']

  if (cookieValue) {
    res.json({ "3pc": cookieValue });
  } else {
    res.json({});
  }
});


// app.use(express.static('public'));


app.get('/', async (req, res) => {
  res.send('Hello from the backend.')
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



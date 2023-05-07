const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();

// Configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Define routes
app.get('/', (req, res) => {
  res.send('Dog Spotter API');
});

app.post('/api/dogs', upload.single('dogPicture'), (req, res) => {
  const { latitude, longitude } = req.body;
  const filePath = req.file.path;
  // Save the dog picture and location data to your database or file storage service
  // You can also use the latitude and longitude data to add a marker to the Google Map
  // Respond with a success message or error message as appropriate
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
